"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LineMockupPage() {
  const [messages, setMessages] = useState<any[]>([]);

  // Simulate receiving notification messages
  useEffect(() => {
    const initialMessages = [
      { id: 1, type: 'system', text: 'วันนี้เป็นวันธงชัย เหมาะแก่การเริ่มต้นสิ่งใหม่!' },
      { id: 2, type: 'jadhai', text: 'สวัสดีคุณ นัทนรี ยินดีต้อนรับสู่ JADHAI Official 🙏✨\n\nพร้อมรับพลังบวกและจัดเตรียมงานมงคลไปกับเรา', time: '09:00' }
    ];
    setMessages(initialMessages);

    const timer1 = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: 3, 
        type: 'jadhai', 
        isCard: true,
        title: '🔔 แจ้งเตือนฤกษ์มงคลของคุณ',
        desc: 'พรุ่งนี้ 09:09 น. เป็นฤกษ์ดีสำหรับเปิดกิจการ ทิศให้โชคคือทิศตะวันออก',
        time: '09:02'
      }]);
    }, 2000);

    const timer2 = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: 4, 
        type: 'jadhai', 
        isCard: true,
        title: '👕 แจ้งเตือนสีเสื้อมงคลประจำวัน',
        desc: 'วันนี้วันอังคาร สีมงคลเสริมโชคลาภ: ส้ม, ดำ\nสีกาลกิณี: ขาว, เหลือง',
        time: '09:03'
      }]);
    }, 4000);

    const timer3 = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: 5, 
        type: 'jadhai', 
        isCard: true,
        title: '✅ ยืนยันคิวศาสนพิธีกร',
        desc: 'อาจารย์ธรรมศาสตร์ ได้รับการยืนยันคิวงานของคุณแล้ว (วันอาทิตย์นี้ 08:30 น.)',
        time: '09:04'
      }]);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xxl)', backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      
      {/* Mobile Phone Mockup Frame */}
      <div style={{
        width: '400px',
        height: '800px',
        backgroundColor: '#84A1C4', // LINE background blue-grey
        borderRadius: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 0 0 12px #333',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Safe Area Notch Mockup */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '25px',
          backgroundColor: '#333',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          zIndex: 10
        }} />

        {/* LINE Chat Header */}
        <div style={{
          backgroundColor: '#202A36',
          color: '#FFF',
          padding: '45px 15px 15px 15px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <Link href="/" style={{ fontSize: '1.2rem', color: '#FFF' }}>&lt;</Link>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
            J
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>จัดให้ JADHAI ✨</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Official Account</div>
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, padding: '20px 15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <span style={{ backgroundColor: 'rgba(0,0,0,0.15)', color: '#FFF', padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem' }}>
              วันนี้
            </span>
          </div>

          {messages.map((msg) => {
            if (msg.type === 'system') {
              return (
                <div key={msg.id} style={{ textAlign: 'center', fontSize: '0.85rem', color: '#555', backgroundColor: 'rgba(255,255,255,0.4)', padding: '6px', borderRadius: '8px', margin: '0 auto', maxWidth: '80%' }}>
                  {msg.text}
                </div>
              );
            }

            return (
              <div key={msg.id} className="animate-fade-in" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#D4AF37', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 'bold' }}>J</div>
                
                <div style={{ maxWidth: '75%' }}>
                  {!msg.isCard ? (
                    <div style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '0 16px 16px 16px', color: '#333', fontSize: '0.95rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', whiteSpace: 'pre-wrap' }}>
                      {msg.text}
                    </div>
                  ) : (
                    <div style={{ backgroundColor: '#FFF', borderRadius: '0 16px 16px 16px', color: '#333', fontSize: '0.95rem', boxShadow: '0 2px 5px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: '#C8102E', color: '#FFF', padding: '10px 12px', fontWeight: 600 }}>
                        {msg.title}
                      </div>
                      <div style={{ padding: '15px 12px', lineHeight: 1.5 }}>
                        {msg.desc}
                      </div>
                      <div style={{ borderTop: '1px solid #EEE', padding: '10px', textAlign: 'center', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
                        ดูรายละเอียด
                      </div>
                    </div>
                  )}
                  <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '4px' }}>{msg.time}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Rich Menu */}
        <div style={{ backgroundColor: '#FFF', borderTop: '1px solid #DDD', borderBottomLeftRadius: '28px', borderBottomRightRadius: '28px', paddingBottom: '12px' }}>
          {/* Menu Toggle bar */}
          <div style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #EEE', color: '#666', fontSize: '0.85rem' }}>
            <span>▼ เมนูอัตโนมัติ (Rich Menu)</span>
          </div>
          
          {/* 2x2 Grid Menu */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '120px 120px', gap: '2px', backgroundColor: '#EAE5D9' }}>
            <Link href="/booking" style={{ backgroundColor: '#1A1816', color: '#D4AF37', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <div style={{ width: '50px', height: '50px', position: 'relative', marginBottom: '8px' }}>
                <Image src="/jadhai/images/icon_booking_premium_1773555283436.png" alt="จองศาสนพิธีกร" fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>จองศาสนพิธีกร</span>
            </Link>
            <Link href="/shop" style={{ backgroundColor: '#C8102E', color: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <div style={{ width: '50px', height: '50px', position: 'relative', marginBottom: '8px' }}>
                <Image src="/jadhai/images/icon_shop_premium_1773555300882.png" alt="สั่งของไหว้มงคล" fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>สั่งซื้อเครื่องบูชา</span>
            </Link>
            <Link href="/calendar" style={{ backgroundColor: '#FDFBF7', color: '#2C2A26', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <div style={{ width: '50px', height: '50px', position: 'relative', marginBottom: '8px' }}>
                <Image src="/jadhai/images/icon_calendar_premium_1773555318690.png" alt="ปฏิทินฤกษ์มงคล" fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>ฤกษ์มงคล</span>
            </Link>
            <Link href="/profile" style={{ backgroundColor: '#D4AF37', color: '#1A1816', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <div style={{ width: '50px', height: '50px', position: 'relative', marginBottom: '8px' }}>
                <Image src="/jadhai/images/icon_profile_premium_1773555334809.png" alt="ข้อมูลส่วนตัว" fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>ข้อูลส่วนตัว/ดวงชะตา</span>
            </Link>
          </div>
          
          <div style={{ display: 'flex', padding: '10px 15px', gap: '10px', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: '#666' }}>+</div>
            <div style={{ flex: 1, backgroundColor: '#F5F5F5', borderRadius: '20px', padding: '8px 15px', color: '#999', fontSize: '0.9rem' }}>พิมพ์ข้อความ...</div>
            <div style={{ fontSize: '1.2rem', color: '#666' }}>🙂</div>
          </div>
        </div>

      </div>

      <div style={{ marginLeft: '40px', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>จำลองหน้าจอ <span style={{ color: '#06C755' }}>LINE OA</span></h2>
        <p style={{ color: '#6B685C', marginBottom: 'var(--spacing-md)' }}>ระบบจะจำลองการส่งข้อความแจ้งเตือนต่างๆ ให้กับสมาชิกผ่าน LINE Official Account หลังจากที่ลูกค้าจองคิว หรือสั่งซื้อสินค้า</p>
        <p style={{ color: '#6B685C' }}>มาพร้อมกับ <strong>Rich Menu</strong> ด้านล่างที่ออกแบบตามธีมสีของ จัดให้ JADHAI (แดง ขาว ครีม ทอง) เพื่อเป็นทางลัดให้ลูกค้ากลับเข้ามาในระบบของเราได้ตลอดเวลา</p>
      </div>

    </div>
  );
}
