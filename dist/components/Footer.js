function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig, getConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import { getFooterBranding } from '../data/api';
import FooterLink from './FooterLink';
import FooterLinks from './FooterLinks';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
ensureConfig(['LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};

function getLocalePrefix(locale) {
  var twoLetterPrefix = locale.substring(0, 2).toLowerCase();

  if (twoLetterPrefix === 'en') {
    return '';
  }

  return "/".concat(twoLetterPrefix);
}

function externalLinkClickHandler(event) {
  var label = event.currentTarget.getAttribute('href');
  var eventName = EVENT_NAMES.FOOTER_LINK;
  var properties = {
    category: 'outbound_link',
    label: label
  };
  sendTrackEvent(eventName, properties);
}

function SiteFooter(props) {
  var supportedLanguages = props.supportedLanguages,
      onLanguageSelected = props.onLanguageSelected,
      logo = props.logo,
      intl = props.intl;
  var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;

  var _useContext = useContext(AppContext),
      config = _useContext.config;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      footerConfig = _useState2[0],
      setFooterConfig = _useState2[1];

  function fetchFooter() {
    return _fetchFooter.apply(this, arguments);
  }

  function _fetchFooter() {
    _fetchFooter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var branding;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getFooterBranding();

            case 2:
              branding = _context.sent;
              setFooterConfig(branding.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchFooter.apply(this, arguments);
  }

  useEffect(function () {
    fetchFooter();
  }, []);

  if (footerConfig === null) {
    return null;
  }

  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    className: "footer border-top pt-5 py-3 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navigation-links col-lg-6 col-sm-12"
  }, /*#__PURE__*/React.createElement(FooterLinks, {
    links: footerConfig.navigation_links,
    spacer: /*#__PURE__*/React.createElement("span", {
      className: "px-3"
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "social-links col-lg-6 col-sm-12"
  }, /*#__PURE__*/React.createElement(FooterLinks, {
    links: footerConfig.social_links,
    spacer: /*#__PURE__*/React.createElement("span", {
      className: "px-3"
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legal-links offset-lg-6 col-lg-6 col-sm-12"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9", " ", getConfig().SITE_NAME), /*#__PURE__*/React.createElement("span", {
    className: "px-2"
  }, "|"), /*#__PURE__*/React.createElement("span", null, "All rights reserved"), /*#__PURE__*/React.createElement("span", {
    className: "px-2"
  }, "|"), /*#__PURE__*/React.createElement(FooterLinks, {
    links: footerConfig.legal_links,
    spacer: /*#__PURE__*/React.createElement("span", {
      className: "px-2"
    }, "|")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer-separator"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row theme-copyright"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 col-sm-12 copyright-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-logo opencraft-logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "copyright-text"
  }, intl.formatMessage(messages['footer.themeLicense']), /*#__PURE__*/React.createElement("br", null), intl.formatMessage(messages['footer.themeCopyright']))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 col-sm-12 copyright-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-logo edx-logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "copyright-text"
  }, intl.formatMessage(messages['footer.edxCopyright'])))), showLanguageSelector && /*#__PURE__*/React.createElement(LanguageSelector, {
    options: supportedLanguages,
    onSubmit: onLanguageSelected
  })));
}

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map