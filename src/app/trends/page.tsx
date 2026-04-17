'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TRENDS = [
  {
    id: 1,
    title: 'เปิดเคล็ดลับมูเตลูความรักให้ปังรับดาวศุกร์ย้าย!',
    category: '✨ ดูดวงความรัก',
    date: '16 พฤษภาคม 2568',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    excerpt: 'ครึ่งปีหลังดาวศุกร์ส่องสว่าง ใครที่โสดเตรียมตัวสละโสด! เผยเคล็ดลับการบูชาเทพเสริมเสน่ห์ และไอเทมติดตัวที่ขาดไม่ได้เพื่อให้รักสมหวัง...',
    ctaText: 'สั่งซื้อกำไลโรสควอตซ์ / ด้ายแดง',
    ctaLink: '/shop?filter=เครื่องรางสายมู'
  },
  {
    id: 2,
    title: 'ไหว้ท้าวเวสสุวรรณอย่างไร ให้ปลดหนี้ รับทรัพย์ก้อนโต',
    category: '🙏 เคล็ดลับการบูชา',
    date: '10 พฤษภาคม 2568',
    image: 'https://images.unsplash.com/photo-1599643478524-fb524fa0a897?auto=format&fit=crop&w=800&q=80',
    excerpt: 'หากคุณเป็นสายลุยธุรกิจที่ต้องการความมั่นคง ท้าวเวสสุวรรณคือคำตอบ! สรุปขั้นตอนการเตรียมของไหว้สีแดง 9 อย่างให้ถูกหลัก พร้อมคาถาเรียกทรัพย์',
    ctaText: 'สั่งซื้อชุดกุหลาบแดง 9 ดอก',
    ctaLink: '/shop'
  },
  {
    id: 3,
    title: 'ฤกษ์ดีขึ้นบ้านใหม่ ปลายปี 68 วันไหนเฮงที่สุด?',
    category: '📅 ฤกษ์มงคล',
    date: '02 พฤษภาคม 2568',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'เตรียมย้ายเข้าบ้านใหม่? เช็คปฏิทินฤกษ์ดิถีอำมฤตโชค พร้อมแนะนำแพ็คเกจจัดงานทำบุญบ้านใหม่แบบจบครบในที่เดียว ไม่ต้องเหนื่อยเตรียมของเอง',
    ctaText: 'จองแพ็คเกจทำบุญบ้านพุทธ',
    ctaLink: '/services'
  }
];

export default function TrendsPage() {
  const [showToast, setShowToast] = useState(false);

  const simulateMarketingPush = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '80vh' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold-dark)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Jadhai Mu-Trends</span>
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>
          อัปเดต<span className="text-gradient">เทรนด์สายมู</span>ประจำสัปดาห์
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
          เคล็ดลับการบูชา ฤกษ์มงคล และเครื่องรางเสริมดวงที่สายมูเตลูตัวจริงต้องไม่พลาด อ่านแล้วกดสั่งของไปมูต่อได้ทันที!
        </p>

        {/* Demo Button for the Professor */}
        <button 
          onClick={simulateMarketingPush}
          style={{ 
            background: '#06C755', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '20px', 
            fontSize: '0.9rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(6, 199, 85, 0.3)'
          }}
        >
          📱 จำลองการส่ง Broadcast ข่าวสารเข้า LINE
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
        {TRENDS.map((trend, index) => (
          <div key={trend.id} className="glass-panel" style={{ 
            display: 'flex', 
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            gap: 'var(--spacing-lg)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            alignItems: 'center',
            background: 'linear-gradient(to bottom right, #ffffff, #FAFAF8)',
            border: '1px solid rgba(212,175,55,0.2)'
          }}>
            
            <div style={{ flex: '1 1 400px', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
              <img src={trend.image} alt={trend.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 15, left: 15, background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)', boxShadow: 'var(--shadow-sm)' }}>
                {trend.category}
              </div>
            </div>

            <div style={{ flex: '1 1 400px', padding: 'var(--spacing-md)' }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>🕒 {trend.date}</span>
              <h2 style={{ fontSize: '1.8rem', margin: '10px 0', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                {trend.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                {trend.excerpt}
              </p>
              
              <Link href={trend.ctaLink} passHref legacyBehavior>
                <a style={{ 
                  display: 'inline-block',
                  background: 'var(--accent-gold)', 
                  color: '#fff', 
                  padding: '12px 25px', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  🛒 {trend.ctaText}
                </a>
              </Link>
            </div>

          </div>
        ))}
      </div>

      {showToast && (
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
          maxWidth: '430px',
          zIndex: 9999,
          animation: 'slideDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#06C755',
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
            <p style={{ fontSize: '0.85rem', color: '#444', margin: '4px 0 0 0', lineHeight: '1.4' }}>
              <strong>✨ อัปเดตใหม่!:</strong> เปิดเคล็ดลับมูเตลูความรักให้ปังรับดาวศุกร์ย้าย! ใครโสดรีบกดดู เคล็ดลับพบคู่ปีนี้ด่วน!
            </p>
            <div style={{ marginTop: '8px', padding: '6px', background: '#F0F0F0', borderRadius: '4px', textAlign: 'center', fontSize: '0.8rem', color: '#06C755', fontWeight: 'bold' }}>
              🔗 แตะเพื่ออ่านข่าวสาร
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          0% { top: -100px; opacity: 0; }
          100% { top: 20px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
