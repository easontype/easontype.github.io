export interface Project {
  name: string;
  description: string;
  featured?: boolean; // 首頁精選
  href?: string; // 外部連結（有才顯示）
}

export const projects: Project[] = [
  {
    name: "litereview",
    description: "文獻搜尋、找重點、比較的研究輔助工具。",
    featured: true,
    href: "https://github.com/easontype/litereview",
  },
  {
    name: "Lingua A8",
    description: "全雙工語音學習 app。",
    featured: true,
    href: "https://github.com/easontype/loop-learning-agent",
  },
  {
    name: "OctaBrain",
    description: "社群智慧引擎：分析貼文、學習主理人口吻。",
  },
  {
    name: "AI八爪貓 電子報",
    description: "AI 工具與趨勢的中文電子報。",
  },
];
