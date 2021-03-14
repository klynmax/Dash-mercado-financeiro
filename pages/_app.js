import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from './../components/layout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
