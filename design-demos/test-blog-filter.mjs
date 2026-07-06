// 最小互動測試：blog 列表的搜尋框與標籤 chip 篩選
import { chromium } from "playwright";

const url = "file:///D:/blog-review/easontype.github.io/dist/blog/index.html";
const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto(url);

const visibleCount = async () =>
  page.locator(".post-item:visible").count();

const initial = await visibleCount();

// 1. 搜尋不存在的字 → 0 篇 + no-match 顯示
await page.fill("#post-search", "zzz不存在zzz");
const afterBadSearch = await visibleCount();
const noMatchShown = await page.locator("#no-match").isVisible();

// 2. 清空 → 恢復
await page.fill("#post-search", "");
const afterClear = await visibleCount();

// 3. 點標籤 chip → 只剩該標籤文章；再點一次 → 取消
await page.click('.filter-chip[data-tag="design"]');
const afterTag = await visibleCount();
const chipActive = await page.locator('.filter-chip[data-tag="design"]').evaluate((el) => el.classList.contains("active"));
await page.click('.filter-chip[data-tag="design"]');
const afterUntag = await visibleCount();

console.log(JSON.stringify({ initial, afterBadSearch, noMatchShown, afterClear, afterTag, chipActive, afterUntag, pageErrors: errors }, null, 2));
await browser.close();

const pass = initial >= 1 && afterBadSearch === 0 && noMatchShown && afterClear === initial && afterTag >= 1 && chipActive && afterUntag === initial && errors.length === 0;
console.log(pass ? "PASS" : "FAIL");
process.exit(pass ? 0 : 1);
