"use client";

import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useLocalSlots } from "@/hooks/useLocalSlots";
import SlotForm, { SlotFormData } from "@/components/SlotForm";

export const metadata = {
  title: "Новый слот – AdBrain Lab",
};

export default function NewSlotPage() {
  useAuthGuard();
  const router = useRouter();
  const { createSlot } = useLocalSlots();

  const handleCreate = async (data: SlotFormData) => {
    // Convert image file to base64 data URL for storage
    const file = data.image && data.image.length > 0 ? data.image[0] : null;
    let base64Image: string | null = null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        base64Image = reader.result as string;
        // Create slot object and save to localStorage
        const newId = createSlot({
          name: data.name,
          platform: data.platform,
          text: data.text,
          variations: data.variations,
          image: base64Image || "",
          status: "running",
        });
        router.replace(`/slot/${newId}`);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8 px-5">
      <h1 className="text-2xl font-bold text-primary mb-6">
        Создать новый слот
      </h1>
      <SlotForm onSubmit={handleCreate} />
    </div>
  );
}
