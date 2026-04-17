"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartContext';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'บริการพิธีมงคล', path: '/services' },
    { name: 'สั่งซื้อเครื่องบูชา', path: '/shop' },
    { name: 'เปิดไพ่ทำนาย', path: '/tarot' },
    { name: 'เทรนด์สายมู', path: '/trends' },
    { name: 'จองพิธีกรณาจารย์', path: '/booking' },
    { name: 'ปฏิทินฤกษ์มงคล', path: '/calendar' },
  ];
  if (pathname?.startsWith('/admin')) {
    return null; // Hide navigation bar on backend admin pages
  }

  return (
    <>
      <nav className="glass-panel" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', zIndex: 1001 }}>
            <span className="text-gradient">จัดให้ JADHAI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '5px' }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="nav-link" style={pathname === item.path ? { background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold-dark)', fontWeight: 600 } : {}}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="desktop-menu" style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
            {/* Cart Icon */}
            <Link href="/cart" style={{ position: 'relative', padding: '0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              🛒
              {cartItemCount > 0 && (
                <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#C8102E', color: 'white', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link href="/dashboard" className="btn-primary" style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>👤</span> ข้อมูลสมาชิก
            </Link>

            {/* Secret Admin Demo Link */}
            <Link href="/admin" style={{ padding: '0.5rem', fontSize: '1.2rem', textDecoration: 'none', filter: 'grayscale(1)', opacity: 0.5, cursor: 'pointer' }} title="Admin Backoffice (For Demo)">
              ⚙️
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} style={{ zIndex: 1001 }}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#FAFAF8',
          zIndex: 999,
          paddingTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeIn var(--transition-fast) forwards'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '80%', textAlign: 'center' }}>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  fontSize: '1.5rem', 
                  padding: '15px', 
                  borderBottom: '1px solid #EAE5D9',
                  color: pathname === item.path ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                  fontWeight: pathname === item.path ? 700 : 500
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/dashboard" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary" 
              style={{ marginTop: '20px', fontSize: '1.2rem', padding: '15px' }}
            >
              ข้อมูลสมาชิก
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
