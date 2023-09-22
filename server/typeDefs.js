export const typeDefs = `#graphql
  type Author{
    id:ID!
    name:String
    age:Int
    games(id:ID):[Game]
    reviews(id:ID):[Review]
  }
  
  type Game{
    id:ID!
    title:String
    price:Int
    authorId:Int
    author:Author
    reviews(id:ID):[Review]
  }

  type Review{
    id:ID!
    body:String
    gameId:ID
    authorId:ID
    game(id:ID):Game
    author(id:ID):Author
  }

  type Query{
    authors:[Author!]!
    reviews:[Review]
    games:[Game]
    author(id:ID!):Author
    review(id:ID!):Review
    game(id:ID!):Game
  }

  type Mutation{
    deleteGame(id:ID!):[Game]
    addGame(game:addGamePayload):Game
  }

  input addGamePayload{
    title:String
    price:Int
    authorId:ID!
  }
`;
