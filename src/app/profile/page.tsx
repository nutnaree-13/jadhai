"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProfileDashboard() {
  const [reminderActive, setReminderActive] = useState(false);

  // Mock User Data
  const user = {
    name: "คุณจันทร์เพ็ญ รุ่งเรือง",
    zodiac: "ราศีสิงห์",
    element: "ธาตุไฟ",
    luckyColors: ["แดง", "ส้ม", "ทอง"],
  };

  // Mock Recommendation
  const recommendation = {
    deity: "พระพิฆเนศ",
    title: "เทพแห่งความสำเร็จและปัญญา",
    reason: "ดวงชะตาช่วงนี้ดาวการงานโดดเด่น เหมาะแก่การเริ่มต้นโปรเจกต์ใหม่ การไหว้ขอพรพระพิฆเนศจะช่วยขจัดอุปสรรคและเสริมความราบรื่น",
    howTo: [
      "เตรียมเครื่องบูชา: น้ำสะอาด นมสด ขนมต้ม และดอกดาวเรือง หรือ ดอกชบาแดง",
      "จุดธูป 9 ดอก และเทียน 2 เล่ม",
      "สวดบทบูชา: โอม ศรี คเณศายะ นะมะฮา (3 จบ)",
      "ขอพรอย่างตั้งใจ และกล่าวขอบคุณ"
    ],
    places: [
      "ศาลพระพิฆเนศ สี่แยกห้วยขวาง (เปิด 24 ชม.)",
      "เทวสถานโบสถ์พราหมณ์ (เสาชิงช้า)",
      "วัดสมานรัตนาราม จ.ฉะเชิงเทรา"
    ],
    nextAuspiciousDate: "14 มีนาคม 2569 (วันเวลาดี 09.09 น.)",
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xxl)' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xl)', color: '#2C2A26' }}>
          ข้อมูลส่วนตัว <span style={{ color: '#D4AF37' }}>& ดวงชะตาของคุณ</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--spacing-lg)' }}>
          
          {/* ----- LEFT COLUMN: Profile & Horoscope summary ----- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  จ
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{user.name}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>สมาชิกทั่วไป</span>
                </div>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid #EAE5D9', margin: 'var(--spacing-md) 0' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ราศี</span>
                  <div style={{ fontWeight: 600 }}>{user.zodiac}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ธาตุ</span>
                  <div style={{ fontWeight: 600 }}>{user.element}</div>
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>สีมงคลประจำสัปดาห์</span>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '5px' }}>
                    {user.luckyColors.map(color => (
                       <span key={color} style={{ padding: '4px 12px', background: '#FDFBF7', border: '1px solid #D4AF37', borderRadius: '20px', fontSize: '0.85rem', color: '#B8860B' }}>
                         {color}
                       </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(to bottom, #FFFBF0, #FFF)' }}>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <span style={{ fontSize: '1.5rem' }}>📅</span> ฤกษ์ดีของคุณที่กำลังจะมาถึง
               </h3>
               <div style={{ padding: '15px', background: '#FFF5F5', borderLeft: '4px solid #C8102E', borderRadius: '8px', marginBottom: '15px' }}>
                 <div style={{ fontWeight: 'bold', color: '#C8102E', marginBottom: '5px' }}>{recommendation.nextAuspiciousDate}</div>
                 <div style={{ fontSize: '0.95rem' }}>ฤกษ์เหมาะแก่การไหว้ขอพรความสำเร็จ</div>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: '#FAFAF8', borderRadius: '8px' }}>
                 <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>แจ้งเตือนผ่าน LINE</span>
                 <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div 
                      onClick={() => setReminderActive(!reminderActive)}
                      style={{ 
                        width: '40px', height: '22px', 
                        backgroundColor: reminderActive ? '#06C755' : '#D1D1D6', 
                        borderRadius: '15px', position: 'relative', transition: '0.3s' 
                      }}
                    >
                      <div style={{ 
                        width: '18px', height: '18px', 
                        backgroundColor: '#FFF', borderRadius: '50%', 
                        position: 'absolute', top: '2px', 
                        left: reminderActive ? '20px' : '2px', 
                        transition: '0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
                      }}></div>
                    </div>
                 </label>
               </div>
               {reminderActive && <p style={{ fontSize: '0.8rem', color: '#06C755', marginTop: '10px', textAlign: 'center' }}>ระบบจะส่งข้อความแจ้งเตือน 1 วันล่วงหน้า</p>}
            </div>

          </div>

          {/* ----- RIGHT COLUMN: Recommendations ----- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            
            <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>เทวดา/เทพ ที่แนะนำให้ไหว้เสริมดวงช่วงนี้</span>
                  <h2 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#2C2A26' }}>{recommendation.deity}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{recommendation.title}</p>
                </div>
                <div style={{ fontSize: '4rem', filter: 'drop-shadow(0px 4px 8px rgba(212, 175, 55, 0.3))' }}>🐘</div>
              </div>
              
              <div style={{ backgroundColor: '#FDFBF7', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #D4AF37', marginBottom: 'var(--spacing-xl)' }}>
                <strong>ตามดวงชะตา:</strong> {recommendation.reason}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2C2A26', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#D4AF37' }}>✦</span> วิธีการไหว้ How-to
                  </h4>
                  <ul style={{ paddingLeft: '20px', color: '#4A4840', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {recommendation.howTo.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2C2A26', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#C8102E' }}>📍</span> สถานที่แนะนำ
                  </h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, color: '#4A4840', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {recommendation.places.map((place, idx) => (
                      <li key={idx} style={{ padding: '10px', background: '#FAFAF8', borderRadius: '6px', border: '1px solid #EAE5D9' }}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ----- Shopping Integration ----- */}
            <div className="glass-panel" style={{ padding: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', border: '1px solid #EAE5D9' }}>
               <div style={{ flex: '1 1 200px', backgroundColor: '#F0EFEB', position: 'relative', minHeight: '250px' }}>
                  <Image src="/images/ganesha_set.png" alt="ชุดไหว้พระพิฆเนศ" fill style={{ objectFit: 'cover' }} />
               </div>
               <div style={{ flex: '2 1 400px', padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <div style={{ color: '#C8102E', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>จัดเตรียมให้พร้อม สำหรับวันมงคลของคุณ</div>
                 <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>ชุดบูชาองค์พระพิฆเนศ (พรีเมียม)</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                   เซ็ตเครื่องบูชาครบถ้วนตามหลักพิธีฮินดู ประกอบด้วยดอกชบาแดง ส่าหรี กำยาน ตะเกียงประทีป และขนมโมทกะลาดู พร้อมส่งตรงถึงบ้านคุณก่อนวันฤกษ์ดี
                 </p>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37' }}>฿ 1,590</span>
                   <button className="btn-primary" onClick={() => alert('เพิ่มชุดบูชาลงตะกร้าเรียบร้อยแล้ว!')}>
                      สั่งซื้อพร้อมส่งทันที
                   </button>
                 </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
