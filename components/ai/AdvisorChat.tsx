'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, MessageSquare } from 'lucide-react';
import Markdown from 'react-markdown';

export function AdvisorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'model', content: string}[]>([
    { role: 'model', content: "Hi! I'm your AI Landscape Advisor. I can answer questions about materials, Mississauga bylaws, or rough pricing. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMsg }] }),
      });

      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      setMessages(prev => [...prev, { role: 'model', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;
        
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].content = fullResponse;
          return newMsgs;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-16 w-16 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-[400px] h-[650px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-primary/10 flex flex-col z-50 overflow-hidden flex-shrink-0">
          {/* Header */}
          <div className="bg-primary text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2.5 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Smart Project Advisor</h3>
                <p className="text-sm text-white/70">Instant answers 24/7</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-light/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${msg.role === 'user' ? 'bg-secondary text-white rounded-tr-none' : 'bg-white border border-primary/10 shadow-sm rounded-tl-none text-dark/80'}`}>
                  <div className="markdown-body prose prose-sm max-w-none">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div className="bg-white border border-primary/10 shadow-sm rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary/50" />
                  <span className="text-sm text-dark/50">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-primary/10">
            <form onSubmit={sendMessage} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about materials, costs, bylaws..."
                className="flex-1 p-3 rounded-xl border border-primary/20 focus:ring-2 focus:ring-secondary outline-none text-sm"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </form>
            <p className="text-[11px] text-center text-dark/40 mt-3">
              AI provides preliminary guidance. Verify with our team.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
