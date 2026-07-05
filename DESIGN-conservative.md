# variant: conservative
# base: ./DESIGN.md
# brand-primary: #2ea3e6 (Path B — 保留來源值，僅套 5 維度矩陣)
# generated: 2026-07-06
---
# meta（非 token，供後續 huashu-design 交接使用）
source-reference: "design-reference/logo-cat.png"  # 品牌 logo 原圖（已版本化）；插畫非頁面截圖，無版面骨架可參考

colors:
  canvas:   "#050608"     # page background
  surface:  "#08090d"     # card / panel background — 極低對比，幾乎融入 canvas
  ink:      "#eef4fb"     # primary text
  slate:    "#8a97ad"     # secondary text
  steel:    "#5b6576"     # tertiary text / placeholder
  hairline: "#12161f"     # border / divider — 幾乎不可見，靠邊界定義層次
  primary:  "#409ed4"     # brand / CTA — 去飽和 20%（HSL S 78.6%→62.9%，H/L 不變）
  on-primary: "#04070a"   # text on primary bg
  accent:   "#8fe8ff"     # hover/active/glow 高光

typography:
  font-sans:  "Inter, ui-sans-serif, system-ui"
  font-mono:  "JetBrains Mono, ui-monospace"
  scale-ratio: 1.25      # Minor Third，穩重層級
  base-size:  "16px"

spacing:
  base: "4px"
  scale: [4, 8, 12, 16, 24, 32, 48, 64]

radius:
  sm:   "2px"
  md:   "4px"
  lg:   "8px"
  pill: "9999px"

shadows:
  subtle: "none"   # 保守：無陰影，靠 hairline border 定義層次
  medium: "none"
---

## Components

### Button
- background: `primary`
- text: `on-primary`
- radius: `radius.md`
- padding: `8px 16px`
- hover: 邊框轉為 `accent`（不使用發光，維持乾淨線框感）

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
