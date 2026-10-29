export function FormError({ id, errors }: { id?: string; errors?: string | string[] | null }) {
  const messages = typeof errors === 'string' ? [errors] : (errors ?? []);

  return (
    <div id={id} aria-live="polite" aria-atomic>
      {messages.map((message: string) => (
        <p className="mt-2 text-sm text-red-500" key={message}>
          {message}
        </p>
      ))}
    </div>
  );
}
