// Collections configuration for Japanese Vocabulary Bingo
const collections = {
  'one-piece-z-movie': {
    title: 'One Piece - Z Movie',
    description: 'Essential vocabulary from One Piece Movie Z featuring common pronouns, nouns, verbs, and expressions used throughout the film.',
    wordCount: 60,
    difficulty: 'Intermediate',
    category: 'Movie',
    series: 'One Piece',
    dataFile: 'collections/one-piece-z-movie.js',
    thumbnail: null, // Can be added later
    tags: ['action', 'adventure', 'shounen']
  },
  'one-piece-episode-1': {
    title: 'One Piece - Episode 1',
    description: 'Vocabulary from the opening episode featuring Luffy\'s introduction and the beginning of his pirate journey.',
    wordCount: 205,
    difficulty: 'Beginner',
    category: 'Episode',
    series: 'One Piece',
    dataFile: 'collections/one-piece-episode-1.js',
    thumbnail: null,
    tags: ['introduction', 'adventure', 'shounen']
  }
};

// Helper function to get collection by ID
function getCollection(id) {
  return collections[id] || null;
}

// Helper function to get all collections
function getAllCollections() {
  return collections;
}

// Helper function to get collections by series
function getCollectionsBySeries(series) {
  return Object.entries(collections)
    .filter(([_, collection]) => collection.series === series)
    .reduce((acc, [id, collection]) => {
      acc[id] = collection;
      return acc;
    }, {});
}

// Helper function to get collections by difficulty
function getCollectionsByDifficulty(difficulty) {
  return Object.entries(collections)
    .filter(([_, collection]) => collection.difficulty === difficulty)
    .reduce((acc, [id, collection]) => {
      acc[id] = collection;
      return acc;
    }, {});
}