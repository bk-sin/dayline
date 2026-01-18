# Source Code Structure

This folder contains all the application logic and components.

## Folder Organization

### 📱 `/components`

Reusable visual components

- **`common/`** - Generic UI components (buttons, inputs, themed components)
- **`modules/`** - Feature-specific components (e.g., UserCard, ProductList)

### 🎨 `/constants`

Fixed values and configuration

- `theme.ts` - Color palette and theme configuration

### 🌐 `/context`

Global state management (React Context / Zustand)

- Example: `AuthContext.tsx`

### 🪝 `/hooks`

Custom React hooks for reusable logic

- `use-color-scheme.ts` - Theme detection hook
- `use-theme-color.ts` - Color management hook

### 🔌 `/services`

External API communication

- `api.ts` - Axios/Fetch configuration
- Feature-specific services (e.g., `userService.ts`)

### 📝 `/types`

TypeScript interfaces and type definitions

- Example: `user.d.ts`

### 🛠️ `/utils`

Pure utility functions

- `validations.ts` - Form validation helpers
- `formatDate.ts` - Date formatting utilities
