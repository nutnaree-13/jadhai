'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';

const MOCK_PRODUCTS = [
  // ---------------- สังฆทาน / พิธีพุทธ ----------------
  { id: '1', name: 'ชุดสังฆทาน (Starter Set)', price: 590, category: 'พิธีพุทธ/ทั่วไป', imageUrl: '/jadhai/assets/starter_sangkhatan_1776369005715.png', description: 'ชุดสังฆทานเริ่มต้น จัดแพ็คเกจเรียบง่ายแต่ครบถ้วนด้วยยารักษาโรคและของใช้จำเป็นประจำวัน' },
  { id: '2', name: 'ชุดสังฆทานพรีเมียม (มหามงคล)', price: 2590, category: 'พิธีพุทธ/ทั่วไป', imageUrl: '/jadhai/assets/premium_sangkhatan_1776365538843.png', description: 'เครื่องใช้อุปโภคบริโภคคุณภาพสูง จัดในกล่องบุผ้าไหมพรีเมียม ถักทอด้วยริบบิ้นสีทอง สำหรับถวายพระสงฆ์ระดับสูง' },
  
  // ---------------- ผลไม้ / ทั่วไป ----------------
  { id: '3', name: 'ชุดของไหว้ผลไม้มงคล 5 ชนิด (Starter Set)', price: 790, category: 'ทั่วไป', imageUrl: '/jadhai/assets/starter_fruits_1776369020717.png', description: 'ผลไม้มงคล 5 ชนิด จัดใส่ถาดหวายสานอย่างดี เหมาะสำหรับการไหว้พระ ไหว้เจ้าที่ประจำบ้าน ในราคาย่อมเยา' },
  { id: '4', name: 'ชุดของไหว้ผลไม้มงคล 9 ชนิด (Premium)', price: 4500, category: 'ทั่วไป', imageUrl: '/jadhai/assets/auspicious_fruits_1776365570407.png', description: 'พานผลไม้พรีเมียมนำเข้าเกรด A จำนวน 9 ชนิด จัดอย่างวิจิตรบรรจงในพานทอง เพื่อใช้ประกอบพิธีบวงสรวงใหญ่' },

  // ---------------- พิธีจีน ----------------
  { id: '5', name: 'ชุดกระดาษเงินกระดาษทอง (Starter Set)', price: 490, category: 'พิธีจีน', imageUrl: '/jadhai/assets/starter_chinese_paper_1776369035115.png', description: 'ชุดไหว้เจ้าเริ่มต้น ประกอบด้วยกิมเต้า หงิ่งเต้า และกระดาษเงินกระดาษทองพื้นฐาน สำหรับไหว้ขอพรปกติ' },
  { id: '6', name: 'ชุดไหว้เจ้าครบเซ็ต (Premium)', price: 1990, category: 'พิธีจีน', imageUrl: '/jadhai/assets/chinese_offering_1776365584069.png', description: 'ชุดไหว้เจ้าครบเซ็ต พับอย่างวิจิตร พร้อมเทียนแดงมงคลเล่มใหญ่ และถ้วยชาเซรามิก สำหรับเทศกาลมงคลไหว้เทพยดาชั้นสูง' },

  // ---------------- พิธีพราหมณ์ / ฮินดู / ไทย ----------------
  { id: '7', name: 'พวงมาลัยดอกไม้สดขมา (Starter Set)', price: 690, category: 'พิธีพราหมณ์', imageUrl: '/jadhai/assets/starter_garland_1776369052372.png', description: 'พวงมาลัยมะลิสด หอมกรุ่น ร้อยด้วยความประณีต สำหรับกราบไหว้พระ ไหว้ครู หรือไหว้ขอขมาผู้ใหญ่' },
  { id: '8', name: 'พานพุ่มดอกไม้สด บายศรี (Premium)', price: 3990, category: 'พิธีพราหมณ์', imageUrl: '/jadhai/assets/thai_baisri_1776365555019.png', description: 'พานพุ่มบายศรีดอกไม้สดประดิษฐ์ขึ้นอย่างวิจิตรบรรจง สำหรับงานบวงสรวงพระภูมิเจ้าที่ หรือพิธีตั้งศาลเพื่อเชิญเทพเทวา' },

  // ---------------- เครื่องรางสายมู ----------------
  { id: '101', name: 'กำไลหินโรสควอตซ์ (หนุนดวงความรัก)', price: 1590, category: 'เครื่องรางสายมู', imageUrl: '/jadhai/assets/amulet_rosequartz_1776370259603.png', description: 'กำไลหินมงคลโรสควอตซ์เกรดท็อป ประดับชาร์มรูปหัวใจทองคำแท้ ผ่านพิธีเบิกเนตรเสริม เสน่ห์เมตตามหานิยม เหมาะสำหรับผู้ที่ต้องการพบคู่' },
  { id: '102', name: 'สร้อยด้ายแดงนำโชค (ด้ายแดงแห่งชะตา)', price: 890, category: 'เครื่องรางสายมู', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80', description: 'ด้ายแดงนำโชคสไตล์มินิมอล ถักทออย่างประณีตพร้อมจี้ทองคำ เสริมดวงความรักและการอุปถัมภ์ค้ำชูจากผู้ใหญ่' },
  { id: '103', name: 'จี้กังหันแชกงหมิว (รุ่นเศรษฐีพรีเมียม)', price: 4990, category: 'เครื่องรางสายมู', imageUrl: 'https://images.unsplash.com/photo-1599643478524-fb524fa0a897?auto=format&fit=crop&w=600&q=80', description: 'จี้กังหันทองคำแท้ล้อมเพชรสวิส นำเข้าจากวัดแชกงหมิวโดยตรง ปัดเป่าสิ่งชั่วร้ายและพัดพาสิริมงคล โชคลาภ เงินทองเข้าหาตัว' },
];

export default function ShopPage() {
  const [filter, setFilter] = useState('ทั้งหมด');
  
  const filteredProducts = filter === 'ทั้งหมด' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category.includes(filter));

  const categories = ['ทั้งหมด', 'พิธีพุทธ/ทั่วไป', 'พิธีจีน', 'พิธีพราหมณ์', 'เครื่องรางสายมู'];

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', minHeight: '80vh' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', marginBottom: 'var(--spacing-sm)' }}>
            สั่งซื้อ<span className="text-gradient">ชุดเครื่องบูชา</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            คัดสรรเครื่องสักการะพรีเมียมเพื่อความเป็นสิริมงคลสูงสุดในทุกพิธีของคุณ
          </p>
        </div>
      </div>

      {/* Filter Options */}
      <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)', overflowX: 'auto', paddingBottom: '10px' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              border: filter === cat ? 'none' : '1px solid var(--border-color)',
              background: filter === cat ? 'linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))' : 'transparent',
              color: filter === cat ? '#fff' : 'var(--text-primary)',
              fontWeight: filter === cat ? 600 : 400,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: 'var(--spacing-lg)' 
      }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0', color: 'var(--text-secondary)' }}>
          ไม่พบสินค้าในหมวดหมู่นี้
        </div>
      )}

    </div>
  );
}
