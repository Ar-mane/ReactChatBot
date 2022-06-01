import React from "react";
import { Message } from "./../models/Message";

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({
  message: { username, date, message }
}: ChatMessageProps) {
  return (
    <p>
      <span>
        <b>{username}</b> <small>{date.toLocaleTimeString()}</small>
      </span>
      <div>{message}</div>
    </p>
  );
}
