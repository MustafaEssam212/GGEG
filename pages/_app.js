import '../styles/main.css'
import Layout1 from '../Layouts/Layout'
import Layout2 from '../Layouts/Layout2'
import Head from 'next/head'
import { AppProvider } from '../Components/contextApi'

function MyApp({ Component, pageProps }) {

  const layouts = {
    'L1': Layout1,
    'L2': Layout2
  }

  const Layout = layouts[Component.layout];

  return(
  
      <AppProvider>
        <Layout>

          <Head>
               <link rel="icon" href="/icon1.png"/>
          </Head>

          <Component {...pageProps} />
        </Layout>
      </AppProvider>
   
  )
}

export default MyApp
