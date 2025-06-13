import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, getConfig, subscribe, APP_READY } from '@edx/frontend-platform';
import { AppContext, AppProvider } from '@edx/frontend-platform/react';

import './index.scss';
import FooterSlot from '../src/plugin-slots/FooterSlot';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <AppContext.Provider value={{
        authenticatedUser: null,
        config: getConfig(),
      }}>
        <FooterSlot
          onLanguageSelected={() => {}}
          supportedLanguages={[
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
          ]}
        />
      </AppContext.Provider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

initialize({
  messages: []
});
