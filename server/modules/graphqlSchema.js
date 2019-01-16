const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`
    type User {
        _id: ID!
        nip: String!
        password: String!
    }

    type BankAccount {
        accountNumber: String!
        bank: String!
        description: String!
    }
`);

module.exports = {
    graphqlSchema
}