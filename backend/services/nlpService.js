const natural = require("natural");

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

function processText(text) {
  const tokens = tokenizer.tokenize(text.toLowerCase());

  const stopwords = ["is", "the", "not", "again", "very"];

  const filtered = tokens.filter((t) => t.length > 2 && !stopwords.includes(t));

  // ✅ Clean version (for UI)
  const cleanText = filtered.join(" ");

  // ✅ Stemmed version (for ML)
  const stemmed = filtered.map((t) => stemmer.stem(t));
  const processedText = stemmed.join(" ");

  return {
    clean: cleanText,
    processed: processedText,
  };
}

module.exports = { processText };
