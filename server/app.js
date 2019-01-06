const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://admin:adminpw01@ds149894.mlab.com:49894/gql-ninja');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => { 
    console.log('Listening port 4000');
}); 