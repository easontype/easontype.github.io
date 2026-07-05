# variant: bold
# base: ./DESIGN.md
# brand-primary: #2ea3e6 (Path B — 保留來源值，僅套 5 維度矩陣)
# generated: 2026-07-06
---
# meta（非 token，供後續 huashu-design 交接使用）
source-reference: "design-reference/logo-cat.png"  # 品牌 logo 原圖（已版本化）；插畫非頁面截圖，無版面骨架可參考

colors:
  canvas:   "#050608"     # page background
  surface:  "#10192b"     # card / panel background — 強烈對比，藍色調面板
  ink:      "#eef4fb"     # primary text
  slate:    "#8a97ad"     # secondary text
  steel:    "#5b6576"     # tertiary text / placeholder
  hairline: "#223a52"     # border / divider — 更明顯的藍調邊線
  primary:  "#1ca7f8"     # brand / CTA — 加飽和 20%（HSL S 78.6%→94.3%，H/L 不變）
  on-primary: "#04070a"   # text on primary bg
  accent:   "#8fe8ff"     # hover/active/glow 高光

typography:
  font-sans:  "Inter, ui-sans-serif, system-ui"
  font-mono:  "JetBrains Mono, ui-monospace"
  scale-ratio: 1.618     # 黃金比例，強烈層級對比
  base-size:  "16px"

spacing:
  base: "4px"
  scale: [4, 8, 12, 16, 24, 32, 48, 64]

radius:
  sm:   "8px"
  md:   "16px"
  lg:   "32px"
  pill: "9999px"

shadows:
  subtle: "0 0 10px rgba(28, 167, 248, 0.5)"
  medium: "0 0 24px rgba(28, 167, 248, 0.7), 0 0 48px rgba(28, 167, 248, 0.35)"
---

## Components

### Button
- background: `primary`
- text: `on-primary`
- radius: `radius.md`
- padding: `8px 16px`
- hover: 疊加 `accent` 強發光 + 擴散（`shadows.medium`）

### Card
- background: `surface`
- border: `1px solid hairline`
- radius: `radius.md`
- shadow: `shadows.subtle`

### Input
- background: `canvas`
- border: `1px solid hairline`
- focus-border: `primary`
- radius: `radius.sm`
- placeholder: `steel`

### Tag / Badge
- background: `surface`
- text: `accent`
- radius: `radius.sm`
- font-size: 11px
- font-weight: 500
