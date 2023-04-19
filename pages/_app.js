import Layout from '@/Components/Layout/Layout'
import { store } from '../app/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
