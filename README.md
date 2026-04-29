<div align="center">
  <h1>Afterburner</h1>
  <p><strong>A breathtaking, open-source social media repurposing dashboard.</strong></p>
  <p>Turn any YouTube URL into 5 viral Twitter threads. Built with Astro, React, and Tailwind.</p>
</div>

---

## ⚡️ Why Afterburner?

The creator economy is booming, but repurposing long-form content into short-form social posts usually requires expensive ($100/mo) "all-in-one" SaaS tools that lock you into their specific AI prompts and workflows.

**Afterburner** is different. It is a stunning, MIT-licensed SaaS dashboard that you own entirely. 

### Features
- 🎨 **Premium UI:** Deep dark mode, glassmorphism components, and a beautiful grid layout for generated posts.
- ⚛️ **Interactive Dashboard:** Built with Astro and React for an app-like experience.
- 🔌 **Bring Your Own AI:** The UI is completely decoupled from the AI engine, giving you total control.

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/scramjetio/afterburner.git my-dashboard

# 2. Install dependencies
cd my-dashboard
npm install

# 3. Start the dev server
npm run dev
```

## 🤖 The Scramjet Integration (The Engine)

**Important:** This repository is the *Presentation Layer*. To prevent this project from requiring heavy, expensive local compute to scrape YouTube and run LLMs, we decoupled the backend.

To make the dashboard actually generate posts from real YouTube URLs, you need to connect the API route to **Scramjet**, our event-driven automation engine.

1. Create a free Scramjet account.
2. Add a new "Webhook to LLM" workflow.
3. Paste your Scramjet Webhook URL into the `/api/generate` route in this codebase.

When you click "Generate" in Afterburner, it sends the YouTube URL to Scramjet. Scramjet automatically scrapes the transcript, runs it through your custom LLM prompt, and returns the formatted JSON array of Twitter threads back to your beautiful UI.

*Learn more about powering your UI with Scramjet [here](https://scramjet.io).*

## 📄 License
MIT © The Scramjet Team
