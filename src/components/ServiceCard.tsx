"use client";

import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href }: { title: string, description: string, icon: string, href?: string }) {
  const cardContent = (
    <div className="glass-panel" style={{ 
      padding: 'var(--spacing-xl) var(--spacing-lg)', 
      borderRadius: 'var(--radius-lg)', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'flex-start',
      transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
      cursor: 'pointer',
      flex: '1 1 300px',
      minWidth: '250px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg), 0 10px 30px rgba(212, 175, 55, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    }}>
      <div style={{ 
        background: 'linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))',
        width: '60px',
        height: '60px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: 'var(--spacing-md)',
        color: 'var(--text-primary)'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
      {href && (
        <span style={{ marginTop: 'auto', paddingTop: 'var(--spacing-md)', color: 'var(--accent-gold-dark)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
          ดูรายละเอียด <span>→</span>
        </span>
      )}
    </div>
  );

  return href ? (
    <Link href={href} style={{ flex: '1 1 300px', textDecoration: 'none', color: 'inherit', display: 'flex' }}>
      {cardContent}
    </Link>
  ) : cardContent;
}
