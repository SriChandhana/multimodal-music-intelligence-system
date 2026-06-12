# 🎵 MMMD — Multimodal Music Intelligence System

An AI-powered multimodal music intelligence platform that identifies, analyzes, and enriches music information from **audio, text, and image inputs**. The system uses a custom MCP (Model Context Protocol) server to orchestrate multiple tools and external APIs, enabling intelligent music discovery, metadata enrichment, Indian classical music analysis, and contextual insights.

---

## ✨ Features

### 🎵 Audio-Based Music Recognition

* Song identification using ACRCloud audio fingerprinting
* Metadata extraction and enrichment
* Recognition confidence scoring

### 🔍 Text-Based Music Intelligence

* Natural language music queries
* Artist-based search with curated song recommendations
* Song metadata retrieval and enrichment

### 🖼️ Image-Based Music Recognition

* Claude Vision integration for music-related image understanding
* Multimodal analysis pipeline

### 🎼 Indian Classical Music Analysis

* Raaga detection and enrichment
* Taala and rasa analysis
* Composer and music system identification
* Carnatic music knowledge retrieval

### 🤖 Music Intelligence

* AI-generated song summaries
* Similar song recommendations
* Contextual song insights
* Metadata aggregation from multiple sources

---

## 🏗️ Architecture

```text
Input (Audio / Text / Image)
            │
            ▼
     Custom MCP Server
            │
            ▼
       Tool Router
   ┌────────┼────────┐
   │        │        │
   ▼        ▼        ▼
ACRCloud Spotify MusicBrainz
   │        │        │
   └────────┼────────┘
            ▼
 Metadata Aggregation
            ▼
 Music Intelligence Layer
            ▼
 Indian Music Analysis
            ▼
 Summary & Recommendations
            ▼
      Unified Response
```

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* TypeScript

### AI & Orchestration

* Claude API
* MCP (Model Context Protocol)
* ACRCloud

### External APIs

* Spotify API
* MusicBrainz API

---

## 🚀 Key Capabilities

* Multimodal music understanding through audio, text, and image inputs
* Custom MCP orchestration layer coordinating multiple intelligence tools
* Indian classical music enrichment beyond traditional music metadata systems
* Unified analysis pipeline combining external APIs with domain-specific knowledge bases
* Full-stack TypeScript architecture with modular service design

---

## 📸 Screenshots

### Home Page

<img width="1910" height="856" alt="image" src="https://github.com/user-attachments/assets/0a456212-311d-4f7a-b3c2-2c7d3f3ac263" />


### Audio Recognition

<img width="1855" height="846" alt="image" src="https://github.com/user-attachments/assets/5b04eab1-dde0-4abd-85a2-70bf14de6344" />


### Text Search

<img width="1905" height="862" alt="image" src="https://github.com/user-attachments/assets/78a32245-9ca0-4afa-be05-f2c1aec0dee4" />
<img width="1811" height="824" alt="image" src="https://github.com/user-attachments/assets/032eb860-6248-479c-a1f3-80c91a515ce8" />


### Indian Music Analysis

<img width="1906" height="835" alt="image" src="https://github.com/user-attachments/assets/f91ae6b1-a8b1-40bc-b8ac-86b2c295af89" />

<img width="1870" height="887" alt="image" src="https://github.com/user-attachments/assets/88205cda-b695-43de-8d0a-ec4c549f67b3" />

### Similar Song Recommendations
<img width="1896" height="846" alt="image" src="https://github.com/user-attachments/assets/bb339f16-cee5-4ab0-b488-89872775f669" />
<img width="1860" height="862" alt="image" src="https://github.com/user-attachments/assets/eacc7f5a-1ea0-4871-bd29-3483d83d70f6" />

### Artist Lookup
<img width="1919" height="853" alt="image" src="https://github.com/user-attachments/assets/7f832a51-9ed2-45b9-b64a-927a0a4a74a4" />
### AI summary

---

## ⚙️ Setup

### Clone Repository

```bash
git clone https://github.com/SriChandhana/multimodal-music-intelligence-system.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create:

```env
PORT=5000

ACR_HOST=
ACR_ACCESS_KEY=
ACR_ACCESS_SECRET=

SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

---

## 🔮 Future Enhancements

* Enhanced recommendation engine
* Expanded Indian classical music knowledge base
* Artist profile enrichment
* Advanced semantic music search
* Production deployment
