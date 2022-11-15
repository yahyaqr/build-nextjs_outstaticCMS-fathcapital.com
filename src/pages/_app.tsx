import { AppProps } from 'next/app'
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
