"use client";

import { useState } from "react";
import { MicrosoftSalesChatData } from "../../data/mockData";

const YOU = "you";
const MS = "ms";
const INFO = "info";

type Sender = typeof YOU | typeof MS | typeof INFO;

const HL = {
  yellow: { bg: "#fff9c4", border: "#f9c400", label: "Annual Pricing" },
  green: { bg: "#c8f7c5", border: "#4caf50", label: "Monthly Pricing" },
  blue: { bg: "#c9e7ff", border: "#0078d4", label: "Add Users / Admin Panel" },
  orange: { bg: "#ffe0b2", border: "#fb8c00", label: "Business Email Setup" },
  pink: { bg: "#ffd6e0", border: "#e91e63", label: "Technical Support" }
};

type HighlightKey = keyof typeof HL;

interface ChatMessage {
  time: string;
  from: Sender;
  text: string;
  hl?: HighlightKey;
}

const messages: ChatMessage[] = [
  {
    time: "9:01",
    from: INFO,
    text: "Hi there! I'm the Microsoft Sales bot. Let me get some information from you so I can get you the right kind of assistance. Select 'Start' to begin."
  },
  { time: "9:01", from: YOU, text: "Start" },
  { time: "9:01", from: MS, text: "http://go.microsoft.com/fwlink/?LinkID=267510&clcid=0x409" },
  { time: "9:01", from: MS, text: "<< Sent Rich Content >>" },
  { time: "9:01", from: YOU, text: "Business" },
  { time: "9:01", from: MS, text: "<< Sent Rich Content >>" },
  { time: "9:01", from: YOU, text: "Business Sales" },
  { time: "9:01", from: MS, text: "Great! I'll connect you with a Microsoft Sales associate." },
  {
    time: "9:01",
    from: INFO,
    text: "Please hold while I transfer you. To remain connected, please do not close this chat window."
  },
  { time: "9:01", from: INFO, text: "Thank you for your patience, Yousr Akram will be with you shortly." },
  {
    time: "9:02",
    from: MS,
    text: "Hello, welcome to Microsoft Sales Team, my name is Yousr, may I start by taking your full name please?"
  },
  { time: "9:02", from: YOU, text: "Good Morning Akram" },
  { time: "9:03", from: YOU, text: "Hello Yousr" },
  {
    time: "9:03",
    from: YOU,
    text: "My name is Mohammad Arsh. I wanted to inquire about the Microsoft 365 Business Standard or other plan regarding the business."
  },
  { time: "9:04", from: MS, text: "Pleasure to contact you, Mohammad." },
  {
    time: "9:04",
    from: MS,
    text: "Thank you for sharing your query with me and it's great to see that you're interested in Microsoft 365. I'll gladly do my best to assist you with this."
  },
  { time: "9:04", from: YOU, text: "Can you help me in suggesting a right plan and details about the plan?" },
  { time: "9:05", from: MS, text: "Absolutely, I can help you choose the right Microsoft 365 plan!" },
  {
    time: "9:05",
    from: YOU,
    text: "So the things - we are a small business but we are growing. Till now we were using Microsoft Office plan as the head count is low."
  },
  {
    time: "9:07",
    from: YOU,
    text: "But now as the business is expanding, we wanted a Microsoft package for business. I want to get a plan for 30 people. The main goal is to run Microsoft Office offline and as well as in a cloud."
  },
  {
    time: "9:07",
    from: YOU,
    text: "But the main goal is to work it on Windows platform, primarily on desktop."
  },
  {
    time: "9:08",
    from: YOU,
    text: "According to my understanding, Business Basic plan only runs in cloud, not offline on desktop. Am I correct?"
  },
  { time: "9:10", from: YOU, text: "You are still there Yousr?" },
  { time: "9:10", from: MS, text: "You're absolutely correct." },
  { time: "9:10", from: YOU, text: "And what about the Business Standard plan?" },
  { time: "9:11", from: YOU, text: "I think it runs offline as well as in the cloud?" },
  {
    time: "9:11",
    from: MS,
    text: "Microsoft 365 Business Basic includes only - Cloud-only apps (Word, Excel, PowerPoint online), Email, OneDrive, Teams. Does NOT include desktop (offline) apps."
  },
  { time: "9:11", from: MS, text: "So yes, you are correct: Business Basic cannot run Office offline." },
  {
    time: "9:12",
    from: MS,
    text: "Since you need desktop apps + cloud productivity + scalable for 30 people, the best option is Microsoft 365 Business Standard."
  },
  {
    time: "9:13",
    from: MS,
    text: "Do you also need advanced security (device protection, mobile management), or is basic desktop + cloud productivity enough for now?"
  },
  {
    time: "9:15",
    from: YOU,
    text: "No we don't want device protection, we want just basic desktop and cloud - that's enough."
  },
  { time: "9:15", from: MS, text: "I see, Are you doing automation for your company?" },
  {
    time: "9:15",
    from: YOU,
    text: "And I want it scalable as well so that in future if the head count increases we can add more people. I can see it includes up to 300 people. But I want to know about the price.",
    hl: "blue"
  },
  {
    time: "9:15",
    from: YOU,
    text: "So $12.50 per month for a single user - is that correct?",
    hl: "blue"
  },
  {
    time: "9:16",
    from: YOU,
    text: "And if the head count increases, the costing is going to increase right?",
    hl: "blue"
  },
  { time: "9:16", from: YOU, text: "As for now I am not doing any automation, but why did this matter?" },
  { time: "9:18", from: MS, text: "Yes, Business plans support up to 300 users.", hl: "blue" },
  {
    time: "9:18",
    from: MS,
    text: "If your headcount increases in the future, you simply purchase more seats, and your total cost increases accordingly, because it's priced per user.",
    hl: "blue"
  },
  { time: "9:19", from: MS, text: "But since you said no automation, Business Standard stays the correct choice." },
  {
    time: "9:20",
    from: MS,
    text: "Let me handle this setup for you, walk you through the process step by step to make sure everything is set up correctly with no issues."
  },
  { time: "9:20", from: MS, text: "Are you planning to implement soon? To make the process much easier." },
  { time: "9:20", from: YOU, text: "Yes I am planning to implement soon." },
  {
    time: "9:21",
    from: MS,
    text: "I can create for you a system generated link where you can use to get that smoothly with no errors and I will be with you step by step through it to make sure it works and in case you needed any immediate assistance as well.",
    hl: "pink"
  },
  { time: "9:22", from: MS, text: "Would you like to create the link in which the admin role is assigned to you?" },
  { time: "9:22", from: YOU, text: "Yes please." },
  { time: "9:22", from: YOU, text: "And I wanted to confirm the prices as well?" },
  { time: "9:23", from: MS, text: "Sure, to give you an accurate price, would you like to start with 30 users?" },
  { time: "9:23", from: YOU, text: "So for 30 people and for a year the cost is going to be $4,500 - right?", hl: "yellow" },
  { time: "9:24", from: MS, text: "Yes - your understanding is correct.", hl: "yellow" },
  { time: "9:24", from: MS, text: "30 users x $12.50 x 12 months = $4,500 per year", hl: "yellow" },
  { time: "9:25", from: YOU, text: "And is there any monthly option?", hl: "green" },
  { time: "9:25", from: MS, text: "Yes, if you would like to do so.", hl: "green" },
  { time: "9:25", from: YOU, text: "And how much tax is going to be there on top of that?" },
  {
    time: "9:25",
    from: MS,
    text: "I will just need a couple of details to create the Setting link. I will need please your Email and Mobile phone."
  },
  { time: "9:26", from: YOU, text: "What's the cost going to be for 30 users on a monthly basis?", hl: "green" },
  { time: "9:26", from: MS, text: "30 users x $12.50 = $375 per month", hl: "green" },
  { time: "9:26", from: YOU, text: "Email: ArshSid274@gmail.com | Mobile: +971547172956" },
  {
    time: "9:27",
    from: YOU,
    text: "And if the head count increases after 30, we can directly add users from admin control and then the cost automatically adds up - correct?",
    hl: "blue"
  },
  { time: "9:29", from: MS, text: "Yes - you can add more users anytime from the admin center.", hl: "blue" },
  {
    time: "9:30",
    from: YOU,
    text: "And one user can use the same account on up to 5 devices including desktop, mobile, tablet etc.?",
    hl: "blue"
  },
  { time: "9:30", from: MS, text: "Correct! One account = up to 5 devices per user.", hl: "blue" },
  { time: "9:31", from: MS, text: "I am working on your link now. Double check - would you like to start with 30 now?" },
  {
    time: "9:31",
    from: YOU,
    text: "And we are going to set up a business email. While setting up and importing old backup data, if we need any technical support assistance, are we going to get that as well?",
    hl: "orange"
  },
  { time: "9:32", from: YOU, text: "Yes, start with 30." },
  {
    time: "9:34",
    from: MS,
    text: "Yes, after setting up you will be connected with the technical team to start setting up your email and assist with data import.",
    hl: "pink"
  },
  { time: "9:34", from: MS, text: "Bear with me a few minutes, almost done." },
  { time: "9:35", from: YOU, text: "Okay got that." },
  { time: "9:35", from: YOU, text: "I am here and waiting." },
  { time: "9:37", from: MS, text: "Thank you for your patience, here is your activation link.", hl: "orange" },
  {
    time: "9:37",
    from: MS,
    text: "Please follow these steps to confirm the purchase:\n1. Copy and open the link in a private tab in Microsoft Edge / Chrome browser.\n2. Click Next.\n3. Click 'Set up new account'.\n4. Type your company name and size.\n5. Enter your number to receive the verification code.\n6. Create an administrator ID - example: admin@yourcompany.onmicrosoft.com - and a password. Ensure that you memorize it well, as this will be the username and password to access your admin account.\n7. Confirm the quantity of the licenses and add your card details.\n8. Click to place the order.",
    hl: "orange"
  },
  {
    time: "9:37",
    from: MS,
    text: "In step 5, Microsoft will assign you a temporary domain ending with 'onmicrosoft.com'. Make sure to save it and take note as we will need it to get access to the admin center.",
    hl: "orange"
  }
];

const FILTERS: Array<"all" | HighlightKey> = ["all", "yellow", "green", "blue", "orange", "pink"];

function senderLabel(from: Sender): string {
  if (from === MS) {
    return "Yousr Akram (Microsoft)";
  }
  if (from === YOU) {
    return "You (Mohammad Arsh)";
  }
  return "System Info";
}

interface MicrosoftSalesChatTemplateProps {
  data: MicrosoftSalesChatData;
}

export default function Template1({ data: _data }: MicrosoftSalesChatTemplateProps) {
  const [active, setActive] = useState<"all" | HighlightKey>("all");

  const filtered =
    active === "all" ? messages : messages.filter((message) => message.hl === active);
  const summaryCards: Array<{
    label: string;
    value: string;
    sub: string;
    hl: HighlightKey;
  }> = [
    {
      label: "Annual Cost (30 users)",
      value: "$4,500 / year",
      sub: "30 x $12.50 x 12 months",
      hl: "yellow"
    },
    {
      label: "Monthly Cost (30 users)",
      value: "$375 / month",
      sub: "30 x $12.50",
      hl: "green"
    },
    {
      label: "Max Users",
      value: "Up to 300",
      sub: "Add anytime from Admin Center",
      hl: "blue"
    },
    {
      label: "Devices Per User",
      value: "5 Devices",
      sub: "Desktop, mobile, tablet etc.",
      hl: "blue"
    },
    {
      label: "Business Email Setup",
      value: "Included",
      sub: "Technical team assists post-setup",
      hl: "orange"
    },
    {
      label: "Technical Support",
      value: "Step-by-step",
      sub: "Agent walks you through setup",
      hl: "pink"
    }
  ];

  return (
    <article
      className="min-h-[257mm] bg-[#f0f2f5] px-[10px] py-[16px] text-black"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div
          style={{
            background: "#0078d4",
            borderRadius: 12,
            padding: "24px 28px",
            marginBottom: 20,
            color: "#fff"
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
            Microsoft 365 Sales Chat Transcript
          </div>
          <div style={{ fontSize: 13, opacity: 0.88 }}>
            Date: February 23 | Agent: Yousr Akram | Customer: Mohammad Arsh
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            padding: "14px 20px",
            marginBottom: 16,
            boxShadow: "0 1px 6px rgba(0,0,0,0.08)"
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              color: "#888",
              marginBottom: 10,
              textTransform: "uppercase"
            }}
          >
            Highlight Legend
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {Object.entries(HL).map(([key, value]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5 }}>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 4,
                    background: value.bg,
                    border: `2px solid ${value.border}`,
                    display: "inline-block"
                  }}
                />
                {value.label}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
              color: "#666",
              textTransform: "uppercase",
              marginBottom: 14
            }}
          >
            Key Summary
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 14 }}>
            {summaryCards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: HL[card.hl].bg,
                  border: `2px solid ${HL[card.hl].border}`,
                  borderRadius: 10,
                  padding: "14px 16px"
                }}
              >
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>{card.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 2 }}>{card.value}</div>
                <div style={{ fontSize: 11.5, color: "#555" }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="no-print chat-filter-tabs" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          {FILTERS.map((filter) => {
            const isAll = filter === "all";
            const border = isAll ? "#0078d4" : HL[filter].border;
            const isSelected = active === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 20,
                  border: `2px solid ${border}`,
                  background: isSelected ? border : "#fff",
                  color: isSelected ? (isAll ? "#fff" : "#333") : border,
                  fontWeight: 600,
                  fontSize: 12.5,
                  cursor: "pointer",
                  transition: "all 0.15s"
                }}
              >
                {isAll ? "All Messages" : HL[filter].label}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtered.map((message, index) => {
            const isYou = message.from === YOU;
            const isInfo = message.from === INFO;
            const hlStyle = message.hl
              ? {
                  background: HL[message.hl].bg,
                  borderLeft: `4px solid ${HL[message.hl].border}`,
                  borderRadius: 8
                }
              : {};

            return (
              <div
                key={index}
                style={{ display: "flex", flexDirection: "column", alignItems: isYou ? "flex-end" : "flex-start" }}
              >
                <div
                  style={{
                    fontSize: 10.5,
                    color: "#999",
                    marginBottom: 2,
                    paddingLeft: isYou ? 0 : 4,
                    paddingRight: isYou ? 4 : 0
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: isInfo ? "#aaa" : isYou ? "#555" : "#0078d4"
                    }}
                  >
                    {senderLabel(message.from)}
                  </span>
                  {" | "}
                  {message.time}
                  {message.hl && (
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 10,
                        background: HL[message.hl].bg,
                        border: `1px solid ${HL[message.hl].border}`,
                        borderRadius: 10,
                        padding: "1px 7px",
                        color: "#333"
                      }}
                    >
                      {HL[message.hl].label}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    maxWidth: "80%",
                    padding: "9px 14px",
                    borderRadius: 10,
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    background: isInfo ? "#fafafa" : isYou ? "#e9e9e9" : "#eaf4ff",
                    color: isInfo ? "#888" : "#222",
                    fontStyle: isInfo ? "italic" : "normal",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
                    ...hlStyle
                  }}
                >
                  {message.text}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 28, fontSize: 12, color: "#888" }}>
          Microsoft 365 Business Standard | Chat Date: Feb 23 | Prepared for Mohammad Arsh
        </div>

        <style>{`
          @media print {
            .chat-filter-tabs { display: none !important; }
          }
        `}</style>
      </div>
    </article>
  );
}
