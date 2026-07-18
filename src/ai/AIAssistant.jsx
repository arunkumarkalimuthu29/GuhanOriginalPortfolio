import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from './aiContext';
import './ai.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Icon Animation State
  const [iconText, setIconText] = useState("AI");

  // Initial History
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello. I am the system assistant. Ask me about Guhan's projects, skills, or engineering philosophy." }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Icon Loop Animation (4 Seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between Text "AI" and Face "▀ ▀"
      setIconText(prev => prev === "AI" ? "▀ ▀" : "AI");
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // 2. Get Response
    const responseText = await generateAIResponse(input);

    // 3. Add AI Message
    setMessages(prev => [...prev, { role: 'ai', content: responseText }]);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  // --- LOGIC FIX: Handles Closing vs Minimizing Correctly ---
  const toggleOpen = () => {
    // If open...
    if (isOpen) {
      // If currently minimized -> Restore it
      if (isMinimized) {
        setIsMinimized(false);
      } 
      // If fully open -> Close it
      else {
        setIsOpen(false);
      }
    } 
    // If closed -> Open it
    else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON (Animated Icon) */}
      <button className="ai-trigger" onClick={toggleOpen} title="Toggle AI Assistant">
        {isOpen ? '✕' : <span className="ai-icon-text">{iconText}</span>}
      </button>

      {/* THE PANEL */}
      <div className={`ai-panel ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
        
        {/* HEADER */}
        <div className="ai-header" onDoubleClick={() => setIsMinimized(!isMinimized)}>
          <span className="ai-title">SYSTEM INTELLIGENCE</span>
          <div className="ai-controls">
            {/* Color: Dark Red */}
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              style={{ fontSize: '1.5rem', lineHeight: '1rem', verticalAlign: 'middle', color: '#D32F2F' }}
            >
              {isMinimized ? '+' : '−'}
            </button>
          </div>
        </div>

        {/* CONTENT */}
        {!isMinimized && (
          <>
            <div className="ai-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {loading && <div className="message ai">Processing Query...</div>}
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-input-area">
              <input 
                type="text" 
                className="ai-input" 
                placeholder="Initialize query..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="ai-send-btn" onClick={handleSend}>→</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AIAssistant;