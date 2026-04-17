'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'promptpay' | 'creditcard' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [amount, setAmount] = useState(0);

  // Mock checking local storage or context for the amount to pay
  useEffect(() => {
    // In a real app we'd fetch the total from an API, CartContext, or Booking state
    setAmount(4500); 
  }, []);

  const handleSimulatePayment = () => {
    if (!paymentMethod) return alert('กรุณาเลือกวิธีการชำระเงิน');
    
    setIsProcessing(true);
    setTimeout(async () => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Trigger LINE Notification Background (Mock)
      console.log(`[MOCK] Sent LINE Push Notice to user for payment amount ฿${amount}`);

      // Simulate redirection to success logic or dashboard
      setTimeout(() => {

         router.push('/dashboard');
      }, 3000);

    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="container animate-fade-in" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '5rem', marginBottom: 'var(--spacing-md)', color: '#06C755' }}>✅</div>
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>ชำระเงินสำเร็จแล้ว</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
            ขอบคุณที่ใช้บริการ JADHAI เราได้ส่งข้อความยืนยันการทำรายการไปยัง LINE ของคุณแล้ว
          </p>
          <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold-dark)' }}>กำลังพากลับไปยังหน้าแดชบอร์ด...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
        ระบบรับ<span className="text-gradient">ชำระเงิน</span>
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
        (Demo จำลองการทำงานของระบบ Omise Payment Gateway)
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }} className="glass-panel">
        <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>ยอดที่ต้องชำระทันที</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-gold-dark)' }}>฿{amount.toLocaleString()}</span>
          </div>
        </div>

        <div style={{ padding: 'var(--spacing-lg)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>เลือกวิธีการชำระเงิน</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
            
            {/* PromptPay Option */}
            <label style={{ 
              display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', 
              border: paymentMethod === 'promptpay' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              backgroundColor: paymentMethod === 'promptpay' ? 'var(--bg-secondary)' : 'transparent'
            }}>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === 'promptpay'} 
                onChange={() => setPaymentMethod('promptpay')} 
                style={{ width: '20px', height: '20px' }}
              />
              <div style={{ fontSize: '2rem' }}>📱</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Thai QR PromptPay</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>สแกนจ่ายผ่านแอปพลิเคชันธนาคาร (จำลอง)</div>
              </div>
            </label>

            {/* Credit Card Option */}
            <label style={{ 
              display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', 
              border: paymentMethod === 'creditcard' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              backgroundColor: paymentMethod === 'creditcard' ? 'var(--bg-secondary)' : 'transparent'
            }}>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === 'creditcard'} 
                onChange={() => setPaymentMethod('creditcard')} 
                style={{ width: '20px', height: '20px' }}
              />
              <div style={{ fontSize: '2rem' }}>💳</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Credit / Debit Card</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Visa, Mastercard, JCB สมาร์ทเพย์ (จำลอง)</div>
              </div>
            </label>

          </div>

          {/* Conditional UI PromptPay */}
          {paymentMethod === 'promptpay' && (
            <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-md)' }}>สแกนเพื่อชำระเงิน</p>
              <div style={{ width: '200px', height: '200px', margin: '0 auto', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '10px solid #1E3A8A' }}>
                {/* Mock QR Code Pattern */}
                <div style={{ width: '150px', height: '150px', backgroundImage: 'radial-gradient(#000 20%, transparent 20%), radial-gradient(#000 20%, transparent 20%)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
              </div>
              <p style={{ marginTop: 'var(--spacing-sm)', color: '#1E3A8A', fontWeight: 'bold' }}>PROMPTPAY</p>
            </div>
          )}

          {/* Conditional UI Credit Card */}
          {paymentMethod === 'creditcard' && (
            <div className="animate-fade-in" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'grid', gap: '15px' }}>
                <input type="text" placeholder="หมายเลขบัตร 16 หลัก" style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }} />
                <div style={{ display: 'flex', gap: '15px' }}>
                  <input type="text" placeholder="MM/YY" style={{ flex: 1, padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }} />
                  <input type="text" placeholder="CVC" style={{ flex: 1, padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }} />
                </div>
                <input type="text" placeholder="ชื่อที่ปรากฏบนบัตร" style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }} />
              </div>
            </div>
          )}

          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '1rem 0', fontSize: '1.2rem', gap: '10px', opacity: paymentMethod ? 1 : 0.5 }}
            onClick={handleSimulatePayment}
            disabled={isProcessing || !paymentMethod}
          >
            {isProcessing ? 'กำลังประมวลผลการชำระเงิน...' : 'ยืนยันการชำระเงิน'}
          </button>
          
        </div>
      </div>
    </div>
  );
}
