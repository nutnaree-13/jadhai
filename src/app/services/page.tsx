'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/CartContext';

const CEREMONY_PACKAGES = [
  { id: '9', name: 'แพ็คเกจจัดงานทำบุญบ้าน/แต่งงาน (พิธีไทย)', price: 35000, category: 'พิธีไทย', imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/pkg_thai_ceremony_1776367980521.png', description: 'บริการรับจัดพิธีสงฆ์ครบวงจร พร้อมอาสนะ โต๊ะหมู่บูชา ชุดพานพุ่ม นิมนต์พระสงฆ์ และจัดเตรียมภัตตาหารถวายพระ ดำเนินการโดยศาสนพิธีกรมืออาชีพ' },
  { id: '10', name: 'แพ็คเกจไหว้บรรพบุรุษ/ตั้งศาลตี่จู้เอี๊ยะ (พิธีจีน)', price: 28000, category: 'พิธีจีน', imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/pkg_chinese_ceremony_1776367995197.png', description: 'บริการรับจัดพิธีตั้งศาลตี่จู้เอี๊ยะ หรือไหว้บรรพบุรุษชุดใหญ่ พร้อมหมูหัน เป็ดย่าง ผลไม้มงคลพรีเมียม ขนมมงคล และกระดาษเงินกระดาษทองแบบจัดเต็มเพื่อความเป็นสิริมงคลสูงสุด' },
  { id: '11', name: 'แพ็คเกจบวงสรวงตั้งศาลพระภูมิ (พิธีพราหมณ์)', price: 55000, category: 'พิธีพราหมณ์', imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/pkg_brahmin_ceremony_1776368009598.png', description: 'พราหมณ์หลวงพร้อมทีมงานจัดทำพิธีบวงสรวงตั้งศาลพระพรหม ศาลพระภูมิ ศาลตายาย จัดเตรียมบายศรีวิจิตรแท้ขนาดใหญ่ และเครื่องขมาบูชาอย่างถูกต้องครบถ้วนตามขนบธรรมเนียม' },
  { id: '12', name: 'แพ็คเกจบูชาองค์เทพ/พิธีนวราตรี (พิธีฮินดู)', price: 42000, category: 'พิธีฮินดู', imageUrl: '/api/image?path=/Users/nutnaree/.gemini/antigravity/brain/90045654-709d-4ab6-b489-0ce6c60bc3fb/pkg_hindu_ceremony_1776368024355.png', description: 'บริการตกแต่งเทวาลัย อารตีไฟ พร้อมประดับตกแต่งด้วยพวงมาลัยดอกดาวเรืองสด ถวายขนมลาดู โมทกะ และเครื่องบูชาองค์เทพ บริการนำสวดโดยพราหมณ์สายอินเดียแท้' }
];

export default function ServicesPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const filteredPackages = selectedCategory === 'ทั้งหมด' 
    ? CEREMONY_PACKAGES 
    : CEREMONY_PACKAGES.filter(p => p.category === selectedCategory);

  const handleBookPackage = (pkg: any) => {
    // Add the package to cart and force routing to checkout seamlessly 
    addItem({ id: pkg.id, name: pkg.name, price: pkg.price, quantity: 1, image: pkg.imageUrl });
    router.push('/checkout');
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '80vh' }}>
      
      <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
          บริการจัด <span className="text-gradient">พิธีมงคลแบบครบวงจร</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          มอบความไว้วางใจให้ทีมงานผู้เชี่ยวชาญของ JADHAI จัดเตรียมพิธีการอันศักดิ์สิทธิ์ให้คุณ 
          ถูกต้องตามจารีตประเพณี พร้อมอุปกรณ์และเครื่องบูชาระดับพรีเมียม
        </p>
      </header>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
        {['ทั้งหมด', 'พิธีไทย', 'พิธีจีน', 'พิธีพราหมณ์', 'พิธีฮินดู'].map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 25px',
              borderRadius: 'var(--radius-full)',
              border: selectedCategory === cat ? 'none' : '1px solid var(--border-color)',
              background: selectedCategory === cat ? 'linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))' : 'transparent',
              color: selectedCategory === cat ? '#fff' : 'var(--text-primary)',
              fontWeight: selectedCategory === cat ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="glass-panel" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Image Section */}
            <div style={{ flex: '1 1 400px', minHeight: '300px', position: 'relative' }}>
              <img src={pkg.imageUrl} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              <div style={{ position: 'absolute', top: 15, left: 15, background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '5px 15px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', border: '1px solid var(--accent-gold)' }}>
                {pkg.category}
              </div>
            </div>

            {/* Content Section */}
            <div style={{ flex: '1 1 400px', padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>{pkg.name}</h2>
              <div style={{ width: '50px', height: '3px', background: 'var(--accent-gold)', marginBottom: 'var(--spacing-md)' }}></div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                {pkg.description}
              </p>
              
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>ราคาจัดงานเริ่มต้น</span><br/>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿{pkg.price.toLocaleString()}</span>
                </div>
                <button 
                  className="btn-primary" 
                  onClick={() => handleBookPackage(pkg)}
                  style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: 'var(--radius-md)' }}
                >
                  ชำระมัดจำการจอง
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
