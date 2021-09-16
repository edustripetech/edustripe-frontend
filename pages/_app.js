import 'antd/dist/antd.css'
import '../public/styles/vars.css'
import '../public/styles/global.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Head>
        <ToastContainer />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}