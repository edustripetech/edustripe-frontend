import 'antd/dist/antd.css'
import '../public/styles/vars.css'
import '../public/styles/global.css'
import Head from 'next/head';

import { getToken } from '../api/helpers';
import {wrapper} from '../store/store.js';

function MyApp ({ Component, pageProps }) {
  return (
    <div className="app-container">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {/* {
          getToken() ? <Component {...pageProps} /> : <Component {...pageProps} /> 
        } */}
        <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
