"use client";
import React, { useState } from 'react';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const days = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];

  // Mock auspicious dates for the current month
  // 1 = Thai (Red), 2 = Chinese (Gold), 3 = Brahmin/Hindu (Orange)
  const auspiciousDates: Record<number, { type: number, label: string }> = {
    5: { type: 1, label: 'ฤกษ์มงคลสมรส (ไทย)' },
    9: { type: 2, label: 'วันเปิดกิจการ (จีน)' },
    14: { type: 3, label: 'วันบวงสรวง (พราหมณ์)' },
    15: { type: 1, label: 'ฤกษ์ขึ้นบ้านใหม่' },
    22: { type: 2, label: 'วันขอพรไฉ่ซิงเอี้ย' },
    28: { type: 1, label: 'ฤกษ์เจรจาค้าขาย' }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const blanks = Array(firstDay).fill(null);
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const allCells = [...blanks, ...dates];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {days.map(day => (
          <div key={day} style={{ textAlign: 'center', fontWeight: 'bold', color: '#6B685C', padding: '10px 0' }}>
            {day}
          </div>
        ))}
        {allCells.map((date, index) => {
          if (!date) return <div key={`blank-${index}`} style={{ padding: '20px' }}></div>;
          
          const isAuspicious = auspiciousDates[date];
          let bgColor = '#FFF';
          let borderColor = '#EAE5D9';
          let textColor = '#2C2A26';

          if (isAuspicious) {
            if (isAuspicious.type === 1) { bgColor = '#FFF5F5'; borderColor = '#C8102E'; textColor = '#C8102E'; } // Thai - Red
            if (isAuspicious.type === 2) { bgColor = '#FFFBF0'; borderColor = '#D4AF37'; textColor = '#B8860B'; } // Chinese - Gold
            if (isAuspicious.type === 3) { bgColor = '#FFF4E6'; borderColor = '#FF8C00'; textColor = '#D2691E'; } // Brahmin/Hindu - Orange
          }

          return (
            <div key={index} style={{ 
              border: `1px solid ${borderColor}`,
              borderRadius: '8px',
              padding: '10px',
              minHeight: '100px',
              backgroundColor: bgColor,
              position: 'relative',
              transition: 'transform 0.2s',
              cursor: isAuspicious ? 'pointer' : 'default',
            }}
            onMouseEnter={(e) => { if(isAuspicious) e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { if(isAuspicious) e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <span style={{ 
                fontWeight: isAuspicious ? 'bold' : 'normal', 
                fontSize: '1.2rem',
                color: textColor
              }}>
                {date}
              </span>
              {isAuspicious && (
                <div style={{ 
                  marginTop: '8px', 
                  fontSize: '0.75rem', 
                  color: textColor,
                  lineHeight: 1.2,
                  fontWeight: 500
                }}>
                  ★ {isAuspicious.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xxl)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>
          ปฏิทิน<span style={{ color: '#D4AF37' }}>ฤกษ์มงคล</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6B685C' }}>
          ตรวจสอบวันดี วันธงชัย และฤกษ์มงคลสำหรับการจัดงานพิธีต่างๆ ประจำเดือน
        </p>
      </div>

      <section className="container" style={{ maxWidth: '1000px' }}>
        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
          
          {/* Calendar Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <button onClick={handlePrevMonth} style={{ padding: '8px 16px', fontSize: '1.2rem', cursor: 'pointer', border: '1px solid #EAE5D9', borderRadius: '4px' }}>
              &larr; เดือนก่อนหน้า
            </button>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>
              {months[currentMonth]} {currentYear + 543} {/* Thai Year */}
            </h2>
            <button onClick={handleNextMonth} style={{ padding: '8px 16px', fontSize: '1.2rem', cursor: 'pointer', border: '1px solid #EAE5D9', borderRadius: '4px' }}>
              เดือนถัดไป &rarr;
            </button>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#C8102E', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.9rem', color: '#4A4840' }}>ฤกษ์ไทย (สีแดง)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#D4AF37', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.9rem', color: '#4A4840' }}>ฤกษ์จีน (สีทอง)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#FF8C00', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.9rem', color: '#4A4840' }}>ฤกษ์พราหมณ์/ฮินดู (สีส้ม)</span>
            </div>
          </div>

          {/* Calendar Grid */}
          {renderCalendar()}

          <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
            <p style={{ color: '#6B685C', marginBottom: 'var(--spacing-md)' }}>
              ต้องการหาฤกษ์มงคลส่วนตัวที่ตรงกับวันเดือนปีเกิดของคุณ?
            </p>
            <button className="btn-primary" onClick={() => window.location.href='/horoscope'}>
              เช็คดวงชะตาและฤกษ์แบบส่วนตัว
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
