import React from 'react';
import FooterLink from './FooterLink';
import PropTypes from 'prop-types';
export default function FooterLinks(props) {
  var links = props.links,
      spacer = props.spacer;
  return links.map(function (link, index) {
    var isFirst = index == 0;
    var isLast = index - 1 == links.length;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, !(isFirst || isLast) ? spacer : null, /*#__PURE__*/React.createElement(FooterLink, {
      iconClass: link['icon-class'],
      name: link.name,
      url: link.url,
      title: link.title
    }));
  });
}
FooterLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    iconClass: PropTypes.string
  }))
};
//# sourceMappingURL=FooterLinks.js.map