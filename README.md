# MMMD — Multimodal Music Intelligence System

An AI-powered multimodal music intelligence platform that identifies, analyzes, and enriches music information from audio, text, and image inputs. The system uses a custom MCP (Model Context Protocol) server to orchestrate multiple tools and external APIs, enabling intelligent music discovery, metadata enrichment, Indian classical music analysis, and contextual insights.

## Features

* 🎵 Audio-based song identification using ACRCloud audio fingerprinting
* 🔍 Text-based music search and intelligent query processing
* 🖼️ Image-based music recognition using Claude Vision
* 🎼 Indian classical music analysis with raaga, taala, rasa, and composer enrichment
* 📊 Metadata aggregation from Spotify and MusicBrainz APIs
* 🤖 Similar song recommendations and contextual music discovery
* 📝 AI-generated song summaries and music insights
* 👥 Artist-based search with curated song recommendations
* 🔗 MCP-based orchestration layer coordinating multiple music intelligence tools

## Architecture

Input (Audio / Text / Image)

↓

Custom MCP Server

↓

Tool Router

├── ACRCloud

├── Spotify API

├── MusicBrainz API

├── Claude Vision

├── Music Intelligence Services

↓

Metadata Aggregation & Classification

↓

Indian Music Analysis & Knowledge Retrieval

↓

Summary Generation & Recommendations

↓

Unified Response

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* TypeScript

### AI & Intelligence

* Claude API
* MCP (Model Context Protocol)
* ACRCloud

### External APIs

* Spotify API
* MusicBrainz API

## What Makes This Different

* Built around a custom MCP orchestration layer rather than isolated API calls
* Supports multimodal inputs through a unified intelligence pipeline
* Combines Western music metadata with Indian classical music knowledge systems
* Integrates multiple external services into a single music intelligence platform
* Provides enriched analysis, recommendations, and contextual insights beyond simple song identification
