# MMMD — Multimodal Music Intelligence System

An agentic AI system with a custom MCP server orchestrating 
7 AI tools across production APIs — supporting audio, text, 
and image inputs for music identification, analysis, and 
intelligent recommendations.

> Architecture mirrors Agentforce's agent-tool paradigm — 
> built with real tool-calling pipelines, not just API calls.

---

## Features
- 🎵 Audio-based song identification via ACRCloud fingerprinting
- 🔍 Text-based music search with LLM reasoning
- 🎼 Indian classical raaga detection and analysis
- 📊 Metadata enrichment via Spotify + MusicBrainz
- 🤖 Similar song recommendations powered by Claude API
- 📝 Song summary and composer credit analysis
- 🖼️ Claude Vision integration for image-based recognition

---

## Architecture

Input (Audio / Text / Image)
        ↓
Custom MCP Server (7 AI Tools)
        ↓
Tool Router → Spotify API | MusicBrainz API | ACRCloud API
        ↓
Music Intelligence Layer (LLM Reasoning + Raaga Analysis)
        ↓
Response Generator

---

## Tech Stack

**Frontend:** React, TypeScript, Vite  
**Backend:** Node.js, Express, TypeScript  
**AI & Orchestration:** Claude API, MCP, ACRCloud  
**APIs:** Spotify API, MusicBrainz API  

---

## What Makes This Different

- Custom MCP server with 7 registered tools — not a wrapper, 
  a full orchestration layer
- Multimodal by design — same pipeline handles audio, text, 
  and image inputs
- Indian classical music support — raaga detection beyond 
  Western music metadata
