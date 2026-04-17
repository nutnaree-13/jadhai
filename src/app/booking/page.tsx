'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock Data for Officiants
const OFFICIANTS = [
  {
    id: 'o1',
    name: 'พราหมณ์กริช',
    title: 'พราหมณ์หลวง (ประสบการณ์ 20 ปี)',
    specialties: ['พิธีตั้งศาล', 'เทวาภิเษก', 'บวงสรวงเปิดกล้อง'],
    imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/brahmin_priest_thailand_1776363433330.png',
    rating: 4.9,
    reviewsCount: 124,
    reviews: [
      { user: 'คุณวิชัย', comment: 'พราหมณ์ท่านจัดงานได้ศักดิ์สิทธิ์มากครับ อธิบายขั้นตอนชัดเจน', rating: 5 },
      { user: 'คุณสมหญิง', comment: 'งานราบรื่นมากค่ะ รู้สึกเป็นสิริมงคลกับที่บ้านมาก', rating: 5 }
    ],
    price: 9900,
    tags: ['กรุงเทพมหานคร', 'ปริมณฑล']
  },
  {
    id: 'o2',
    name: 'ซินแส หมิงเต้า',
    title: 'ซินแสฮวงจุ้ยและพิธีจีน',
    specialties: ['หาฤกษ์มงคล', 'พิธียกน้ำชา', 'ตั้งตี่จู้เอี๊ยะ'],
    imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/feng_shui_master_1776363449351.png',
    rating: 4.8,
    reviewsCount: 89,
    reviews: [
      { user: 'Boonterm K.', comment: 'อาจารย์ให้คำแนะนำเรื่องฮวงจุ้ยและทิศตั้งตี่จู้เอี๊ยะได้ละเอียดมาก', rating: 5 },
      { user: 'ครอบครัวแซ่ลี้', comment: 'พิธียกน้ำชาจัดได้ถูกต้องตามประเพณีดั้งเดิมเลยครับ', rating: 4.5 }
    ],
    price: 8500,
    tags: ['กรุงเทพมหานคร', 'ชลบุรี']
  },
  {
    id: 'o3',
    name: 'อ. ธรรมราช',
    title: 'เจ้าพิธีไทย (นิมนต์พระ/พราหมณ์)',
    specialties: ['ทำบุญขึ้นบ้านใหม่', 'งานมงคลสมรส', 'ทำบุญบริษัท'],
    imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/thai_lay_master_1776363466647.png',
    rating: 4.9,
    reviewsCount: 201,
    reviews: [
      { user: 'คุณนพดล', comment: 'อาจารย์นำสวดได้ไพเราะและน่าเลื่อมใสมากครับ', rating: 5 },
      { user: 'คุณจิราพร', comment: 'ดูแลเรื่องคิวงานและบทสวดได้ไม่มีสะดุดเลยค่ะ ทีมงานมืออาชีพ', rating: 5 }
    ],
    price: 5500,
    tags: ['ทั่วประเทศ']
  },
  {
    id: 'o4',
    name: 'แม่หมอ สายชล',
    title: 'ผู้เชี่ยวชาญพิธีบวงสรวง',
    specialties: ['พิธีสักการะ', 'บวงสรวงใหญ่', 'แก้บน'],
    imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/thai_spirit_medium_1776363480908.png',
    rating: 4.7,
    reviewsCount: 65,
    reviews: [
      { user: 'คุณแนน', comment: 'แม่หมอใจดีมากค่ะ ให้คำปรึกษาเรื่องการเตรียมของไหว้ได้ละเอียด', rating: 5 },
      { user: 'บจก. เอ็นพี', comment: 'พิธีบวงสรวงเปิดกล้องราบรื่นดีครับ', rating: 4.5 }
    ],
    price: 3500,
    tags: ['ฉะเชิงเทรา', 'กรุงเทพมหานคร']
  }
];

export default function BookingPage() {
  const [selectedCeremony, setSelectedCeremony] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  
  const [bookingModal, setBookingModal] = useState<any>(null);
  const [reviewModal, setReviewModal] = useState<any>(null);
  const router = useRouter();

  const handleBook = (officiant: any) => {
    if (!selectedCeremony || !date || !time || !location) {
      alert("กรุณาเลือกประเภทพิธี, วันที่, เวลา และสถานที่ ด้ายซ้ายมือก่อนทำการจองครับ");
      return;
    }
    setBookingModal(officiant);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', minHeight: '80vh' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', marginBottom: 'var(--spacing-sm)' }}>
            คิว<span className="text-gradient">ศาสนพิธีกร</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            เลือกผู้ประกอบพิธีที่ตรงกับความต้องการและฤกษ์มงคลของคุณ
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)', alignItems: 'flex-start' }}>
        
        {/* Left Side: Sticky Filters */}
        <div style={{ flex: '1 1 300px', position: 'sticky', top: '100px' }}>
          <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🔍</span> ค้นหาคิวว่าง
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ประเภทพิธีมงคล</label>
                <select 
                  value={selectedCeremony}
                  onChange={(e) => setSelectedCeremony(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
                >
                  <option value="">ทั้งหมด</option>
                  <option value="ขึ้นบ้านใหม่">ทำบุญขึ้นบ้านใหม่ / เปิดบริษัท</option>
                  <option value="แต่งงาน">งานมงคลสมรส</option>
                  <option value="ตั้งศาล">ตั้งศาลพระภูมิ/ศาลพระพรหม</option>
                  <option value="บวงสรวง">บวงสรวงทั่วไป</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>วันที่สะดวกจัดงาน</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ช่วงเวลาที่ต้องการ (ฤกษ์)</label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
                >
                  <option value="">ไม่ระบุเวลา</option>
                  <option value="เช้า">ช่วงเช้า (06:00 - 09:00)</option>
                  <option value="สาย">ช่วงสาย (09:00 - 12:00)</option>
                  <option value="บ่าย">ช่วงบ่าย (13:00 - 16:00)</option>
                  <option value="ค่ำ">ช่วงเย็น/ค่ำ (17:00 เป็นต้นไป)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>สถานที่จัดงาน (จังหวัด)</label>
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
                >
                  <option value="">ทุกพื้นที่</option>
                  <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                  <option value="ปริมณฑล">ปริมณฑล</option>
                  <option value="เชียงใหม่">เชียงใหม่</option>
                  <option value="ชลบุรี">ชลบุรี</option>
                  <option value="ภูเก็ต">ภูเก็ต</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Officiants Feed */}
        <div style={{ flex: '1 1 600px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            {OFFICIANTS.map(o => (
              <div 
                key={o.id} 
                className="glass-panel"
                style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-lg)', 
                  padding: 'var(--spacing-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Profile Image */}
                <div style={{ width: '150px', height: '150px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={o.imageUrl} alt={o.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Info */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '4px', color: 'var(--text-primary)' }}>{o.name}</h2>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>{o.title}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--accent-gold-dark)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                         ⭐ {o.rating} 
                         <span 
                           onClick={() => setReviewModal(o)}
                           style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'normal', textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px' }}
                         >
                           ({o.reviewsCount} รีวิว)
                         </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}><strong>ความเชี่ยวชาญ:</strong></p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {o.specialties.map((s, idx) => (
                        <span key={idx} style={{ background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>อัตราค่าบริการเริ่มต้น</span><br/>
                      <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿{o.price.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link href="/shop" style={{ textDecoration: 'none' }}>
                        <button style={{ 
                          padding: '0.6rem 1rem', 
                          backgroundColor: 'transparent',
                          color: 'var(--accent-gold-dark)',
                          border: '1px solid var(--accent-gold)',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}>
                          🛒 สั่งเครื่องบูชาพิธีนี้
                        </button>
                      </Link>
                      <button className="btn-primary" onClick={() => handleBook(o)} style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                        จองทันที
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {bookingModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn var(--transition-fast) forwards'
        }}>
          <div className="glass-panel" style={{ width: '90%', maxWidth: '500px', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
            <button 
              onClick={() => setBookingModal(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '1.5rem', color: 'var(--text-secondary)' }}
            >
              ✕
            </button>
            <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>ยืนยันการจองคิว</h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)' }}>
              <p style={{ marginBottom: '8px' }}><strong>ศาสนพิธีกร:</strong> {bookingModal.name}</p>
              <p style={{ marginBottom: '8px' }}><strong>ประเภทพิธี:</strong> {selectedCeremony}</p>
              <p style={{ marginBottom: '8px' }}><strong>วันที่/เวลา:</strong> {date} ({time})</p>
              <p style={{ marginBottom: '8px' }}><strong>สถานที่:</strong> {location}</p>
            </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 'var(--spacing-lg)' }}>
              <span>ยอดมัดจำ (30%)</span>
              <span className="text-gradient">฿{Math.floor(bookingModal.price * 0.3).toLocaleString()}</span>
            </div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => router.push('/checkout')}>
              ไปที่หน้าชำระเงินมัดจำ
            </button>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {reviewModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn var(--transition-fast) forwards'
        }}>
          <div className="glass-panel" style={{ width: '90%', maxWidth: '500px', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
            <button 
              onClick={() => setReviewModal(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '1.5rem', color: 'var(--text-secondary)' }}
            >
              ✕
            </button>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>รีวิวผู้ใช้บริการ</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>{reviewModal.name}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {reviewModal.reviews.map((rev: any, idx: number) => (
                <div key={idx} style={{ padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{rev.user}</strong>
                    <span style={{ color: 'var(--accent-gold-dark)' }}>⭐ {rev.rating}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>"{rev.comment}"</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
