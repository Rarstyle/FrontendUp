import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from '../../../../lib/firebase';
import { Slot } from '@/entities/slot/model/types';

const SLOTS_COLLECTION = 'slots';

export class SlotApi {
  // Get all slots for current user
  static async getUserSlots(): Promise<Slot[]> {
    if (!auth.currentUser) {
      throw new Error('User not authenticated');
    }

    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('userId', '==', auth.currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Slot[];
  }

  // Get single slot by ID
  static async getSlot(slotId: string): Promise<Slot | null> {
    if (!auth.currentUser) {
      throw new Error('User not authenticated');
    }

    const docRef = doc(db, SLOTS_COLLECTION, slotId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    
    // Security check: ensure user owns this slot
    if (data.userId !== auth.currentUser.uid) {
      throw new Error('Access denied');
    }

    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    } as Slot;
  }

  // Create new slot
  static async createSlot(slotData: Omit<Slot, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<string> {
    if (!auth.currentUser) {
      throw new Error('User not authenticated');
    }

    // Validation
    if (!slotData.name.trim()) {
      throw new Error('Slot name is required');
    }

    if (slotData.variants.length < 2) {
      throw new Error('At least 2 variants are required');
    }

    const newSlot = {
      ...slotData,
      userId: auth.currentUser.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, SLOTS_COLLECTION), newSlot);
    return docRef.id;
  }

  // Update slot
  static async updateSlot(slotId: string, updates: Partial<Slot>): Promise<void> {
    if (!auth.currentUser) {
      throw new Error('User not authenticated');
    }

    // Security check: ensure user owns this slot
    const existingSlot = await this.getSlot(slotId);
    if (!existingSlot) {
      throw new Error('Slot not found');
    }

    const docRef = doc(db, SLOTS_COLLECTION, slotId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  }

  // Delete slot
  static async deleteSlot(slotId: string): Promise<void> {
    if (!auth.currentUser) {
      throw new Error('User not authenticated');
    }

    // Security check: ensure user owns this slot
    const existingSlot = await this.getSlot(slotId);
    if (!existingSlot) {
      throw new Error('Slot not found');
    }

    const docRef = doc(db, SLOTS_COLLECTION, slotId);
    await deleteDoc(docRef);
  }
} 