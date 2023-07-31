/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import Footer from './Footer';

const FooterWithContext = ({ locale = 'es' }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: {
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
      FOOTER_CUSTOM_STYLE: { color: 'black' },
      FOOTER_CUSTOM_CLASSNAMES: 'text-center',
      FOOTER_LOGO_STYLE: { color: 'white' },
      FOOTER_LINKS: [
        { url: 'https://openedx.org/terms-of-use/', text: 'Terms of service' },
        { url: 'https://openedx.org/code-of-conduct/', text: 'Code of conduct' },
        { url: 'https://openedx.org/privacy-policy/', text: 'Privacy Policy' },
      ],
      FOOTER_LINKS_CONTAINER_CLASSNAMES: 'flex-wrap',
      FOOTER_LINKS_CLASSNAMES: 'text-dark font-weight-bold',
    },
  }), []);

  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={contextValue}
      >
        <Footer />
      </AppContext.Provider>
    </IntlProvider>
  );
};

const FooterWithLanguageSelector = ({ languageSelected = () => {} }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: {
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
    },
  }), []);

  return (
    <IntlProvider locale="en">
      <AppContext.Provider
        value={contextValue}
      >
        <Footer
          onLanguageSelected={languageSelected}
          supportedLanguages={[
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
          ]}
        />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('<Footer />', () => {
  describe('renders correctly', () => {
    it('renders without a language selector', () => {
      const tree = renderer
        .create(<FooterWithContext locale="en" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders without a language selector in es', () => {
      const tree = renderer
        .create(<FooterWithContext locale="es" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with a language selector', () => {
      const tree = renderer
        .create(<FooterWithLanguageSelector />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles language switching', () => {
    it('calls onLanguageSelected prop when a language is changed', () => {
      const mockHandleLanguageSelected = jest.fn();
      const wrapper = mount(<FooterWithLanguageSelector languageSelected={mockHandleLanguageSelected} />);

      wrapper.find('form').simulate('submit', {
        target: {
          elements: {
            'site-footer-language-select': {
              value: 'es',
            },
          },
        },
      });

      expect(mockHandleLanguageSelected).toHaveBeenCalledWith('es');
    });
  });
});
