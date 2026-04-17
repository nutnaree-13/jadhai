import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Link from "next/link"
import HoroscopeCard from "../../components/HoroscopeCard"
import LineTestButton from "@/components/LineTestButton"
import TrackingWidget from "@/components/TrackingWidget"

export default async function DashboardPage() {
  let session = await getServerSession(authOptions)
  
  if (!session) {
    // Mock Session for testing without LINE Provider keys
    session = {
      user: { name: 'คุณนัทนารี (Mock User)', email: 'nutnaree@mock.test' },
      expires: '9999-12-31T23:59:59.999Z'
    };
  }

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-lg) 0', minHeight: '80vh' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--spacing-md)' }}>
        <h1 style={{ fontSize: '2.5rem' }}>
          สวัสดี, <span className="text-gradient">{session.user?.name || "ผู้ใช้งาน"}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>นี่คือกระดานแจ้งเตือนและข้อมูลข่าวสารมงคลประจำวันของคุณ</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-lg)' }}>
        
        {/* ROW 1: Profile & Privileges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-lg)' }}>
          
          {/* Left: Comprehensive VIP Profile */}
          <div className="glass-panel" style={{ 
            padding: 'var(--spacing-lg)', 
            borderRadius: 'var(--radius-lg)', 
            background: 'linear-gradient(145deg, #1A1A1A, #2C2A26)',
            border: '1px solid var(--accent-gold)',
            color: '#EAE5D9',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #8B6508)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', border: '3px solid #1A1A1A', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}>
                  👑
                </div>
                <div>
                  <p style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Jadhai Exclusive Member</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#FFF', margin: '0 0 5px 0' }}>{session.user?.name}</p>
                  <div style={{ display: 'inline-block', background: 'rgba(212, 175, 55, 0.2)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)' }}>JADHAI GOLD TIER</div>
                </div>
              </div>
              <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', cursor: 'pointer' }}>แก้ไข</button>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: 'var(--radius-md)', marginBottom: '15px', fontSize: '0.9rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div><span style={{ color: '#888' }}>เบอร์โทร:</span> <span style={{ color: '#fff' }}>089-123-4567</span></div>
                <div><span style={{ color: '#888' }}>วันเกิด:</span> <span style={{ color: '#fff' }}>15 ส.ค. 2535 (34 ปี)</span></div>
                <div><span style={{ color: '#888' }}>เพศ:</span> <span style={{ color: '#fff' }}>หญิง</span></div>
                <div><span style={{ color: '#888' }}>ศาสนาที่นับถือ:</span> <span style={{ color: '#fff' }}>ฮินดู-พุทธ</span></div>
                <div><span style={{ color: '#888' }}>สถานภาพ:</span> <strong style={{ color: '#FFB6C1' }}>โสด (เสริมดวงความรัก)</strong></div>
                <div style={{ gridColumn: '1 / -1' }}><span style={{ color: '#888' }}>ที่อยู่:</span> <span style={{ color: '#fff' }}>123/45 หมู่บ้านมงคล ซอย 9, กรุงเทพมหานคร</span></div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.1), rgba(0,0,0,0))', padding: '15px', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--accent-gold)' }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>เทพประจำตัว (อุปถัมภ์ชะตา):</p>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>องค์ท้าวเวสสุวรรณ & พระพิฆเนศ</h4>
            </div>
          </div>

          {/* Right: Privileges & Daily Luck Colors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            
            <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-lg)', background: '#FAFAF8', border: '1px solid var(--accent-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>🎁 สิทธิประโยชน์ของคุณ</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)', margin: 0 }}>1,250 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>คะแนนบุญ</span></p>
                </div>
                <div style={{ textAlign: 'center', background: '#FFF0F5', padding: '10px 15px', borderRadius: 'var(--radius-md)', border: '1px dashed #FFB6C1' }}>
                  <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '5px' }}>🎂</span>
                  <span style={{ fontSize: '0.8rem', color: '#C8102E', fontWeight: 'bold' }}>ส่วนลดวันเกิด 20%</span>
                  <span style={{ fontSize: '0.7rem', color: '#666', display: 'block' }}>เริ่มใช้ 15 ส.ค.</span>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-primary)' }}>ตารางสีมงคลประจำวันของคุณ (ลัคนาสิงห์)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center' }}>
                {[
                  { day: 'จ', color: '#FFD700', active: false },
                  { day: 'อ', color: '#FF69B4', active: false },
                  { day: 'พ', color: '#32CD32', active: false },
                  { day: 'พฤ', color: '#FF8C00', active: true }, // Today
                  { day: 'ศ', color: '#87CEEB', active: false },
                  { day: 'ส', color: '#9370DB', active: false },
                  { day: 'อา', color: '#FF4500', active: false }
                ].map((d, i) => (
                  <div key={i} style={{ 
                    padding: '10px 0', 
                    background: d.active ? 'var(--bg-secondary)' : 'transparent', 
                    border: d.active ? '1px solid var(--accent-gold)' : '1px solid transparent',
                    borderRadius: '8px',
                    transform: d.active ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: d.active ? '0 4px 10px rgba(0,0,0,0.1)' : 'none'
                  }}>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: d.active ? 'var(--accent-gold-dark)' : 'var(--text-secondary)', fontWeight: d.active ? 'bold' : 'normal', marginBottom: '5px' }}>{d.day}</span>
                    <span style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: d.color, border: '2px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ROW 2: Hyper-Personalized Event Feed */}
        <div style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid #C8102E' }}>
           <h2 style={{ fontSize: '1.3rem', margin: '0 0 var(--spacing-lg) 0' }}>📢 แจ้งเตือนพิธีมงคลใกล้ตัว (เฉพาะคุณ)</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
              
              <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ background: '#FFE4E1', color: '#C8102E', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '12px', fontWeight: 'bold' }}>📍 พิธีประจำหมู่บ้าน (หมู่บ้านมงคล)</span>
                <p style={{ fontWeight: 'bold', margin: '10px 0 5px 0' }}>งานบุญประจำปีศาลตายาย หมู่บ้านมงคล ซอย 9</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>วันที่ 10 ของเดือนนี้ ทางประธานหมู่บ้านขอเชิญลูกบ้านร่วมพิธีไหว้ศาล พร้อมสั่งจองชุดไหว้ผลไม้พรีเมียมราคาพิเศษได้ที่นี่</p>
                <button style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-gold-dark)', background: 'transparent', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>สั่งจองชุดไหว้ส่งเข้าพิธี</button>
              </div>

              <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ background: '#E6E6FA', color: '#4B0082', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '12px', fontWeight: 'bold' }}>🙏 เทพประจำตัว (ฮินดู)</span>
                <p style={{ fontWeight: 'bold', margin: '10px 0 5px 0' }}>ใกล้ถึงเทสกาลนวราตรี (บูชาพระแม่อุมาเทวีผู้ยิ่งใหญ่)</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>ด้วยดวงชะตาที่เชื่อมโยงกับเทพฝ่ายฮินดู นวราตรีปีนี้ขอแนะนำให้เข้าร่วมพิธีรับพลัง หรือสั่งเครื่องบูชาอารตีไฟ เพื่อเสริมฐานะการเงิน</p>
                <Link href="/services" style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-gold-dark)', background: 'transparent', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', display: 'inline-block' }}>ดูแพ็คเกจเข้าร่วมพิธี</Link>
              </div>

           </div>
        </div>

        {/* ROW 2.5: Restored Patron Deity & Cross-Selling Section */}
        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(145deg, #1A1816, #2C2A26)', border: '1px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)' }}>
            
            {/* Left side: Deity Info */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ color: 'var(--accent-gold-dark)', fontSize: '0.9rem', marginBottom: '8px', letterSpacing: '2px' }}>แนะนำเจาะลึกเฉพาะดวงธาตุไฟ</div>
              <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)', color: '#fff' }}>บูชาองค์ท้าวเวสสุวรรณ</h2>
              <p style={{ color: '#DCDCDC', fontSize: '1rem', lineHeight: '1.6', marginBottom: 'var(--spacing-md)' }}>
                เทพผู้ประทานพรด้านความมั่งคั่ง อำนาจบารมี และปัดเป่าอุปสรรค เหมาะสำหรับสชาวราศีสิงห์ในช่วงนี้ ที่ต้องการเสริมความมั่นคงในหน้าที่การงานและธุรกิจ
              </p>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>🙏 วิธีการและสถานที่บูชาที่สมพงษ์</h4>
                <p style={{ color: '#A3A095', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  <strong>สถานที่:</strong> วัดจุฬามณี ຈังหวังสมุทรสงคราม<br/>
                  <strong>บทสวดบูชา:</strong> อิติปิโส ภะคะวา ยมมะราชาโน ท้าวเวสสุวัณโณ...<br/>
                  <strong>เวลาที่เหมาะสม:</strong> ทุกเช้าวันพฤหัสบดี
                </p>
              </div>
            </div>

            {/* Right side: Cross-selling Offering Set */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FAFAF8', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '180px', backgroundColor: '#EAE5D9', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)', fontSize: '3rem', position: 'relative' }}>
                🌹
                <span style={{ position: 'absolute', top: 10, right: 10, background: '#C8102E', color: 'white', fontSize: '0.7rem', padding: '3px 8px', borderRadius: 'var(--radius-full)' }}>สินค้าเสริมดวงตรงลัคนา</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#2C2A26' }}>ชุดบูชาเศรษฐีมหาลาภ (กุหลาบแดง)</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                จัดชุดดอกกุหลาบแดง 9 ดอก พร้อมธูปเทียนโทนสีแดง ถูกต้องตามหลักการบูชาท้าวเวสสุวรรณ
              </p>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿1,299</span>
                <Link href="/shop" style={{ padding: '8px 15px', backgroundColor: 'var(--accent-gold)', color: '#fff', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  สั่งซื้อชุดบูชานี้
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ROW 2.6: Relationship & Love Personalization (For Single Users) */}
        <div style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4E1)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid #FFB6C1', display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <span style={{ background: '#C8102E', color: '#fff', fontSize: '0.7rem', padding: '3px 10px', borderRadius: '12px', fontWeight: 'bold' }}>💖 ดวงความรักและการะกฤกษ์ (คนโสดลัคนาสิงห์)</span>
            <h2 style={{ fontSize: '1.8rem', color: '#C8102E', margin: '10px 0' }}>โอกาสพบคู่ในช่วงนี้เปิดกว้าง!</h2>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', marginBottom: '15px' }}>
              ดาวศุกร์กำลังเคลื่อนเข้าสู่เรือนปัตนิของคุณในช่วงครึ่งปีหลัง เป็นจังหวะดีที่จะได้พบคนถูกใจที่มีอายุมากกว่า หรือเป็นคนต่างชาติ 
              แนะนำให้พกเครื่องรางสายเสริมเสน่ห์เมตตามหานิยมประจำธาตุไฟ เพื่อดึงดูดพลังงานความรักที่บริสุทธิ์
            </p>
          </div>
          
          <div style={{ flex: '1 1 300px', background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(200, 16, 46, 0.1)', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid #eee' }}>
              <img src="/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/amulet_rosequartz_1776370259603.png" alt="Rose Quartz Bracelet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#333' }}>กำไลหินโรสควอตซ์ (หนุนดวงความรัก)</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', color: '#888' }}>ไอเทม Must-have สำหรับคนโสด</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: '#C8102E', fontSize: '1.1rem' }}>฿1,590</strong>
                <Link href="/shop" style={{ padding: '5px 12px', background: '#FFB6C1', color: '#C8102E', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>สั่งซื้อเลย</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: Trackings & Tools */}
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <TrackingWidget />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <HoroscopeCard />
          
          <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)' }}>📱 อัปเดตผ่าน LINE</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
              รับการแจ้งเตือนฤกษ์มงคลและคำทำนายประจำวันผ่าน LINE ของคุณอัตโนมัติ
            </p>
            <LineTestButton userId={session?.user?.name || 'mock-user'} />
          </div>
        </div>

      </div>

    </div>
  )
}
