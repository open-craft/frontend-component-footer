import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import {
  faTwitter,
  faReddit,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faTwitter,
  faReddit,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin
);

export default function FooterLink(props) {
  let { title, url, iconClass } = props;

  if (iconClass) {
    // Convert a icon name like "fa-reddit-square" to just "reddit"
    iconClass = iconClass.replace('fa-', '').replace('-square', '');
    return (
      <a title={title} href={url}>
        <FontAwesomeIcon icon={['fab', iconClass]} />
      </a>
    );
  } else {
    return <a href={url}>{title}</a>;
  }
}

FooterLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  iconClass: PropTypes.string,
};
