'use client';

import React, { useState } from 'react';

export default function LineTestButton({ userId }: { userId: string }) {
  const [showPopup, setShowPopup] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleTest = async () => {
    const mockMessage = "🔮 ศุภมงคลวันนี้: ทิศตะวันออกจะเป็นทิศแห่งโชคลาภของคุณ เหมาะเจรจาธุรกิจ สีเสริมบารมี: ขาว, ทอง";
    try {
      await fetch('/api/line/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          messageType: 'horoscope',
          payload: { text: mockMessage }
        })
      });
      setMessageText(mockMessage);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    } catch (e) {
      console.error(e);
      alert('เกิดข้อผิดพลาดในการส่งข้อความ');
    }
  };

  return (
    <>
      <button 
        className="btn-primary" 
        style={{ width: '100%', fontSize: '0.9rem', padding: '10px' }}
        onClick={handleTest}
      >
        ทดสอบให้ระบบเด้งแจ้งเตือน LINE
      </button>

      {/* Simulated LINE Notification Popup */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#FAFAFA',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          padding: '12px 16px',
          width: '90%',
          maxWidth: '400px',
          zIndex: 9999,
          animation: 'slideDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#06C755', // LINE Green
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginRight: '12px'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>J</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#111' }}>JADHAI Official</span>
              <span style={{ fontSize: '0.7rem', color: '#888' }}>เมื่อสักครู่</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#444', margin: '4px 0 0 0', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {messageText}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          0% { top: -100px; opacity: 0; }
          100% { top: 20px; opacity: 1; }
        }
      `}</style>
    </>
  );
}
