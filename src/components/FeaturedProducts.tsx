import Image from 'next/image';

export default function FeaturedProducts() {
  return (
    <section className="container" style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
      <div 
        style={{
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        gap: 'var(--spacing-xl)',
        backgroundColor: '#FDFBF7',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid #EAE5D9',
        borderTop: '4px solid #C8102E' 
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ color: '#C8102E', fontWeight: 'bold', marginBottom: 'var(--spacing-xs)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            สินค้าจัดชุดพิเศษ
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', color: '#2C2A26' }}>
            ชุดเครื่องบูชา <span style={{ color: '#D4AF37' }}>มหามงคล</span>
          </h2>
          <p style={{ color: '#5C5950', marginBottom: 'var(--spacing-lg)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            ยกระดับความศักดิ์สิทธิ์ให้พิธีการของคุณ ด้วยชุดเครื่องบูชาที่คัดสรรมาอย่างประณีต 
            ออกแบบด้วยโทนสีมงคล <strong>แดง ทอง และครีม</strong> เพื่อเสริมสิริมงคล โชคลาภ และความเจริญรุ่งเรืองให้กับบ้านและพิธีของคุณ
          </p>
          <ul style={{ listStyle: 'none', marginBottom: 'var(--spacing-lg)', color: '#4A4840' }}>
            <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span> คัดสรรวัสดุพรีเมียม ประณีตทุกรายละเอียด
            </li>
            <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span> จัดชุดตามสีมงคลถูกต้องตามหลักความเชื่อ
            </li>
            <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span> บริการจัดส่งและจัดวางถึงสถานที่ประกอบพิธี
            </li>
          </ul>
          <button className="btn-primary">
            สั่งซื้อชุดเครื่องบูชา
          </button>
        </div>
        
        <div style={{ flex: '1 1 400px', position: 'relative', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1), 0 0 0 1px rgba(212, 175, 55, 0.2)' }}>
          <Image 
            src="/jadhai/images/featured_premium.png" 
            alt="ชุดเครื่องบูชามหามงคล (แดง ทอง ครีม)"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
