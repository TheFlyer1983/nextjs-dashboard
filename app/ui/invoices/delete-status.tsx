'use client';

import { createContext, useContext, useState } from 'react';
import { FormError } from '@/app/ui/form-errors';

const DeleteStatusContext = createContext<{
  message: string | null;
  setMessage: (message: string | null) => void;
} | null>(null);

export function DeleteStatusProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <DeleteStatusContext.Provider value={{ message, setMessage }}>
      {children}
    </DeleteStatusContext.Provider>
  );
}

export function useDeleteStatus() {
  const context = useContext(DeleteStatusContext);
  if (!context) throw new Error('useDeleteStatus must be used inside DeleteStatusProvider');
  return context;
}

export function DeleteStatusMessage() {
  const { message } = useDeleteStatus();
  return <FormError errors={message} />;
}
