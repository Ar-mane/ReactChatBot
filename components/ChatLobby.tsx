import React from "react";

export interface ChatLobbyProps {
  onJoin(name: string): void;
}

export function ChatLobby({ onJoin }: ChatLobbyProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let input = (event.currentTarget["name"] as any) as HTMLInputElement;
    onJoin(input.value);
  };
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label>What's your username?</label>
      <br />
      <input name="name" placeholder="e.g FleetManager" required />
      <br />
      <button>Join chat!</button>
    </form>
  );
}
