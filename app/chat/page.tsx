'use client'

import { useUser } from '../../context/UserContext';
import { useState } from 'react';

export default function ChatPage() {
  const { username } = useUser();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const message = `${username}: ${input}`;
      setMessages((prev) => [...prev, message]);
      setInput('');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Phòng chat</h2>
      <p>Xin chào, <strong>{username}</strong>!</p>

      <div style={{
        border: '1px solid #ccc',
        padding: 10,
        height: 250,
        overflowY: 'auto',
        marginBottom: 10,
        background: '#f9f9f9',
        borderRadius: 5
      }}>
        {messages.length === 0 && <p><i>Chưa có tin nhắn nào.</i></p>}
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Nhập tin nhắn..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: '70%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginLeft: '10px',
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Gửi
      </button>
    </main>
  );
}