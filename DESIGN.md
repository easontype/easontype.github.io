# variant: light-editorial（淺色改版定稿）
# base: ds-brand balanced 變種 + REDESIGN-PLAN.md 拍板色票
# mix: 變體 B（編輯檯）為基底 + 變體 C（電路貓）的節點裝飾元素
# brand-primary: 雙層 — 可點擊 #1668b0 / 品牌亮藍 #2ea3e6（僅裝飾）
# generated: 2026-07-06
---
# meta（非 token）
source-reference: "design-reference/logo-cat.png"  # 黑底霓虹 logo，白底站不直接使用；以電路節點 SVG mark 代替（待補白底版 logo）
design-demos: "design-demos/"  # A/B/C 三變體原型與截圖，使用者選定 B+C 混搭

colors:
  canvas:          "#ffffff"   # 閱讀面純白
  surface:         "#f6f8fb"   # 卡片/次要區塊（極淺藍灰）
  surface-soft:    "#fbfcfe"   # hover/斑馬
  primary-soft:    "#e7f2fb"   # 選取/CTA 淺藍底（電子報色帶）
  primary-tint:    "#cfe6f8"   # badge 底/active 邊/卡片 hover 邊
  ink:             "#14202e"   # 主文字（冷調近黑）
  slate:           "#47566a"   # 次要文字
  steel:           "#737f92"   # 第三層/placeholder
  hairline:        "#e6ebf2"   # 邊框/分隔線
  hairline-strong: "#d2dae5"   # 輸入框邊框
  primary:         "#1668b0"   # 連結/按鈕/active（白底對比 5.6:1，過 WCAG AA）
  primary-pressed: "#0f4f88"   # hover/按下
  on-primary:      "#ffffff"   # 主色上的文字
  accent:          "#2ea3e6"   # 品牌亮藍，僅裝飾（節點圓點/電路線/active 底線），勿當文字色

typography:
  font-display: "Space Grotesk, IBM Plex Sans TC, sans-serif"   # 標題/品牌字
  font-sans:    "IBM Plex Sans TC, system-ui, sans-serif"       # 中文本文
  font-mono:    "JetBrains Mono, ui-monospace"                  # 日期/kicker/標籤/code
  scale-ratio:  1.414
  base-size:    "16px"
  body-line-height: 1.7
  prose-size:   "17px"          # 文章內文

spacing:
  base: "4px"
  scale: [4, 8, 12, 16, 24, 32, 48, 64]
  measure: "720px"              # 主欄寬（B 版）

components:
  header:        "hairline 下框線；brand = 電路節點 SVG mark + 站名；nav active = primary 字 + accent 底線"
  section-label: "display 字重標題 + 前置節點圓點（accent 描邊 primary-soft 底）"
  kicker:        "mono 12px 全大寫 letter-spacing 0.14em，primary 色"
  post-list:     "mono 日期欄 + 標題 + 一行 slate 摘要"
  project-card:  "surface 底 + hairline 邊 + radius 10px；hover 邊變 primary-tint"
  tag-chip:      "mono 11px，primary-soft 底 + primary-tint 邊 + primary 字，圓角 999px"
  newsletter:    "首頁＝primary-soft 滿版色帶；文章尾＝primary-tint 邊框卡片"
  circuit-trace: "hero 右上極淡電路線 SVG（primary-soft/primary-tint 描邊 + 少量 accent 節點），純裝飾，z-index 0"

principles:
  - 閱讀面純白；藍只做訊號（連結/按鈕/active），大面積是白
  - hairline 分隔優先，不濫用陰影
  - accent #2ea3e6 白底對比僅 2.6:1，永遠不當文字色
  - 純淺色，不做深色切換（color-scheme: light）
