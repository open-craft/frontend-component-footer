import React from 'react';
import FooterLink from './FooterLink';
import PropTypes from 'prop-types';

export default function FooterLinks(props) {
  const { links, spacer } = props;

  return links.map((link, index) => {
    const isFirst = index == 0;
    const isLast = index - 1 == links.length;
    return (
      <React.Fragment key={index}>
        {!(isFirst || isLast) ? spacer : null}
        <FooterLink
          iconClass={link['icon-class']}
          name={link.name}
          url={link.url}
          title={link.title}
        />
      </React.Fragment>
    );
  });
}

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      iconClass: PropTypes.string,
    })
  ),
};
