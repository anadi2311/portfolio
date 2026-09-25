export type Talk = {
  title: string;
  /** YouTube video id (the part after v=) */
  youtubeId: string;
  /** Optional start time in seconds (deep link into a longer recording) */
  startSeconds?: number;
  note?: string;
};

export const talks: Talk[] = [
  {
    title: "Blockchain@UBC research talk",
    youtubeId: "qVCxoCJC4pU",
    startSeconds: 1840,
    note: "December research session at Blockchain@UBC. Anadi walks through his MSc work on supply chain finance with smart contracts — purchase-order finance, reverse factoring, and a proof-of-concept on Ethereum. The link opens at his segment (~30:40).",
  },
  {
    title: "Decentralizing Ethereum Consensus Layer",
    youtubeId: "KaWflzt4yhc",
    note: "DCTRL talk on why Ethereum’s consensus layer needs more operators, not fewer, and how distributed validators push that goal. Companion to the staking and infra work on Obol.",
  },
];
