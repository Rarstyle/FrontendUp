# Feature Sliced Design (FSD) Architecture

## Overview

This project follows the Feature Sliced Design methodology for scalable and maintainable code organization.

## Directory Structure

```
src/
├── app/                    # App layer (Next.js pages)
├── pages/                  # Page layer (page-specific components)
├── widgets/                # Widget layer (complex UI blocks)
├── features/               # Feature layer (business logic)
│   ├── slot-management/    # Slot management feature
│   │   ├── api/           # API calls
│   │   ├── model/         # Business logic
│   │   └── ui/            # Feature-specific components
├── entities/               # Entity layer (data models)
│   └── slot/
│       ├── model/         # Type definitions
│       └── ui/            # Entity-specific components
└── shared/                 # Shared layer (utilities, configs)
    ├── config/            # Configuration files
    ├── lib/               # Utility functions
    ├── ui/                # Shared UI components
    └── api/               # Shared API utilities
```

## Security Implementation

### Firebase Security Rules

- **Server-side validation**: All data access is validated through Firebase security rules
- **User isolation**: Users can only access their own data
- **CRUD security**: Create, read, update, delete operations are restricted by user ownership

### Key Security Features

1. **Authentication required**: All operations require valid user authentication
2. **User ownership validation**: Users can only access resources they own
3. **Data validation**: Input data is validated both client-side and server-side
4. **Access control**: Granular permissions for different resource types

## API Layer Structure

### Slot Management API

- `SlotApi.getUserSlots()` - Get all slots for current user
- `SlotApi.getSlot(id)` - Get single slot with ownership validation
- `SlotApi.createSlot(data)` - Create new slot with validation
- `SlotApi.updateSlot(id, updates)` - Update slot with security checks
- `SlotApi.deleteSlot(id)` - Delete slot with ownership verification

## Data Models

### Slot Entity

```typescript
interface Slot {
  id: string;
  userId: string; // Owner validation
  name: string;
  platform: 'vk' | 'yandex';
  status: 'draft' | 'running' | 'completed' | 'paused';
  variants: SlotVariant[];
  targetMetric: 'ctr' | 'conversion' | 'roas';
  results?: SlotResults;
}
```

## Benefits of This Architecture

1. **Scalability**: Easy to add new features without affecting existing code
2. **Maintainability**: Clear separation of concerns
3. **Security**: Server-side validation prevents unauthorized access
4. **Type Safety**: Strong TypeScript typing throughout the application
5. **Testability**: Isolated layers are easier to test
6. **Reusability**: Shared components and utilities can be reused across features
