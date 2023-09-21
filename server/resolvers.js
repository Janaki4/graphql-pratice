import { authors, games, reviews } from "./data.js";

export const resolvers = {
  Query: {
    authors() {
      return authors;
    },
    games() {
      return games;
    },
    reviews: () => reviews,
    author: (_, arg) => {
      return authors.find((el) => el.id === arg.id);
    },
    review: (_, arg) => {
      return reviews.find((el) => el.id === arg.id);
    },
    game: (_, arg) => {
      return games.find((el) => el.id === arg.id);
    },
  },
  Review: {
    author(parent) {
      return authors.find((a) => a.id === parent.authorId);
    },
    game(parent) {
      return games.find((g) => g.id === parent.gameId);
    },
  },
  Author: {
    games(parent) {
      return games.filter((g) => g.authorId === parent.id);
    },
    reviews(parent) {
      return reviews.filter((r) => r.authorId === parent.id);
    },
  },
};
