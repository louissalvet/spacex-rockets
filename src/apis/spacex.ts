import ApolloClient from 'apollo-boost'

const uri = process.env['REACT_APP_SPACEX_GRAPHQL_ENDPOINT']
const spacexClient = new ApolloClient({ uri })

export default spacexClient
