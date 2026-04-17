import React from 'react';
import HoroscopeCard from '@/components/HoroscopeCard';

export default function TarotPage() {
  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center', maxWidth: '600px' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold-dark)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Jadhai Daily Fortune</span>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>
          เปิดไพ่พยากรณ์<span className="text-gradient">ทาโรต์ประจำวัน</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          ตั้งจิตให้สงบ อธิษฐานถึงสิ่งที่กำลังกังวล แล้วคลิกเปิดไพ่ 1 ใบ เพื่อรับคำแนะนำจากจักรวาล (บริการฟรีสำหรับสมาชิก) 
        </p>
      </header>

      <div style={{ width: '100%', maxWidth: '500px', height: '600px' }}>
        <HoroscopeCard />
      </div>

    </div>
  );
}
