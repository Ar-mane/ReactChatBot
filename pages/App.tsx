import { NextPage } from "next";
import React, { useState } from "react";
import { ChatLobby } from "~/components/ChatLobby";
import { ChatRoom } from "~/components/ChatRoom";

const App: NextPage = () => {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>RChat</h1>
      {!name ? <ChatLobby onJoin={setName} /> : <ChatRoom name={name} />}
    </div>
  );
}
export default App;