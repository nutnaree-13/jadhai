import Image from 'next/image';
import Link from 'next/link';

export default function CeremonyOptions() {
  const ceremonies = [
    { title: 'พิธีไทย', icon: '/images/icon_thai.png', desc: 'พิธีสงฆ์ งานแต่งงาน ทำบุญขึ้นบ้านใหม่' },
    { title: 'พิธีจีน', icon: '/images/icon_chinese.png', desc: 'ยกน้ำชา ไหว้เจ้า ไหว้บรรพบุรุษ' },
    { title: 'พิธีพราหมณ์', icon: '/images/icon_brahmin.png', desc: 'พิธีบวงสรวง ตั้งศาลพระภูมิ' },
    { title: 'พิธีกรรมฮินดู', icon: '/images/icon_hindu.png', desc: 'พิธีบูชาเทพเจ้า งานนวราตรี' },
  ];

  return (
    <section className="container" style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        backgroundColor: '#FAFAF8',
        border: '1px solid #EAE5D9'
      }}>
        <div style={{ flex: '1 1 400px', padding: 'var(--spacing-lg)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
            ครอบคลุมทุก <span className="text-gradient">ความเชื่อและศรัทธา</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: '1.1rem' }}>
            ไม่ว่าคุณจะยึดถือประเพณีใด ทีมงานผู้เชี่ยวชาญร่วมกับศาสนพิธีกรของเรา พร้อมให้คำปรึกษาและจัดเตรียมพิธีการให้ถูกต้องตามหลักจารีตประเพณีของแต่ละความเชื่อ
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
            {ceremonies.map((c, i) => (
              <div key={i} style={{ 
                padding: 'var(--spacing-md)', 
                backgroundColor: '#fff', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid #F2F0E9',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ position: 'relative', width: '60px', height: '60px', marginBottom: 'var(--spacing-md)' }}>
                  <Image src={c.icon} alt={c.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px', color: '#2C2A26' }}>{c.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#6B685C' }}>{c.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              ปรึกษาผู้เชี่ยวชาญ
            </button>
            <Link href="/shop" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: 'var(--spacing-sm) var(--spacing-lg)', 
                backgroundColor: 'transparent',
                color: 'var(--accent-gold-dark)',
                border: '1px solid var(--accent-gold)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                🛍️ เลือกซื้อของไหว้แต่ละพิธี →
              </button>
            </Link>
          </div>
        </div>
        
        <div style={{ flex: '1 1 300px', position: 'relative', minHeight: '400px' }}>
          <Image 
            src="/images/ceremony_collage.png" 
            alt="พิธีไทย จีน พราหมณ์ ฮินดู"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
