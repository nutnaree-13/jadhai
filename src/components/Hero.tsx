import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container animate-fade-in" style={{ 
        minHeight: "80vh", 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        padding: "var(--spacing-xxl) var(--spacing-lg) var(--spacing-lg)",
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("/images/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 'var(--radius-lg)',
        marginTop: 'var(--spacing-md)'
    }}>
      <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: 'var(--spacing-md)', color: '#FFF' }}>
        เริ่มต้นความเป็นมงคลกับ <br/><span className="text-gradient" style={{ background: 'linear-gradient(135deg, #F0E68C, #D4AF37, #B8860B)', WebkitBackgroundClip: 'text' }}>จัดให้ JADHAI</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#F2F0E9', maxWidth: '600px', marginBottom: 'var(--spacing-xl)' }}>
        แพลตฟอร์มพรีเมียมสำหรับการจัดงานพิธีมงคล สั่งซื้อชุดเครื่องบูชา จองพิธีกรณาจารย์ และดูดวงชะตาส่วนบุคคล
      </p>
      <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/services" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
          ดูแพ็คเกจบริการ
        </Link>
        <Link href="/booking" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#8B0000' }}>
          จองศาสนพิธีกร
        </Link>
        <Link href="/shop" className="btn-primary" style={{ 
            background: 'rgba(0,0,0,0.4)', 
            border: '2px solid var(--accent-gold)', 
            color: 'var(--accent-gold)', 
            boxShadow: 'none',
            padding: '1rem 2rem', 
            fontSize: '1rem' 
        }}>
          เลือกซื้อเครื่องบูชา
        </Link>
      </div>
    </section>
  );
}
