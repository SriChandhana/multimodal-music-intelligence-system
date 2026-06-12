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

*Coming Soon*

### Indian Music Analysis

*Coming Soon*

### Similar Song Recommendations

*Coming Soon*

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
