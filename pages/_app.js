import GlobalStyle from "../styles/globals"
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
