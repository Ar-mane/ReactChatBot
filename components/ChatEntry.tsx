import React from "react";

export interface ChatEntryProps {
  onSend(message: string): void;
}

export function ChatEntry({ onSend }: ChatEntryProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let input = (event.currentTarget["message"] as any) as HTMLInputElement;
    onSend(input.value);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <input name="message" placeholder="Message" required />
      <button>Send</button>
    </form>
  );
}
