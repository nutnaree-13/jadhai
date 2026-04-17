'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showToast, setShowToast] = useState(false);

  // Simulated notification trigger
  const notifyLine = (jobId: string, status: string) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4500);
  };

  const tabs = [
    { id: 'overview', label: '📊 ภาพรวมระบบ (Overview)' },
    { id: 'jobs', label: '📋 คิวงาน & สถานะ (Jobs)' },
    { id: 'inventory', label: '🛍️ คลังสินค้า & พิธี (Inventory)' },
    { id: 'content', label: '📝 ข่าวสาร (Content)' }
  ];

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Admin Header */}
      <header style={{ background: '#1A1A1A', color: '#FFF', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>JADHAI Admin</span>
          <span style={{ background: '#C8102E', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>MANAGEMENT PORTAL</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#DCDCDC', fontSize: '0.9rem', textDecoration: 'none' }}>กลับสู่หน้าเว็บลูกค้า</Link>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
            👨‍💼
          </div>
        </div>
      </header>

      {/* Main Admin Area */}
      <main style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar Tabs */}
        <aside style={{ width: '250px', background: '#FFFFFF', borderRight: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 15px', color: '#888', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', borderBottom: '1px solid #EAEAEA' }}>
            BACK-OFFICE MENU
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '15px 0' }}>
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{ 
                  background: activeTab === tab.id ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  border: 'none',
                  borderRight: activeTab === tab.id ? '3px solid var(--accent-gold)' : '3px solid transparent',
                  padding: '15px 20px',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                  color: activeTab === tab.id ? 'var(--text-primary)' : '#666',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <section style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <h2 style={{ margin: '0 0 20px 0', fontSize: '1.8rem' }}>ภาพรวมผลประกอบการ</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div style={{ background: '#FFF', padding: '20px', borderRadius: '10px', border: '1px solid #EAEAEA', borderLeft: '4px solid var(--accent-gold)' }}>
                  <p style={{ margin: '0 0 10px 0', color: '#888', fontSize: '0.9rem' }}>ยอดขายสุทธิ (เดือนนี้)</p>
                  <h3 style={{ margin: 0, fontSize: '2rem', color: '#1A1A1A' }}>฿482,500 <span style={{ fontSize: '1rem', color: '#06C755' }}>+15% 📈</span></h3>
                </div>
                <div style={{ background: '#FFF', padding: '20px', borderRadius: '10px', border: '1px solid #EAEAEA', borderLeft: '4px solid #C8102E' }}>
                  <p style={{ margin: '0 0 10px 0', color: '#888', fontSize: '0.9rem' }}>คิวงานค้างดำเนินการ</p>
                  <h3 style={{ margin: 0, fontSize: '2rem', color: '#1A1A1A' }}>14 <span style={{ fontSize: '1rem', color: '#888' }}>พิธี</span></h3>
                </div>
                <div style={{ background: '#FFF', padding: '20px', borderRadius: '10px', border: '1px solid #EAEAEA', borderLeft: '4px solid #1E90FF' }}>
                  <p style={{ margin: '0 0 10px 0', color: '#888', fontSize: '0.9rem' }}>สมาชิกใหม่รอยืนยัน (LINE)</p>
                  <h3 style={{ margin: 0, fontSize: '2rem', color: '#1A1A1A' }}>89 <span style={{ fontSize: '1rem', color: '#888' }}>Account</span></h3>
                </div>
              </div>

              <div style={{ background: '#FFF', padding: '20px', borderRadius: '10px', border: '1px solid #EAEAEA', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                 <p style={{ color: '#888' }}>[พื้นที่แสดงกราฟยอดขายรายเดือน (Chart.js / Recharts Mockup)]</p>
                 <div style={{ width: '80%', height: '150px', display: 'flex', alignItems: 'flex-end', gap: '10px', justifyContent: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '20px' }}>
                    <div style={{ width: '40px', height: '60%', background: 'linear-gradient(to top, rgba(212,175,55,1), rgba(212,175,55,0.3))', borderRadius: '4px 4px 0 0' }}></div>
                    <div style={{ width: '40px', height: '80%', background: 'linear-gradient(to top, rgba(212,175,55,1), rgba(212,175,55,0.3))', borderRadius: '4px 4px 0 0' }}></div>
                    <div style={{ width: '40px', height: '40%', background: 'linear-gradient(to top, rgba(212,175,55,1), rgba(212,175,55,0.3))', borderRadius: '4px 4px 0 0' }}></div>
                    <div style={{ width: '40px', height: '100%', background: 'linear-gradient(to top, rgba(200,16,46,1), rgba(200,16,46,0.3))', borderRadius: '4px 4px 0 0' }}></div>
                 </div>
              </div>
            </div>
          )}

          {/* TAB 2: JOBS */}
          {activeTab === 'jobs' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '1.8rem' }}>การจัดการคิวงาน (Job Tracking)</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="text" placeholder="ค้นหา รหัสอ้างอิง / ชื่อลูกค้า..." style={{ padding: '8px 15px', borderRadius: '4px', border: '1px solid #CCC', width: '250px' }} />
                  <button style={{ background: '#1A1A1A', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px' }}>ค้นหา</button>
                </div>
              </div>

              <div style={{ background: '#FFF', borderRadius: '8px', border: '1px solid #EAEAEA', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ background: '#F8F9FA', fontSize: '0.9rem', color: '#555' }}>
                    <tr>
                      <th style={{ padding: '15px', borderBottom: '1px solid #EAEAEA' }}>รหัสงาน</th>
                      <th style={{ padding: '15px', borderBottom: '1px solid #EAEAEA' }}>ลูกค้า</th>
                      <th style={{ padding: '15px', borderBottom: '1px solid #EAEAEA' }}>ประเภทพิธี / สินค้า</th>
                      <th style={{ padding: '15px', borderBottom: '1px solid #EAEAEA' }}>สถานะปัจจุบัน</th>
                      <th style={{ padding: '15px', borderBottom: '1px solid #EAEAEA' }}>เครื่องมือแอดมิน (Action)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #EAEAEA' }}>
                      <td style={{ padding: '15px', fontWeight: 'bold' }}>#JDH-2026-0417</td>
                      <td style={{ padding: '15px' }}>คุณนัทนารี (VIP)</td>
                      <td style={{ padding: '15px' }}>งานทำบุญขึ้นบ้านใหม่ + ชุดบายศรี</td>
                      <td style={{ padding: '15px' }}><span style={{ padding: '4px 10px', background: '#FFF3CD', color: '#856404', borderRadius: '12px', fontSize: '0.8rem' }}>กำลังดำเนินการจัดเตรียม</span></td>
                      <td style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                        <select style={{ padding: '5px', borderRadius: '4px', border: '1px solid #CCC' }}>
                           <option>เตรียมของ/จัดของ</option>
                           <option>กำลังเดินทางไปหน้างาน</option>
                           <option>พิธีเสร็จสมบูรณ์</option>
                        </select>
                        <button onClick={() => notifyLine('#JDH-2026-0417', 'update')} style={{ background: '#06C755', color: '#FFF', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>ส่ง LINE หาผู้จอง</button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #EAEAEA' }}>
                      <td style={{ padding: '15px', fontWeight: 'bold' }}>#JDH-2026-0415</td>
                      <td style={{ padding: '15px' }}>คุณสมชาย รักไทย</td>
                      <td style={{ padding: '15px' }}>พิธีพราหมณ์ตั้งศาลพระภูมิ</td>
                      <td style={{ padding: '15px' }}><span style={{ padding: '4px 10px', background: '#D4EDDA', color: '#155724', borderRadius: '12px', fontSize: '0.8rem' }}>เสร็จเรียบร้อย</span></td>
                      <td style={{ padding: '15px' }}>
                        <button style={{ background: '#EAEAEA', color: '#555', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>ดูเอกสารจบงาน</button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #EAEAEA' }}>
                      <td style={{ padding: '15px', fontWeight: 'bold' }}>#JDH-2026-0416</td>
                      <td style={{ padding: '15px' }}>ร้านเจ๊ไฝ อาหารตามสั่ง</td>
                      <td style={{ padding: '15px' }}>สั่งพานผลไม้มงคล 9 ชนิด</td>
                      <td style={{ padding: '15px' }}><span style={{ padding: '4px 10px', background: '#CCE5FF', color: '#004085', borderRadius: '12px', fontSize: '0.8rem' }}>จัดส่งของขวัญเรียบร้อย</span></td>
                      <td style={{ padding: '15px' }}>
                         <button style={{ background: '#CCC', color: '#555', border: 'none', borderRadius: '4px', padding: '5px 10px', fontSize: '0.8rem' }} disabled>ส่งข้อความแล้ว</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="animate-fade-in">
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '1.8rem' }}>จัดการคลังสินค้าและแพ็คเกจ (PIM)</h2>
                <button style={{ background: 'var(--accent-gold)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>+ เพิ่มรายการใหม่</button>
              </div>

              <div style={{ background: '#FFF', padding: '20px', borderRadius: '8px', border: '1px solid #EAEAEA' }}>
                 <p style={{ color: '#888', margin: '0 0 20px 0' }}>ฐานข้อมูลรายการสินค้า (กำลังเชื่อมต่อกับ /shop และ /services)</p>
                 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ background: '#F8F9FA', fontSize: '0.9rem', color: '#555' }}>
                    <tr><th style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>SKU / รหัสสินค้า</th><th style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>ชื่อสินค้า/แพ็คเกจ</th><th style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>ราคาปัจจุบัน (฿)</th><th style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>สต็อก</th><th style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>จัดการ</th></tr>
                  </thead>
                  <tbody>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>A-001</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>ชุดสังฆทานพรีเมียม (มหามงคล)</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>2,590</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA', color: 'green' }}>144</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}><a href="#" style={{ color: '#0066CC', fontSize: '0.8rem' }}>แก้ไข</a></td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>M-101</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>กำไลหินโรสควอตซ์ (หนุนดวงความรัก)</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>1,590</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA', color: 'red' }}>5 (ใกล้หมด)</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}><a href="#" style={{ color: '#0066CC', fontSize: '0.8rem' }}>จัดการสต็อก</a></td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>S-PKG-TH</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>แพ็คเกจจัดงานพิธีไทย (เต็มรูปแบบ)</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}>15,900</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA', color: '#888' }}>Service</td><td style={{ padding: '10px', borderBottom: '1px solid #EAEAEA' }}><a href="#" style={{ color: '#0066CC', fontSize: '0.8rem' }}>แก้ไข</a></td></tr>
                  </tbody>
                 </table>
              </div>
            </div>
          )}

          {/* TAB 4: CONTENT */}
          {activeTab === 'content' && (
             <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '1.8rem' }}>จัดการเนื้อหาและข่าวสาร (CMS)</h2>
                <button style={{ background: '#C8102E', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>📝 เริ่มเขียนบทความใหม่</button>
              </div>
              <div style={{ display: 'grid', gap: '15px' }}>
                <div style={{ background: '#FFF', padding: '15px 20px', borderRadius: '8px', border: '1px solid #EAEAEA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div>
                     <strong style={{ display: 'block', fontSize: '1.1rem' }}>เปิดเคล็ดลับมูเตลูความรักให้ปังรับดาวศุกร์ย้าย!</strong>
                     <span style={{ fontSize: '0.8rem', color: '#888' }}>ยอดคนเข้าชม: 1,420 • โพสต์เมื่อ: 16 พ.ค. 2568</span>
                   </div>
                   <div>
                      <span style={{ background: '#D4EDDA', color: '#155724', padding: '3px 10px', borderRadius: '10px', fontSize: '0.8rem', marginRight: '10px' }}>เผยแพร่แล้ว</span>
                      <button style={{ padding: '5px 10px', border: '1px solid #CCC', background: '#FFF', borderRadius: '4px', cursor: 'pointer' }}>แก้ไข</button>
                   </div>
                </div>
                <div style={{ background: '#FFF', padding: '15px 20px', borderRadius: '8px', border: '1px solid #EAEAEA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div>
                     <strong style={{ display: 'block', fontSize: '1.1rem' }}>ไหว้ท้าวเวสสุวรรณอย่างไร ให้ปลดหนี้ รับทรัพย์ก้อนโต</strong>
                     <span style={{ fontSize: '0.8rem', color: '#888' }}>ยอดคนเข้าชม: 3,590 • โพสต์เมื่อ: 10 พ.ค. 2568</span>
                   </div>
                   <div>
                      <span style={{ background: '#D4EDDA', color: '#155724', padding: '3px 10px', borderRadius: '10px', fontSize: '0.8rem', marginRight: '10px' }}>เผยแพร่แล้ว</span>
                      <button style={{ padding: '5px 10px', border: '1px solid #CCC', background: '#FFF', borderRadius: '4px', cursor: 'pointer' }}>แก้ไข</button>
                   </div>
                </div>
              </div>
             </div>
          )}

        </section>
      </main>

      {/* Admin LINE Toast Mockup */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '30px', /* Pop from top right for admin */
          backgroundColor: '#343A40', /* Dark Theme for Admin Alert */
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
          display: 'flex',
          padding: '15px 20px',
          width: '350px',
          zIndex: 9999,
          animation: 'slideLeft 0.3s forwards',
          borderLeft: '5px solid #06C755'
        }}>
          <div>
            <h4 style={{ margin: '0 0 5px 0', color: '#06C755' }}>LINE API Triggered Successfully 🟢</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#DCDCDC' }}>The job status update has been successfully pushed to the user's LINE application via Messaging API.</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideLeft {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
