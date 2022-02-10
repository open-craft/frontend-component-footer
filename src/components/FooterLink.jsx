import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faReddit,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
    iconClass = iconClass.replace("fa-", "").replace("-square", "");
    return (
      <a title={title} href={url}>
        <FontAwesomeIcon icon={["fab", iconClass]} />
      </a>
    );
  } else {
    return <a href={url}>{title}</a>;
  }
}
