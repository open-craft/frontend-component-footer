import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faTwitter, faReddit, faFacebook, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTwitter, faReddit, faFacebook, faYoutube, faInstagram, faLinkedin);
export default function FooterLink(props) {
  var title = props.title,
      url = props.url,
      iconClass = props.iconClass;

  if (iconClass) {
    // Convert a icon name like "fa-reddit-square" to just "reddit"
    iconClass = iconClass.replace('fa-', '').replace('-square', '');
    return /*#__PURE__*/React.createElement("a", {
      title: title,
      href: url
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: ['fab', iconClass]
    }));
  } else {
    return /*#__PURE__*/React.createElement("a", {
      href: url
    }, title);
  }
}
FooterLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  iconClass: PropTypes.string
};
//# sourceMappingURL=FooterLink.js.map