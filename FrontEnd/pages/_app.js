import App  from 'next/app'
import Page from '../components/Page'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'apollo/react-hooks'

const client = new ApolloClient({
    uri : 'localhost:4000'
})

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Page>
                <Component />
            </Page>
        </ApolloProvider>
    
    )
}

export default MyApp