import App  from 'next/app'
import Page from '../components/Page'


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Page>
                <Component />
            </Page>
        </div>
    
    )
}

export default MyApp