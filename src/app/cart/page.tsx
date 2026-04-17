'use client';

import React from 'react';
import { useCart } from '@/components/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeItem, addItem, total } = useCart();
  const router = useRouter();

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>
        ตะกร้า<span className="text-gradient">สินค้า</span>
      </h1>

      {items.length === 0 ? (
        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>🛍️</div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: 'var(--spacing-md)' }}>ตะกร้าของคุณยังว่างเปล่า</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
            ลองดูชุดเครื่องบูชามหามงคลของเรา เพื่อเพิ่มความเป็นสิริมงคลให้งานพิธีของคุณสิครับ
          </p>
          <Link href="/shop" className="btn-primary">
            เลือกซื้อสินค้า
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
          
          {/* Cart Items List */}
          <div style={{ flex: '1 1 600px' }}>
            {items.map((item) => (
              <div key={item.id} className="glass-panel" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: 'var(--spacing-md)', 
                marginBottom: 'var(--spacing-md)', 
                borderRadius: 'var(--radius-md)' 
              }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#EAE5D9', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                  📦
                </div>
                <div style={{ flex: 1, padding: '0 var(--spacing-md)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>{item.name}</h3>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿{item.price.toLocaleString()}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <button 
                      onClick={() => item.quantity > 1 ? addItem(item, -1) : removeItem(item.id)}
                      style={{ padding: '5px 10px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >-</button>
                    <span style={{ padding: '0 15px', fontWeight: '500' }}>{item.quantity}</span>
                    <button 
                      onClick={() => addItem(item, 1)}
                      style={{ padding: '5px 10px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ color: '#C8102E', padding: '5px', fontSize: '1.2rem' }} title="ลบออก">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div style={{ flex: '1 1 300px' }}>
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--spacing-sm)' }}>สรุปคำสั่งซื้อ</h2>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>มูลค่าสินค้า</span>
                <span>฿{total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>ค่าจัดส่ง</span>
                <span style={{ color: '#06C755' }}>ฟรี (โดยผู้เชี่ยวชาญ)</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'var(--spacing-md) 0', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--border-color)', fontSize: '1.3rem', fontWeight: 'bold' }}>
                <span>ยอดรวมสุทธิ</span>
                <span className="text-gradient">฿{total.toLocaleString()}</span>
              </div>

              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '1rem', marginTop: 'var(--spacing-md)', display: 'flex', justifyContent: 'center', gap: '10px' }}
                onClick={() => router.push('/checkout')}
              >
                <span>💳</span> ดำเนินการชำระเงิน
              </button>
              
              <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                บริการจัดส่งและจัดวางเครื่องบูชาถึงหน้างานพิธีครอบคลุมทั่วประเทศ
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
