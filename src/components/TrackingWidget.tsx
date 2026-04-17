'use client';

import React, { useState } from 'react';

export default function TrackingWidget() {
  const [currentStep, setCurrentStep] = useState(2); // 1 = รอรับชำระ, 2 = ชำระแล้ว/กำลังเตรียม, 3 = พร้อมปฏิบัติงาน, 4 = เสร็จสิ้น
  const [showPopup, setShowPopup] = useState(false);
  const [messageText, setMessageText] = useState("");

  const triggerLineNotification = (message: string, nextStep?: number) => {
    setMessageText(message);
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 100);
    setTimeout(() => setShowPopup(false), 6000);
    
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  return (
    <div style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid #EAE5D9', boxShadow: 'var(--shadow-md)', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>📦 สถานะการจัดงานพิธีของคุณ</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '5px 0 0 0' }}>รหัสการจอง: <strong style={{ color: 'var(--accent-gold-dark)' }}>JD-9942</strong> | แพ็คเกจงานทำบุญบ้าน (พิธีไทย)</p>
        </div>
        <span style={{ background: 'var(--bg-secondary)', color: 'var(--accent-gold-dark)', padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid var(--accent-gold)' }}>อัปเดตล่าสุด: วานนี้ 15:30 น.</span>
      </div>

      {/* TIMELINE UI */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)', position: 'relative', overflowX: 'auto', paddingBottom: '10px' }}>
        <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '4px', background: '#EAE5D9', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: '15px', left: '10%', width: currentStep === 1 ? '0%' : currentStep === 2 ? '30%' : currentStep === 3 ? '60%' : '80%', height: '4px', background: 'var(--accent-gold)', zIndex: 1, transition: 'width 0.5s ease' }}></div>

        {/* Step 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, minWidth: '100px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: currentStep >= 1 ? 'var(--accent-gold)' : '#EAE5D9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>✓</div>
          <span style={{ fontSize: '0.8rem', marginTop: '8px', color: currentStep >= 1 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: currentStep >= 1 ? 'bold' : 'normal', textAlign: 'center' }}>ชำระมัดจำ</span>
        </div>

        {/* Step 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, minWidth: '100px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: currentStep >= 2 ? 'var(--accent-gold)' : '#EAE5D9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>{currentStep >= 3 ? '✓' : '2'}</div>
          <span style={{ fontSize: '0.8rem', marginTop: '8px', color: currentStep >= 2 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: currentStep === 2 ? 'bold' : 'normal', textAlign: 'center' }}>มอบหมายทีมงาน</span>
        </div>

        {/* Step 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, minWidth: '100px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: currentStep >= 3 ? 'var(--accent-gold)' : '#EAE5D9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>{currentStep >= 4 ? '✓' : '3'}</div>
          <span style={{ fontSize: '0.8rem', marginTop: '8px', color: currentStep >= 3 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: currentStep === 3 ? 'bold' : 'normal', textAlign: 'center' }}>พร้อมปฏิบัติงาน</span>
        </div>

        {/* Step 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, minWidth: '100px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: currentStep >= 4 ? '#06C755' : '#EAE5D9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>4</div>
          <span style={{ fontSize: '0.8rem', marginTop: '8px', color: currentStep >= 4 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: currentStep === 4 ? 'bold' : 'normal', textAlign: 'center' }}>เสร็จสิ้นพิธี</span>
        </div>
      </div>

      {/* Grid Layout for details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
        
        {/* Coordinater Details */}
        <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: '#FAFAF8' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            👥 ผู้ประสานงานพิธีของคุณ
          </h3>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', background: '#ccc' }}>
              <img src="/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/thai_lay_master_1776363466647.png" alt="Coordinator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontWeight: 'bold', margin: '0 0 4px 0', fontSize: '1rem' }}>อ. ธรรมราช คงมั่น</p>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.8rem' }}>ผู้เชี่ยวชาญด้านพิธีสงฆ์</p>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', margin: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>📞 เบอร์ติดต่อ:</span> <strong>089-123-4567</strong>
          </p>
          <button style={{ width: '100%', padding: '10px', background: '#06C755', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            💬 แชทผ่าน LINE
          </button>
        </div>

        {/* Date & Details */}
        <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: '#FAFAF8' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-primary)' }}>📅 ข้อมูลนัดหมาย</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>วันที่จัดงาน:</span>
              <strong>25 มิ.ย. 2568</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>เวลาฤกษ์มงคล:</span>
              <strong style={{ color: 'var(--accent-gold-dark)' }}>09:09 น. - 11:30 น.</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>สถานที่จัดงาน:</span>
              <strong style={{ textAlign: 'right', maxWidth: '150px' }}>หมู่บ้านมงคล ซอย 9 ก่อสร้างใหม่</strong>
            </div>
          </div>
          <hr style={{ borderTop: '1px dashed var(--border-color)', borderBottom: 'none', margin: '15px 0' }} />
          <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>รายการพ่วงมาด้วย:</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>✓ ชุดสังฆทานพรีเมียม 9 ชุด</p>
        </div>
      </div>

      {/* Admin Demo Actions */}
      <div style={{ marginTop: 'var(--spacing-lg)', padding: '15px', background: '#F0F4F8', borderLeft: '4px solid #1E3A8A', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 10px 0' }}>เครื่องมือจำลองสถานการณ์สำหรับผู้ดูแลระบบ (Admin Demo Mode):</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => triggerLineNotification("🔔 แจ้งสถานะใหม่: ผู้ประสานงาน ธรรมราช ได้อนุมัติรับงานพิธีทำบุญบ้านของคุณแล้ว และกำลังเริ่มงานจัดเตรียมสถานที่ครับ", 2)}
            style={{ padding: '8px 12px', fontSize: '0.8rem', border: '1px solid #1E3A8A', background: 'transparent', color: '#1E3A8A', borderRadius: '4px', cursor: 'pointer' }}>
            จำลอง: มอบหมายงานสำเร็จ
          </button>
          <button 
            onClick={() => triggerLineNotification("🔔 สินค้าพร้อม!! ทีมงานกำลังทยอยนำชุดสังฆทานพรีเมียม 9 ชุดขึ้นรถขนส่งเพื่อเดินทางไปที่หมู่บ้านมงคลครับ", 3)}
            style={{ padding: '8px 12px', fontSize: '0.8rem', border: '1px solid #D4AF37', background: '#FFF8DC', color: '#D4AF37', borderRadius: '4px', cursor: 'pointer' }}>
            จำลอง: ของเตรียมพร้อมออก
          </button>
          <button 
            onClick={() => triggerLineNotification("✅ พิธีกรรมเสร็จสิ้นบริบูรณ์! ขอบพระคุณที่ไว้วางใจให้ JADHAI ดูแลความสิริมงคลของคุณค่ะ (กรุณาให้คะแนนรีวิวผู้ประสานงาน)", 4)}
            style={{ padding: '8px 12px', fontSize: '0.8rem', border: '1px solid #06C755', background: '#E8F5E9', color: '#06C755', borderRadius: '4px', cursor: 'pointer' }}>
            จำลอง: พิธีการจบลง
          </button>
        </div>
      </div>

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
            <p style={{ fontSize: '0.85rem', color: '#444', margin: '4px 0 0 0', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
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
    </div>
  );
}
