'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartItem, useCart } from './CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export default function ProductCard({ id, name, price, description, imageUrl, category }: ProductCardProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1, image: imageUrl });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({ id, name, price, quantity: 1, image: imageUrl });
    router.push('/cart');
  };

  return (
    <div className="glass-panel" style={{ 
      borderRadius: 'var(--radius-lg)', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg), 0 10px 30px rgba(212, 175, 55, 0.2)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    }}
    >
      <div style={{ height: '250px', backgroundColor: '#EAE5D9', position: 'relative', overflow: 'hidden' }}>
        <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(255,255,255,0.95)', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: '#C8102E', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          {category}
        </div>
      </div>
      <div style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{name}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', flex: 1 }}>
          {description}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿{price.toLocaleString()}</span>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn-primary" 
              onClick={handleAddToCart}
              style={{ 
                flex: 1,
                padding: '0.6rem 0.5rem', 
                fontSize: '0.9rem',
                backgroundColor: isAdded ? '#06C755' : 'transparent',
                color: isAdded ? '#fff' : 'var(--accent-gold-dark)',
                border: isAdded ? 'none' : '1px solid var(--accent-gold)',
                transition: 'all 0.3s ease'
              }}
            >
              {isAdded ? '✓ ใส่ตะกร้าแล้ว' : '🛒 เพิ่มลงตะกร้า'}
            </button>
            <button 
              className="btn-primary" 
              onClick={handleBuyNow}
              style={{ 
                flex: 1,
                padding: '0.6rem 0.5rem', 
                fontSize: '0.9rem',
                backgroundColor: 'var(--accent-gold)',
                transition: 'all 0.3s ease'
              }}
            >
              ซื้อทันที
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
