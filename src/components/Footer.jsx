import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { sendTrackEvent } from "@edx/frontend-platform/analytics";
import { ensureConfig, getConfig } from "@edx/frontend-platform/config";
import { AppContext } from "@edx/frontend-platform/react";
import { getFooterBranding } from "../data/api";
import FooterLink from "./FooterLink";

import messages from "./Footer.messages";
import LanguageSelector from "./LanguageSelector";
import "./footer.scss";

ensureConfig(["LOGO_TRADEMARK_URL"], "Footer component");

const EVENT_NAMES = {
  FOOTER_LINK: "edx.bi.footer.link",
};

function getLocalePrefix(locale) {
  const twoLetterPrefix = locale.substring(0, 2).toLowerCase();
  if (twoLetterPrefix === "en") {
    return "";
  }
  return `/${twoLetterPrefix}`;
}

function externalLinkClickHandler(event) {
  const label = event.currentTarget.getAttribute("href");
  const eventName = EVENT_NAMES.FOOTER_LINK;
  const properties = {
    category: "outbound_link",
    label,
  };
  sendTrackEvent(eventName, properties);
}

function renderLinks(links) {
  const length = links.length;
  return links.map((link, index) => {
    return (
      <>
        <FooterLink
          iconClass={link["icon-class"]}
          name={link.name}
          url={link.url}
          title={link.title}
        />
      </>
    );
  });
}

function SiteFooter(props) {
  const { supportedLanguages, onLanguageSelected, logo, intl } = props;
  const showLanguageSelector =
    supportedLanguages.length > 0 && onLanguageSelected;
  const { config } = useContext(AppContext);
  const [footerConfig, setFooterConfig] = useState(null);

  async function fetchFooter() {
    const branding = await getFooterBranding();
    setFooterConfig(branding.data);
  }
  useEffect(() => {
    fetchFooter();
  }, []);

  if (footerConfig === null) {
    return null;
  }

  return (
    <footer role="contentinfo" className="footer border-top pt-5 py-3 px-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {renderLinks(footerConfig.navigation_links)}
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            {renderLinks(footerConfig.social_links)}
          </div>
        </div>
        <div className="row">
          <div className="legal-links offset-md-6 col-md-6 col-sm-12 text-right">
            <span>
              {"\u00a9"} {getConfig().SITE_NAME}
            </span>

            <span>All rights reserved</span>
            {renderLinks(footerConfig.legal_links)}
          </div>
        </div>
        <div className="footer-separator"></div>

        <div className="row theme-copyright">
          <div className="col-md-6 col-sm-12">
            <span>THEME BY</span>
            <span>
              Theme licensed under the AGPLv3 License. Copyright 2021 by
              OpenCraft
            </span>
          </div>
          <div className="col-md-6 col-sm-12">
            <span>
              edX, Open edX and their respective logos are registered trademarks
              of edX Inc. Free online courses at edX.org
            </span>
          </div>
        </div>
        {showLanguageSelector && (
          <LanguageSelector
            options={supportedLanguages}
            onSubmit={onLanguageSelected}
          />
        )}
      </div>
    </footer>
  );
}

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
