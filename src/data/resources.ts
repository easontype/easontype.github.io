export interface Resource {
  title: string;
  href: string;
  free?: string; // 免費狀態
  certificate?: string; // 證書
  hours?: string; // 預估時數
  content?: string; // 學習內容
  audience?: string; // 適合誰學
}

export interface ResourceSection {
  id: string;
  title: string;
  lang: "zh" | "en";
  resources: Resource[];
}

export const resourceSections: ResourceSection[] = [
  {
    id: "zh-courses",
    title: "中文學習資源",
    lang: "zh",
    resources: [
      {
        title: "Microsoft Azure AI 基礎（AI-901）— 繁體中文版",
        href: "https://learn.microsoft.com/zh-tw/credentials/certifications/azure-ai-fundamentals/",
        free: "⚠️ 教材免費；考試約 NT$3,200",
        certificate: "✅ 考過後獲微軟官方認證徽章",
        hours: "15–40 小時",
        content: "全繁體中文介面。涵蓋 Azure 雲端 AI 服務、生成式 AI 與 Azure OpenAI Service、機器學習概念、負責任 AI。",
        audience: "在企業環境使用 Microsoft 生態系的工作者；想要有企業辨識度證照的求職者。",
      },
      {
        title: "台大李宏毅 — 生成式 AI 導論 2025",
        href: "https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php",
        free: "✅ 完全免費",
        certificate: "❌ 無官方結業證書",
        hours: "30–40 小時",
        content: "繁體中文。涵蓋生成式 AI 原理、AI Agent、大型語言模型技術突破。台灣最具公信力的 AI 技術課程，每年更新。YouTube 同步公開。",
        audience: "有基礎數學/程式背景者；想深入理解生成式 AI 技術原理的學習者；對研究方向感興趣的大學生／工程師。",
      },
      {
        title: "Google 數位人才探索計畫（台灣）",
        href: "https://blog.104.com.tw/google-digital-education/",
        free: "✅ 完全免費",
        certificate: "✅ Google 官方結業證書（需完成所有學程）",
        hours: "20–30 小時",
        content: "繁體中文。三大學程：AI 職場通識（Gemini / NotebookLM）、數位行銷、Google Cloud。零基礎可學，偏職場實用工具。",
        audience: "完全沒有 AI 背景的職場人士；HR、行銷、業務等非技術職能；需要 Google 官方認可憑證的求職者。",
      },
      {
        title: "吳恩達深度學習課程中文筆記（GitHub）",
        href: "https://github.com/fengdu78/deeplearning_ai_books",
        free: "✅ 完全免費（開源）",
        certificate: "❌ 無官方證書（需搭配 Coursera 正式修課）",
        hours: "60–80 小時（完整系列）",
        content: "簡體中文。DeepLearning.AI 深度學習系列完整中文筆記。涵蓋神經網路、CNN、RNN、序列模型、結構化 ML 專案。",
        audience: "想系統學習深度學習理論的工程師；搭配 Coursera 旁聽用中文筆記輔助理解。",
      },
      {
        title: "Generative AI for Beginners（繁體中文版）",
        href: "https://github.com/microsoft/generative-ai-for-beginners/blob/main/translations/zh-TW/README.md",
        free: "✅ 完全免費（開源）",
        certificate: "✅ 可透過 MS Learn 模組領取數位徽章",
        hours: "6–10 小時（共 21 堂課）",
        content: "繁體中文翻譯版。教如何建構生成式 AI 應用，包含 RAG、AI Agents、Low-code AI，支援 Python 與 TypeScript。2025 年已更新至 v3。",
        audience: "有基礎程式能力想做 AI 應用的開發者；想用繁體中文學習 GenAI 架構（RAG/Agent）的工程師。",
      },
      {
        title: "freeCodeCamp 機器學習 with Python（中文版）",
        href: "https://www.freecodecamp.org/chinese/",
        free: "✅ 完全免費（平台完全開源）",
        certificate: "✅ 完成 5 個實作專案後獲免費認證",
        hours: "300+ 小時",
        content: "中文介面。核心使用 TensorFlow，涵蓋神經網路、NLP、電腦視覺（貓狗分類器、推薦引擎等）。2025 年新增 PyTorch 補充內容。",
        audience: "有 Python 基礎想正式踏入 ML 領域的人；喜歡用做專案學習；需要一張可展示程式碼作品的認證。",
      },
    ],
  },
  {
    id: "en-courses",
    title: "英文學習資源",
    lang: "en",
    resources: [
      {
        title: "Anthropic Academy",
        href: "https://www.anthropic.com/learn",
        free: "✅ 完全免費",
        certificate: "✅ 有官方結業證書",
        hours: "15 分鐘–8 小時（依課程）",
        content: "Claude 官方實作課程。包含 AI Fluency、Claude 101、Prompt 工程、API 開發、MCP、Claude Code，以及 AWS/GCP 雲端整合進階主題。",
        audience: "已在使用 Claude 或 AI 工具的職場工作者；想深入了解 Claude 工作流的開發者；對 AI Agent / MCP 有興趣的進階用戶。",
      },
      {
        title: "Google AI Essentials",
        href: "https://www.coursera.org/learn/google-ai-essentials",
        free: "⚠️ 旁聽（Audit）免費，正式修課需付費",
        certificate: "❌ 旁聽無證書；付費後可獲 Google credential",
        hours: "8–10 小時",
        content: "職場 AI 實務應用。教如何用 Gemini 等 AI 工具提升生產力、Prompt 工程入門、AI 倫理。無需寫程式，偏實用工作流。",
        audience: "完全沒接觸過 AI 的職場新手；想用 Google 工具（Gemini / Workspace）的一般用戶；需要一張有名氣入門憑證的求職者。",
      },
      {
        title: "IBM SkillsBuild – Artificial Intelligence Fundamentals",
        href: "https://skillsbuild.org/",
        free: "✅ 完全免費",
        certificate: "✅ 免費 Credly 數位徽章（履歷友善）",
        hours: "10–20 小時",
        content: "AI 基礎完整入門。涵蓋 NLP、電腦視覺、機器學習概念，包含 IBM Watson Studio 模擬實驗室。結構完整，兼顧理論與 IBM 工具實作。",
        audience: "想打穩 AI 基礎的完全初學者；履歷需要認可徽章的求職者；對 IBM 生態系有興趣的企業用戶。",
      },
      {
        title: "IBM SkillsBuild – Foundations for Understanding AI",
        href: "https://skillsbuild.org/",
        free: "✅ 完全免費",
        certificate: "✅ 免費 badge",
        hours: "5–10 小時",
        content: "AI 基礎概念子課程。涵蓋 AI 歷史、定義、機器學習基本原理，以及 AI 如何影響各行業。適合快速建立觀念框架。",
        audience: "想快速補 AI 概念的非技術人員；準備往 IBM 完整路徑走的入門學習者。",
      },
      {
        title: "IBM SkillsBuild – Language and Vision in AI",
        href: "https://skillsbuild.org/",
        free: "✅ 完全免費",
        certificate: "✅ 免費 badge",
        hours: "5–10 小時",
        content: "補充 NLP 與電腦視覺兩大 AI 應用領域核心概念，包含語音辨識、圖像分類、物體偵測等。",
        audience: "已完成 Foundations 的學習者；對 NLP 或視覺 AI 有興趣但不想寫程式的人。",
      },
      {
        title: "IBM SkillsBuild – Build Your Own Chatbots",
        href: "https://skillsbuild.org/",
        free: "✅ 完全免費",
        certificate: "✅ 有 2 個免費 badge",
        hours: "6–8 小時",
        content: "實作導向：使用 IBM Watson Assistant 建立 Chatbot，涵蓋意圖設計、對話流程、部署整合。偏 no-code / low-code 操作。",
        audience: "想快速做出聊天機器人的非技術人員；對 IBM Watson 工具感興趣的業務或行銷人員。",
      },
      {
        title: "Elements of AI",
        href: "https://www.elementsofai.com/",
        free: "✅ 完全免費",
        certificate: "✅ Part 1 結業證書完全免費；Part 2 可選付費申請大學學分",
        hours: "30–60 小時（Part 1）",
        content: "歐洲最知名的 AI 通識課（赫爾辛基大學出品）。從 AI 定義出發，深入講解機率思維、神經網路原理、AI 對社會的倫理影響。無需寫程式，但觀念紮實。",
        audience: "想從原理角度理解 AI 的非技術人員；想補人文社科與倫理面向的學習者；歐洲學術認可度最高的入門課，適合履歷加值。",
      },
      {
        title: "Simplilearn × Google Cloud Generative AI",
        href: "https://www.simplilearn.com/skillup-free-online-courses",
        free: "✅ 完全免費（SkillUp 平台）",
        certificate: "✅ 完成後可免費下載結業證書",
        hours: "1–2 小時",
        content: "Google Cloud AI 工具快速入門。介紹 Vertex AI、Generative AI Studio，以及 Prompt 設計技巧（Zero-shot、Chain-of-thought）。內容較淺，適合快速認識工具。",
        audience: "想在 1–2 小時內了解 Google Cloud AI 的人；需要快速拿一張結業證書的學習者；已有 AI 基礎、想了解 Google Cloud 工具的人。",
      },
      {
        title: "Google Cloud Training – Machine Learning & AI",
        href: "https://cloud.google.com/training/machinelearning-ai",
        free: "⚠️ 部分課程免費；進階 Lab 需付費",
        certificate: "⚠️ 完整路徑可通往 Professional ML Engineer 認證（考試需付費）",
        hours: "依路徑而異（數小時至數十小時）",
        content: "技術與雲端實作導向。涵蓋 Vertex AI、TensorFlow on GCP、ML Pipeline、MLOps，以及 Gemini API 應用。",
        audience: "有 ML 基礎、想在雲端實作的工程師；準備考 GCP ML Engineer 認證的人；想研究 Vertex AI 或 Gemini API 的開發者。",
      },
      {
        title: "IBM Generative AI for Everyone（Coursera）",
        href: "https://www.coursera.org/specializations/generative-ai-fundamentals",
        free: "⚠️ Coursera 旁聽免費；正式修課需付費",
        certificate: "❌ 旁聽無證書；付費後可獲 IBM 認可證書",
        hours: "3–5 小時（單門課）",
        content: "全員生成式 AI 通識。區分判別式 AI 與生成式 AI，介紹 IBM Granite 等基礎模型，涵蓋企業應用案例與倫理考量。",
        audience: "想了解生成式 AI 商業應用的管理者或非技術人員；對 IBM 企業 AI 生態有興趣的人。",
      },
      {
        title: "DeepLearning.AI Short Courses",
        href: "https://www.deeplearning.ai/short-courses/",
        free: "✅ 多數課程完全免費（新課發布初期開放）",
        certificate: "✅ 部分提供結業 badge",
        hours: "1–4 小時（每門獨立微課程）",
        content: "吳恩達與各大 AI 公司（OpenAI、Google、Meta、LangChain）合作的實戰短課。每堂聚焦一個主題，涵蓋 Prompt Engineering、AI Agent 構建、RAG、向量資料庫等最新技術。",
        audience: "已有 AI 基礎、想快速跟上最新技術的人；開發者或產品人員想拆開學某個特定主題；不想花大量時間的碎片化學習者。",
      },
      {
        title: "Hugging Face Learn",
        href: "https://huggingface.co/learn",
        free: "✅ 完全免費",
        certificate: "✅ 完成特定單元並提交作業後可獲免費證書",
        hours: "20–40 小時（NLP Course）；10–20 小時（其他路徑）",
        content: "Transformer 模型理論與實作、NLP 完整流程、音訊處理、強化學習、Gradio 部署上線。是學開源模型（Llama、Mistral 等）的核心教材。",
        audience: "有 Python 基礎、想用開源模型做開發的工程師；想了解模型背後運作原理的人；準備在 Hugging Face Hub 發佈自己模型的開發者。",
      },
      {
        title: "Kaggle Learn",
        href: "https://www.kaggle.com/learn",
        free: "✅ 完全免費",
        certificate: "✅ 每門微課程完成後立即下載證書",
        hours: "3–5 小時（每門）；走完 AI/ML 路徑約 15–30 小時",
        content: "在瀏覽器直接跑 Python 練機器學習、資料分析、生成式 AI 入門。每課有互動作業，做完即驗收。課程包含：Python、ML 入門、Deep Learning、NLP、電腦視覺、GenAI 等。",
        audience: "想邊做邊學 ML 的人；不想啃理論、喜歡直接動手的初學者；每課 3–5 小時完成後立即拿到可分享的證書，效率極高。",
      },
      {
        title: "AWS Skill Builder — Generative AI Learning Plan",
        href: "https://explore.skillbuilder.aws/",
        free: "✅ 免費數位課程部分完全免費",
        certificate: "✅ 免費數位 badge；正式 AWS AI Practitioner 考試需付費",
        hours: "8–15 小時（免費課程部分）",
        content: "以 AWS Bedrock 平台為核心，涵蓋生成式 AI 應用介紹、決策者視角的 AI 戰略規劃，以及開發者實戰（Prompt 設計、API 串接）。提供決策者版與開發者版兩條路徑。",
        audience: "公司有用 AWS 環境的工作者；想了解企業如何部署 AI 的主管或業務人員；準備考 AWS Certified AI Practitioner 認證的人（考試需付費）。",
      },
      {
        title: "NVIDIA DLI — 免費入門課",
        href: "https://www.nvidia.com/en-us/training/online/",
        free: "✅ 完全免費（篩選 Free 類別）",
        certificate: "✅ 部分基礎課程完成後提供免費結業證明",
        hours: "1–2 小時（各門獨立）",
        content: "以「Generative AI Explained」為代表作，講解 AI 如何生成文字、圖片的原理；另有 RAG 系統建構入門課。偏概念介紹，帶有 GPU 運算背景知識。",
        audience: "想快速了解 AI 原理但不想寫程式的人；對 GPU / 硬體加速 AI 有興趣的學習者；需要快速補一個知識點的人（1–2 小時完成）。",
      },
      {
        title: "fast.ai — Practical Deep Learning for Coders",
        href: "https://course.fast.ai/",
        free: "✅ 完全免費（完全開源，無廣告）",
        certificate: "❌ 無官方證書",
        hours: "30–60 小時",
        content: "「由上而下」學法——先跑出結果再解釋原理。涵蓋圖像辨識、NLP、模型微調（Fine-tuning）、生成模型。2024–2025 版強調活用現成模型做出實際作品。完全開源，沒有任何廣告。",
        audience: "有 Python 基礎、厭倦只看理論想直接做出東西的人；工程師背景想快速進入深度學習實作。雖無證書，但業界認可度極高，適合想做作品集的人。",
      },
      {
        title: "Stanford CS224N — NLP with Deep Learning（YouTube 公開課）",
        href: "http://web.stanford.edu/class/cs224n/",
        free: "✅ 完全免費（YouTube 公開錄影 + 課程講義）",
        certificate: "❌ 無證書（需付費選修才有）",
        hours: "40–60 小時（完整一學期）",
        content: "史丹佛大學正式課程錄影公開。從 Word Embedding、RNN 到 Transformer 完整理論體系，是理解 GPT 等現代大語言模型架構的學術聖經。搭配 CS25（Transformers United）可建立更完整的認識。",
        audience: "想認真搞懂 Transformer 原理的人；有數學/工程背景、不滿足於「會用」想「真的懂」的學習者。需要較強的線性代數和微積分基礎。",
      },
      {
        title: "Meta AI — Llama 學習資源",
        href: "https://llama.meta.com/docs/get-started/",
        free: "✅ 官方文件與部分課程免費；Coursera 版旁聽免費",
        certificate: "⚠️ Coursera 旁聽無證書；付費後可獲認可的專業認證",
        hours: "5–10 小時（文件自學）；10–20 小時（Coursera 課程）",
        content: "Llama 系列開源模型的微調（Fine-tuning）與本地/雲端部署。Coursera 上有「Generative AI with Meta Llama」專業認證課程，涵蓋開源模型的選型、調優與應用開發。",
        audience: "想在自己機器或私有環境跑開源大模型的開發者；不想依賴付費 API、偏好開源路線的人；對 Llama 3 系列模型有開發需求的工程師。",
      },
    ],
  },
];

export interface Certification {
  title: string;
  href: string;
  region: "台灣本土認證" | "國際認證";
}

export const certifications: Certification[] = [
  { title: "iPAS AI 應用規劃師（初級）", href: "https://www.ipas.org.tw/junior/AP/", region: "台灣本土認證" },
  { title: "iPAS AI 應用規劃師（中級）", href: "https://www.ipas.org.tw/", region: "台灣本土認證" },
  { title: "資策會 生成式 AI 能力認證", href: "https://www.iiiedu.org.tw/certifications/GAI.html", region: "台灣本土認證" },
  { title: "資策會 生成式 AI 辦公室應用能力認證", href: "https://www.iiiedu.org.tw/certifications/", region: "台灣本土認證" },
  { title: "Microsoft AI-901（Azure AI Fundamentals）", href: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/", region: "國際認證" },
  { title: "Microsoft AI-102（Azure AI Engineer Associate，中級）", href: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-102/", region: "國際認證" },
  { title: "Google Gemini Certification for Educators", href: "https://educertifications.google.com/", region: "國際認證" },
];
