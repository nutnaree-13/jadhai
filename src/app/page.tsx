import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import FeaturedProducts from '@/components/FeaturedProducts';
import CeremonyOptions from '@/components/CeremonyOptions';

export default function Home() {
  return (
    <div style={{ paddingBottom: 'var(--spacing-xxl)' }}>
      <Hero />
      
      <FeaturedProducts />

      <section className="container" style={{ marginTop: 'var(--spacing-xl)' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          บริการของ <span className="text-gradient">เรา</span>
        </h2>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <ServiceCard 
            title="บริการจัดพิธีมงคล" 
            description="รับจัดงานพิธีมงคลครบวงจร ทั้งประเพณีไทย จีน พราหมณ์ และฮินดู ถูกต้องตามฤกษ์ยามและตรงตามความต้องการของคุณ"
            icon="✨"
            href="/services"
          />
          <ServiceCard 
            title="ชุดเครื่องบูชาพรีเมียม" 
            description="ชุดเครื่องตั้งและเครื่องบูชาที่คัดสรรมาอย่างประณีต สำหรับพิธีกรรมต่างๆ เพื่อความเป็นสิริมงคลสูงสุด"
            icon="🪔"
            href="/shop"
          />
          <ServiceCard 
            title="จองศาสนพิธีกร" 
            description="บริการจัดหาและจองคิวพระสงฆ์ นิมนต์พระ หรือพราหมณ์ผู้เชี่ยวชาญสำหรับงานพิธีของคุณ"
            icon="🙏"
            href="/booking"
          />

        </div>
      </section>

      <div id="ceremony-options">
        <CeremonyOptions />
      </div>
    </div>
  );
}
