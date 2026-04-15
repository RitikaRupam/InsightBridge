const natural = require("natural");
const TfIdf = natural.TfIdf;

function cosineSimilarity(vecA, vecB) {
  let dot = 0,
    magA = 0,
    magB = 0;

  for (let key in vecA) {
    if (vecB[key]) dot += vecA[key] * vecB[key];
    magA += vecA[key] * vecA[key];
  }

  for (let key in vecB) {
    magB += vecB[key] * vecB[key];
  }

  return dot / (Math.sqrt(magA) * Math.sqrt(magB) || 1);
}

function buildVector(tfidf, i) {
  const vector = {};
  tfidf.listTerms(i).forEach((item) => {
    vector[item.term] = item.tfidf;
  });
  return vector;
}

function clusterFeedback(feedbacks) {
  const tfidf = new TfIdf();
  feedbacks.forEach((f) => tfidf.addDocument(f));

  const clusters = [];

  feedbacks.forEach((text, i) => {
    const vecA = buildVector(tfidf, i);
    let added = false;

    for (let cluster of clusters) {
      const sim = cosineSimilarity(vecA, cluster.vector);

      if (sim > 0.2) {
        cluster.items.push(text);
        added = true;
        break;
      }
    }

    if (!added) {
      clusters.push({ vector: vecA, items: [text] });
    }
  });

  return clusters;
}

module.exports = { clusterFeedback };
