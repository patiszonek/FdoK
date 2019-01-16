const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const graphqlResolver = require('./modules/graphqlResolver');
const { graphqlSchema } = require('./modules/graphqlSchema');
const { authenticate } = require('./middlewares/authentication');

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use(authenticate);
app.use('/graphql', graphqlHttp(
    {
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true
    }
));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = {
    app
};