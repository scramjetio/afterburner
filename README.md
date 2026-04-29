<!-- The Visual Hook -->
<div align="center">
  <img src=".github/assets/hero.png" alt="Afterburner Hero Image" width="100%">
  
  <h1>Afterburner</h1>
  <p><strong>Turn long-form videos into viral threads using an open-source, AI-powered social dashboard.</strong></p>
  
  <!-- Social Proof Badges -->
  <a href="https://afterburner.scramjet.io" target="_blank"><img src="https://img.shields.io/badge/Live-Demo-2ecc71?style=flat-square&logo=cloudflarepages&logoColor=white" alt="Live Demo"></a>
  <a href="https://github.com/scramjetio/afterburner/actions"><img src="https://img.shields.io/github/actions/workflow/status/scramjetio/afterburner/ci.yml?style=flat-square" alt="CI Status"></a>
  <a href="https://github.com/scramjetio/afterburner/blob/main/LICENSE"><img src="https://img.shields.io/github/license/scramjetio/afterburner?style=flat-square" alt="License"></a>
</div>

---

## ⚡️ The Problem
Repurposing long-form content usually forces you to choose between two terrible options: pay $100/mo for a closed-source "All-in-One" AI tool that locks you into their specific prompts, or spend hours manually copying transcripts into ChatGPT and pasting the results back into a scheduler. 

## 🌟 The Solution (Afterburner)
**Afterburner** provides a stunning, open-source SaaS dashboard built on Astro and React. You own the code, the UI, and the prompts. You get the premium look and feel of a venture-backed SaaS without the walled garden.

## 🚀 Quick Start
```bash
git clone https://github.com/scramjetio/afterburner.git
cd afterburner
npm install && npm run dev
```

## 🤖 The Trojan Horse: Powered by Scramjet
To keep this repository lightweight, the open-source code is strictly the **Presentation Layer**. 

If you want this dashboard to actually scrape YouTube and generate high-converting threads using LLMs, you must connect it to our serverless compute engine. 

Simply set up a workflow on [Scramjet.io](https://scramjet.io) and paste your Webhook URL into the `/api/generate` route. Scramjet handles the heavy AI compute and returns the JSON directly to your beautiful UI.

## 🗺️ Architecture

```mermaid
sequenceDiagram
    participant User
    participant Afterburner UI
    participant Scramjet Engine
    participant YouTube
    participant OpenAI

    User->>Afterburner UI: Pastes YouTube URL
    Afterburner UI->>Scramjet Engine: Webhook (URL Payload)
    Scramjet Engine->>YouTube: Scrapes Transcript
    Scramjet Engine->>OpenAI: Applies Custom Viral Prompt
    OpenAI-->>Scramjet Engine: Returns Thread Array
    Scramjet Engine-->>Afterburner UI: Returns JSON Data
    Afterburner UI-->>User: Renders Beautiful Social Grid
```

## 📄 License
MIT © The Scramjet Team
