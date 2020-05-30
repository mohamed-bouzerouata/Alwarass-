const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        hello : String!
    }
`
const resolvers = { 
    Query: {
        hello: (_, args, context, info) => {
            return 'hello world'
        },
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('server is running on localhost: 4000'))