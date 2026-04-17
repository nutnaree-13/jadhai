'use client';

import React, { useState } from 'react';

export default function HoroscopeCard() {
  const [isDrawn, setIsDrawn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const drawCard = () => {
    setIsLoading(true);
    // Simulate API call for pulling a tarot card or horoscope
    setTimeout(() => {
      setIsLoading(false);
      setIsDrawn(true);
    }, 1500);
  };

  return (
    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>🔮 เปิดไพ่ทำนายดวงประจำวัน</h2>
      </div>
      
      {!isDrawn ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
          <div style={{
            width: '120px', 
            height: '180px', 
            background: 'linear-gradient(135deg, #2C2A26, #1A1816)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '10px',
            boxShadow: 'var(--shadow-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-md)',
            animation: isLoading ? 'pulse 1s infinite' : 'none'
          }}>
             <span style={{ fontSize: '3rem' }}>✨</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            ทำสมาธิและตั้งจิตอธิษฐาน เพื่อรับฟังคำแนะนำประจำวัน
          </p>
          <button 
            onClick={drawCard} 
            disabled={isLoading}
            className="btn-primary" 
            style={{ width: '100%', maxWidth: '200px' }}
          >
            {isLoading ? "กำลังเปิดไพ่..." : "เริ่มเปิดไพ่"}
          </button>
        </div>
      ) : (
        <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '120px', 
            height: '180px', 
            background: 'var(--card-bg)',
            border: '3px solid #D4AF37',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-md)',
            overflow: 'hidden'
          }}>
            <img src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=400&auto=format&fit=crop" alt="The Sun Tarot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--accent-gold-dark)' }}>The Sun (เดอะซัน)</h3>
          <p style={{ fontSize: '0.9rem', textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            วันนี้เป็นวันแห่งความสำเร็จและความสุข พลังงานบวกจะดึงดูดสิ่งดีๆ เข้ามาในชีวิตของคุณ การงานและความรักราบรื่น
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-sm)', width: '100%', display: 'flex', gap: '10px' }}>
             <div style={{ flex: 1, background: 'rgba(212, 175, 55, 0.1)', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '0.8rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)' }}>สีมงคล</strong>
                <span style={{ color: 'var(--accent-gold-dark)' }}>ส้ม, ทอง</span>
             </div>
             <div style={{ flex: 1, background: 'rgba(212, 175, 55, 0.1)', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '0.8rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)' }}>เลขมงคล</strong>
                <span style={{ color: 'var(--accent-gold-dark)' }}>1, 9</span>
             </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
