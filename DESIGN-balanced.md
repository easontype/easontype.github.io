# variant: balanced
# base: ./DESIGN.md
# brand-primary: #2ea3e6 (Path B — 保留來源值，僅套 5 維度矩陣)
# generated: 2026-07-06
---
# meta（非 token，供後續 huashu-design 交接使用）
source-reference: "design-reference/logo-cat.png"  # 品牌 logo 原圖（已版本化）；插畫非頁面截圖，無版面骨架可參考

colors:
  canvas:   "#050608"     # page background
  surface:  "#0d1117"     # card / panel background — 中等對比
  ink:      "#eef4fb"     # primary text
  slate:    "#8a97ad"     # secondary text
  steel:    "#5b6576"     # tertiary text / placeholder
  hairline: "#1c2433"     # border / divider
  primary:  "#2ea3e6"     # brand / CTA — 原值（logo 萃取）
  on-primary: "#04070a"   # text on primary bg
  accent:   "#8fe8ff"     # hover/active/glow 高光

typography:
  font-sans:  "Inter, ui-sans-serif, system-ui"
  font-mono:  "JetBrains Mono, ui-monospace"
  scale-ratio: 1.414     # √2，中性層級
  base-size:  "16px"

spacing:
  base: "4px"
  scale: [4, 8, 12, 16, 24, 32, 48, 64]

radius:
  sm:   "4px"
  md:   "8px"
  lg:   "16px"
  pill: "9999px"

shadows:
  subtle: "0 0 4px rgba(46, 163, 230, 0.3), 0 0 12px rgba(46, 163, 230, 0.25)"
  medium: "0 0 8px rgba(46, 163, 230, 0.45), 0 0 20px rgba(46, 163, 230, 0.35)"
---

## Components

### Button
- background: `primary`
- text: `on-primary`
- radius: `radius.md`
- padding: `8px 16px`
- hover: 疊加 `accent` 發光（`shadows.medium`）

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
