const authors = [
  { id: "1", name: "John Smith", age: 30 },
  { id: "2", name: "Alice Johnson", age: 25 },
  { id: "3", name: "Michael Brown", age: 35 },
];

const games = [
  { id: "1", title: "The Adventures of Destiny", price: 50, authorId: "1" },
  { id: "2", title: "Space Explorers", price: 40, authorId: "2" },
  { id: "3", title: "Mystic Quest", price: 60, authorId: "1" },
  { id: "4", title: "Castle Defense", price: 45, authorId: "3" },
];

const reviews = [
  { id: "1", body: "This game is amazing!", gameId: "1", authorId: "2" },
  {
    id: "2",
    body: "I love the storyline in this game.",
    gameId: "2",
    authorId: "1",
  },
  { id: "3", body: "Highly recommended!", gameId: "3", authorId: "3" },
  { id: "4", body: "Great graphics and gameplay.", gameId: "1", authorId: "3" },
  { id: "5", body: "Addictive gameplay!", gameId: "4", authorId: "2" },
];

// You can export these dummy data arrays for use in your GraphQL resolvers.
export { authors, games, reviews };
