import React from "react";

export default function FooterLink(props) {
  const { title, url, iconClass } = props;

  let paddingClass = "px-3";

  if (iconClass) {
    paddingClass = "px-1";
  }

  if (iconClass) {
    return (
      <a className={paddingClass} title={title} href={url}>
        <i className={`fa ${iconClass}`} />
        {title[0]}
      </a>
    );
  } else {
    return (
      <a className={paddingClass} href={url}>
        {title}
      </a>
    );
  }
}
