export const spendingData = {
  week: {
    total: "1,284.50",
    change: "12.4",
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    values: [44, 71, 38, 91, 62, 79, 53],
    categories: [
      ["Food & coffee", "$284.00", 36],
      ["Shopping", "$412.50", 52],
      ["Getting around", "$188.00", 24],
      ["Everything else", "$400.00", 50],
    ],
  },
  month: {
    total: "4,862.80",
    change: "8.2",
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    values: [62, 42, 81, 56, 93, 64, 78],
    categories: [
      ["Food & coffee", "$942.00", 48],
      ["Shopping", "$1,280.80", 65],
      ["Getting around", "$560.00", 28],
      ["Everything else", "$2,080.00", 85],
    ],
  },
  year: {
    total: "42,318.90",
    change: "6.8",
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"],
    values: [48, 59, 75, 56, 83, 68, 91],
    categories: [
      ["Food & coffee", "$8,640.00", 44],
      ["Shopping", "$12,802.90", 65],
      ["Getting around", "$4,896.00", 25],
      ["Everything else", "$15,980.00", 82],
    ],
  },
} as const;
export type Period = keyof typeof spendingData;
export const cardFinishes = [
  {
    key: "midnight",
    name: "Midnight",
    color: "#293249",
    desc: "Quiet confidence. A soft-touch graphite finish that feels as considered as it looks.",
    detail: "Matte graphite · Brushed titanium edge",
  },
  {
    key: "silver",
    name: "Silver",
    color: "#b4bfd2",
    desc: "A little light in the everyday. Cool satin metal with subtle, beautifully shifting reflections.",
    detail: "Satin silver · Cool polished edge",
  },
  {
    key: "blue",
    name: "Blue",
    color: "#456bf0",
    desc: "For a different point of view. A deep sapphire finish with an unmistakable electric edge.",
    detail: "Deep sapphire · Anodized aluminum study",
  },
] as const;
export type Finish = (typeof cardFinishes)[number]["key"];
export const faq = [
  {
    q: "What makes MONO different?",
    a: "MONO is a fictional design exploration of simpler, more considered everyday money. It brings a card, spending insights and clear account information into one coherent product concept.",
  },
  {
    q: "Is this a real bank?",
    a: "No. MONO is a self-initiated portfolio concept, not a licensed bank or financial service. No accounts are opened, no funds are held and no banking integrations are connected.",
  },
  {
    q: "What happens when I open an account?",
    a: "The button opens a clearly labeled local demo. The email is validated by your browser and never transmitted, logged or saved. No account is created.",
  },
  {
    q: "Can I change my card finish?",
    a: "Yes — explore the interactive material studies above. Midnight, Silver and Blue change the actual rendered CSS/SVG card surface, highlighting and design notes.",
  },
  {
    q: "Are there any hidden fees?",
    a: "The sample plans show all illustrative prices. There is no actual subscription, card order, fee or checkout in this concept. Annual Plus is shown as $72 per year.",
  },
];
