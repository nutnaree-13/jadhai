"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function HoroscopePage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const tarotCards = [
    {
      id: 'sun',
      name: 'The Sun (เดอะซัน)',
      image: '/images/tarot_sun.png',
      meaning: 'ไพ่แห่งความสำเร็จ ความสุข ความรุ่งโรจน์ และพลังงานชีวิต พลังงานบวกกำลังโอบล้อมคุณ หากเริ่มต้นสิ่งใดในวันนี้จะประสบผลสำเร็จอย่างงดงาม'
    },
    {
      id: 'star',
      name: 'The Star (เดอะสตาร์)',
      image: '/images/tarot_star.png',
      meaning: 'ไพ่แห่งความหวัง แรงบันดาลใจ และการฟื้นฟูเยียวยา สิ่งที่คุณคาดหวังกำลังจะกลายเป็นจริง ขอให้เชื่อมั่นในสัญชาตญาณและแสงสว่างนำทางของคุณ'
    },
    {
      id: 'empress',
      name: 'The Empress (ดิเอ็มเพรส)',
      image: '/images/tarot_empress.png',
      meaning: 'ไพ่แห่งความอุดมสมบูรณ์ ความรัก และความเจริญงอกงาม เป็นจังหวะที่ดีในการดูแลตัวเอง ครอบครัว หรือลงทุนทำธุรกิจที่เกี่ยวกับความสวยงามและอาหารการกิน'
    }
  ];

  const drawCard = () => {
    if (isFlipped) return;
    // Randomly select one of the positive cards
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(tarotCards[randomIndex]);
    setIsFlipped(true);
  };

  const resetCard = () => {
    setIsFlipped(false);
    setTimeout(() => setSelectedCard(null), 300); // Wait for flip animation to finish
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xxl)' }}>
      {/* Inline styles for the flip animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .tarot-container {
          perspective: 1000px;
          width: 250px;
          height: 400px;
          margin: 0 auto;
          cursor: pointer;
        }
        .tarot-card {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          box-shadow: var(--shadow-xl);
          border-radius: 16px;
        }
        .tarot-card.flipped {
          transform: rotateY(180deg);
        }
        .tarot-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #D4AF37;
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }
        .tarot-back {
          background-color: #5B0000;
        }
        .tarot-front {
          background-color: #FFF;
          transform: rotateY(180deg);
        }
      `}} />

      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>
          เปิดไพ่<span style={{ color: '#D4AF37' }}>ทำนายดวงชะตา</span>ประจำวัน
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6B685C' }}>
          ตั้งจิตให้นิ่ง อธิษฐานขอพร แล้วคลิกเลือกไพ่ 1 ใบ เพื่อรับข้อความนำทางชีวิตในวันนี้
        </p>
      </div>

      <section className="container" style={{ maxWidth: '800px', marginBottom: 'var(--spacing-xl)' }}>
        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          
          <div className="tarot-container" onClick={drawCard}>
            <div className={`tarot-card ${isFlipped ? 'flipped' : ''}`}>
              {/* Back of Card */}
              <div className="tarot-face tarot-back">
                <Image src="/jadhai/images/tarot_back.png" alt="Tarot Card Back" fill style={{ objectFit: 'cover' }} />
              </div>
              
              {/* Front of Card */}
              <div className="tarot-face tarot-front">
                {selectedCard && (
                  <Image src={selectedCard.image} alt={selectedCard.name} fill style={{ objectFit: 'cover' }} />
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-lg)', minHeight: '150px' }}>
            {!isFlipped ? (
              <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: '#B8860B', fontWeight: 600 }}>
                &uarr; คลิกที่ไพ่เพื่อเปิดคำทำนาย &uarr;
              </p>
            ) : (
              <div className="animate-fade-in" style={{ backgroundColor: '#FDFBF7', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', border: '1px solid #EAE5D9' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#C8102E', marginBottom: 'var(--spacing-sm)' }}>{selectedCard?.name}</h2>
                <p style={{ fontSize: '1.1rem', color: '#4A4840', lineHeight: 1.6, marginBottom: 'var(--spacing-md)' }}>
                  {selectedCard?.meaning}
                </p>
                <button className="btn-primary" onClick={(e) => { e.stopPropagation(); resetCard(); }} style={{ padding: '8px 16px', fontSize: '0.9rem', background: 'transparent', color: '#6B685C', border: '1px solid #EAE5D9', boxShadow: 'none' }}>
                  เปิดไพ่ใบใหม่อีกครั้ง
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '800px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--spacing-lg)',
          backgroundColor: '#FFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid #EAE5D9',
          borderTop: '4px solid #06C755'
        }}>
          
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: '#2C2A26' }}>
              รับโชคดวงดีทุกวันผ่าน <span style={{ color: '#06C755' }}>LINE OA</span>
            </h2>
            <ul style={{ listStyle: 'none', marginBottom: 'var(--spacing-md)', color: '#4A4840', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#06C755' }}>✔</span> รับแจ้งเตือนฤกษ์ยามดีประจำสัปดาห์
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#06C755' }}>✔</span> เช็คสีเสื้อมงคลและทิศให้โชครายวัน
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#06C755' }}>✔</span> ติดตามคิวจองและสถานะสินค้า
              </li>
            </ul>
            <button 
              className="btn-primary" 
              style={{ 
                alignSelf: 'flex-start', 
                backgroundColor: '#06C755', 
                background: '#06C755',
                boxShadow: '0 4px 14px 0 rgba(6, 199, 85, 0.39)',
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem'
              }}
              onClick={() => window.open('https://line.me/th/', '_blank')}
            >
              เพิ่มเพื่อน @JADHAI
            </button>
          </div>

          <div style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '150px', 
                  height: '150px', 
                  backgroundColor: '#ECECEC', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: '10px',
                  margin: '0 auto',
                  border: '3px solid #06C755'
                }}>
                  <span style={{ color: '#A0A0A0', fontSize: '0.8rem' }}>QR Code สำหรับแอดไลน์</span>
                </div>
             </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
