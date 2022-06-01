import React, { useCallback, useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { Message } from "./../models/Message";
import { ChatMessage } from "./ChatMessage";
import { ChatEntry } from "./ChatEntry";
import { SETTINGS } from "~/models/settings";

export interface ChatRoomProps {
  name: string;
}

export function ChatRoom({ name }: ChatRoomProps) {
  const [connection, setConnection] = useState<signalR.HubConnection>();
  const [messages, setMessages] = useState<Message[]>([]);

  const onMessageReceived = useCallback((username: string, message: string) => {
    setMessages((_messages) => [
      ..._messages,
      { username, message, date: new Date() }
    ]);
  }, []);

  const onSend = (message: string) => {
    connection?.send("SendMessage", name, message);
  };

  useEffect(() => {
    const _connection = new signalR.HubConnectionBuilder()
      .withUrl(SETTINGS.HUB_URL)
      .build();

    _connection.on("ReceiveMessage", onMessageReceived);
    _connection
      .start()
      .then(() => setConnection(_connection))
      .catch((err) => {
        alert("There was an error connecting to server");
        console.error(err);
      });
  }, [onMessageReceived]);

  if (!connection) return <div>Loading...</div>;

  return (
    <>
      <div>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div>
        <ChatEntry onSend={onSend} />
      </div>
    </>
  );
}
