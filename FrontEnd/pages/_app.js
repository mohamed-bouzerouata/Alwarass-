import App  from 'next/app'
import Page from '../components/Page'
import ApolloClient from 'apollo-boost';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery} from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const client = new ApolloClient({
    uri: 'http://localhost:4000/',
});

const FETCH_dATA = gql`
    query {
        items {
            id
            title
            description
            image
            largeImage
            price
        }
    }
`
function FetchData() {
    const { loading, error, data } = useQuery(FETCH_dATA);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>

    return data.items.map(({ id, title }) =>  (
        <div key={id}>
            <p>
                {id} : {title   }
            </p>
        </div>
    ));
} 


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