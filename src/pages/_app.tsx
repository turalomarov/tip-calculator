import { Provider } from 'react-redux';
import store from '@app/redux/store';
import type { AppProps } from 'next/app';

import '@app/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
