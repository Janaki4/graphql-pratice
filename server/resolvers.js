import { authors, games, reviews } from "./data.js";
import {GraphQLError} from 'graphql'

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
      const result = authors.find((el) => el.id === arg.id)
      if(!result)throw new GraphQLError("no author found" , {
        extensions:{code:'Not found'}
      })
      return result;
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

  Mutation:{
    deleteGame(_,arg){
      return games.filter(g=>g.id !== arg.id)
    },
    addGame(_,arg){
      const gamePayload = {
        ...arg.game,
        id:Math.floor(Math.random()*1000).toString(),
        // authorId:Math.floor(Math.random()*1000).toString(),
      }
      games.push(gamePayload)
      return gamePayload 
    }
  }

};
