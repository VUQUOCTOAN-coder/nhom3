'use client'
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

export default function ChatPage() {
  const { username } = useUser();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input) {
      setMessages(prev => [...prev, `${username}: ${input}`]);
      setInput('');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Chat Room</h2>
      <div style={{ border: '1px solid gray', height: 200, overflowY: 'scroll', marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </main>
  );
}