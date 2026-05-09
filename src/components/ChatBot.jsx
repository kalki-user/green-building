import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('gaia_token');

  useEffect(() => {
    if (!token) {
      setMessages([{ role: 'bot', text: 'Greetings. I am Gaia. Please log in to your account so I may remember your building journey and provide personalized consultations.' }]);
      return;
    }

    // Fetch History on Mount
    const fetchHistory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat-history`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const history = await response.json();
        if (history && history.length > 0) {
          setMessages(history.map(m => ({ 
            role: m.role === 'assistant' ? 'bot' : 'user', 
            text: m.content 
          })));
        } else {
          setMessages([{ role: 'bot', text: 'Welcome back. I am Gaia, protector of the Earth. How can I assist you with your green building journey today?' }]);
        }
      } catch (err) {
        console.error("History fetch failed:", err);
      }
    };
    fetchHistory();
  }, [token]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const [isSpeaking, setIsSpeaking] = useState(false);

  const stopSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      const voices = window.speechSynthesis.getVoices();
      const gaiaVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Google US English')) || voices[0];
      if (gaiaVoice) utterance.voice = gaiaVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = async (directText = null) => {
    const userMessage = directText || input.trim();
    if (!userMessage || isTyping) return;

    if (!token) {
      navigate('/auth');
      setIsOpen(false);
      return;
    }

    if (!directText) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Server error");

      const botText = data.text || "I have received your message but my response is empty.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
      speak(botText);
    } catch (error) {
      console.error("Backend Error:", error);
      const errorMsg = "I apologize, but my connection to the earth's roots is weak at the moment.";
      setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
      speak(errorMsg);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestion = (text) => handleSend(text);

  const suggestions = [
    { label: "Start Consultation 🏛️", text: "I need a consultation for a new eco-home." },
    { label: "Best Materials? 🌿", text: "What are the best sustainable materials for my climate?" },
    { label: "Save Water 💧", text: "How can I implement water harvesting?" },
    { label: "About Gaia ✨", text: "Tell me about your purpose, Gaia." }
  ];

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-fab" onClick={() => setIsOpen(true)}>
          <MessageSquare />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Gaia</h3>
            <div className="header-actions">
              {isSpeaking && (
                <button className="audio-btn active" onClick={stopSpeak} title="Stop Audio">
                  <Volume2 size={22} className="pulse-icon" />
                </button>
              )}
              {!isSpeaking && (
                <button className="audio-btn" style={{ opacity: 0.3 }} disabled>
                  <VolumeX size={22} />
                </button>
              )}
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
          </div>

          {/* Quick Suggestions */}
          {!isTyping && (
            <div className="quick-suggestions">
              {suggestions.map((s, i) => (
                <button 
                  key={i} 
                  className="suggestion-chip"
                  onClick={async () => {
                    // We need a way to pass the text directly to handleSend
                    // Or just use the existing handleSend logic but update it slightly
                    await handleSuggestion(s.text);
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-area">

            <input
              type="text"
              placeholder="Ask Gaia..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              className="send-btn" 
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default ChatBot;
