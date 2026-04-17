'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

export default function SignInPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-lg)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
        
        <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>✨</div>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>
          เข้าสู่ระบบ <span className="text-gradient">JADHAI</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
          สะสมแต้มบุญ สั่งชุดบูชา จองพิธี และดูดวงได้อย่างง่ายดาย
        </p>

        <button 
          onClick={() => signIn('line', { callbackUrl: '/dashboard' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            padding: '1rem',
            backgroundColor: '#06C755', // LINE Official Green
            color: 'white',
            borderRadius: 'var(--radius-md)',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform var(--transition-fast)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.55 8.895 8.272 9.582.324.068.761.21.874.522.1.282.065.719.031.986l-.137.828c-.042.247-.202.993.87.545 1.073-.448 5.792-3.411 7.91-5.836C22.618 14.654 24 12.607 24 10.304Zm-14.73 1.95H6.551c-.347 0-.628-.282-.628-.628V7.202c0-.347.281-.628.628-.628s.628.281.628.628v3.795h2.09c.347 0 .628.281.628.628s-.281.628-.628.628Z"/>
          </svg>
          เข้าสู่ระบบด้วย LINE
        </button>

        <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
          <span>หรือ</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
        </div>

        <button 
          onClick={() => alert("ระบบล็อคอินด้วยอีเมลกำลังอยู่ในระหว่างการพัฒนา")}
          style={{
            marginTop: 'var(--spacing-lg)',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            borderRadius: 'var(--radius-md)',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background var(--transition-fast)'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          เข้าสู่ระบบด้วยอีเมล
        </button>

      </div>
    </div>
  );
}
