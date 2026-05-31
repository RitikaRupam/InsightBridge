# 🚀 InsightBridge - AI-Powered Feedback Intelligence Platform

> Transform raw customer feedback into actionable product insights using NLP, AI-assisted clustering, and interactive analytics.

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![NLP](https://img.shields.io/badge/NLP-Natural.js-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

InsightBridge is an AI-powered feedback analysis platform that automatically processes customer feedback, identifies recurring issues, prioritizes them based on impact, and visualizes insights through an intuitive dashboard.

Instead of manually reviewing hundreds of feedback entries, product teams can upload a CSV file and instantly discover:

* 🔍 Frequently reported issues
* 📊 Product improvement opportunities
* 🚨 High-priority customer concerns
* 📈 Feedback trends and patterns

---

## ✨ Key Features

### 🧠 AI-Assisted Feedback Clustering

* Natural Language Processing (NLP)
* Tokenization
* Stopword Removal
* Stemming
* TF-IDF Vectorization
* Cosine Similarity-Based Clustering

### 📊 Interactive Dashboard

* Feedback Analytics
* Priority-Based Issue Cards
* Search & Filtering
* Visual Charts

### ⚡ Automated Prioritization

Issues are automatically classified as:

* 🔴 High Priority
* 🟠 Medium Priority
* 🟢 Low Priority

Based on frequency and occurrence patterns.

### 📂 CSV Upload Support

Upload customer feedback directly from CSV files.

---

# 🏗️ System Architecture

```text
CSV Upload
    │
    ▼
React Frontend
    │
    ▼
Express API
    │
    ▼
CSV Parser
    │
    ▼
NLP Processing
(Tokenization + Stemming)
    │
    ▼
TF-IDF Vectorization
    │
    ▼
Cosine Similarity
    │
    ▼
Feedback Clustering
    │
    ▼
Priority Scoring
    │
    ▼
Dashboard Visualization
```

---

# 🧠 How AI Is Used

InsightBridge leverages Natural Language Processing (NLP) and unsupervised learning techniques to automatically group similar feedback.

### NLP Pipeline

Example Feedback:

```text
Application performance is slow
```

Processing Steps:

```text
Tokenization
↓
["application","performance","slow"]

Stopword Removal
↓
["application","performance","slow"]

Stemming
↓
["applic","perform","slow"]
```

### TF-IDF Vectorization

Feedback text is converted into numerical vectors that represent word importance.

### Cosine Similarity

Measures similarity between feedback entries:

```text
"Login not working"
"Login fails frequently"
```

These feedbacks are grouped into the same cluster because their vector similarity exceeds the threshold.

---

# 📂 Project Structure

```bash
insightbridge
│
├── backend
│   ├── routes
│   │   └── feedbackRoutes.js
│   │
│   ├── services
│   │   ├── clusteringService.js
│   │   ├── nlpService.js
│   │   └── priorityService.js
│   │
│   ├── utils
│   │   └── fileParser.js
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Upload.js
│   │   │   ├── Dashboard.js
│   │   │   └── ChartView.js
│   │   │
│   │   ├── App.js
│   │   └── styles.css
│   │
│   └── public
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/InsightBridge.git
cd InsightBridge
```

---

## Backend Setup

```bash
cd backend

npm install

node server.js
```

Backend starts on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend starts on:

```text
http://localhost:3000
```

---

# 📄 Sample CSV

```csv
feedback
App is slow
Login not working
Application performance is slow
Login issue again
Payment failed
Payment failure observed
```

---

# 📈 Example Output

```json
[
  {
    "issue": "login issue",
    "count": 3,
    "priority": "High"
  },
  {
    "issue": "performance issue",
    "count": 2,
    "priority": "Medium"
  }
]
```

---

# 🎯 Business Impact

✅ Reduces manual feedback analysis effort

✅ Automatically identifies recurring product issues

✅ Helps product teams prioritize feature development

✅ Converts unstructured feedback into actionable insights

---

# 🚀 Future Enhancements

* Sentiment Analysis
* GPT-Powered Feedback Summarization
* Semantic Clustering using BERT Embeddings
* Real-Time Feedback Processing
* User Authentication & Role Management
* Trend Analysis Dashboard
* Multi-Language Feedback Support

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Chart.js

### Backend

* Node.js
* Express.js

### AI / NLP

* Natural.js
* TF-IDF
* Cosine Similarity

### Data Processing

* CSV Parser

---

# 👨‍💻 Author

**Ritika Rupam**

Built to demonstrate practical application of NLP, AI-assisted clustering, and full-stack development for feedback intelligence systems.

---

⭐ If you found this project interesting, consider giving it a star!
