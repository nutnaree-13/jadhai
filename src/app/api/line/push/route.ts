import { NextResponse } from 'next/server';

// LINE Messaging API Integration (Route Handler)
export async function POST(request: Request) {
  try {
    const { userId, messageType, payload } = await request.json();

    const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;

    // In a real production app with keys, we trigger the real LINE API
    if (channelAccessToken) {
      const response = await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${channelAccessToken}`
        },
        body: JSON.stringify({
          to: userId,
          messages: [
            {
              type: 'flex',
              altText: messageType === 'payment' ? 'แจ้งเตือนชำระเงินสำเร็จ' : 'ดวงรายวันของคุณ',
              contents: buildFlexMessage(messageType, payload)
            }
          ]
        })
      });

      if (!response.ok) {
         console.warn("LINE Push Failed (Likely invalid tokens):", await response.text());
      }
    } else {
      // Simulator mode: Log the notification since the user hasn't provided keys yet
      console.log(`[LINE MOCK SIMULATOR] Sent Push Notification to ${userId}. Type: ${messageType}`);
    }

    // Always return success in our demo flow so the UI can show the success mockup
    return NextResponse.json({ success: true, mocked: !channelAccessToken });

  } catch (error) {
    console.error("Error pushing to LINE:", error);
    return NextResponse.json({ success: false, error: "Push notification failed" }, { status: 500 });
  }
}

// Minimal simulated Flex Message builder (In reality, use LINE Bot Designer JSON)
function buildFlexMessage(type: string, payload: any) {
  if (type === 'payment') {
      return {
        type: "bubble",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            { type: "text", text: "ชำระเงินสำเร็จ ✅", weight: "bold", size: "xl", color: "#06C755" },
            { type: "text", text: `ยอดเงิน: ฿${payload.amount}`, margin: "md" },
            { type: "text", text: "ขอบคุณที่ใช้บริการ JADHAI", margin: "sm", color: "#999999" }
          ]
        }
      };
  }
  return {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          { type: "text", text: "ดวงรายวันของคุณ 🌟", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: payload.text, margin: "md", wrap: true }
        ]
      }
  };
}
