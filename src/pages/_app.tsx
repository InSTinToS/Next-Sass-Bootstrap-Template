import '../styles/global.sass'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bootstrap.sass'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
