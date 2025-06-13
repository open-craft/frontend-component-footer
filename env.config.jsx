// eslint-disable-next-line no-unused-vars",

import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const OpenCraftFooter = () => (
  <>
  <footer className="opencraft-footer py-5 px-5">
       <div className={'d-flex pb-3 flex-column flex-md-row'}>
            <div className={"text-center"}>
                 <img alt="OpenCraft Logo" className="opencraft-logo pt-1" src="https://opencraft.com/wp-content/uploads/opencraft-logo.png"/>
            </div>
            <div className={"pr-5 d-none d-md-block"}></div>
            <div className={"pt-3 d-block d-md-none"}></div>
            <div className={"align-self-top text-center text-md-left"}>
                 Hosted by <a href="https://opencraft.com/">OpenCraft.</a><br />
                 A verified Open edX&reg; partner.
            </div>
       </div>
       <hr />
       <div className={"text-center text-md-left"}><small>&copy; OpenCraft 2025  |  edX and Open edX&reg; are trademarks of edX Inc</small></div>
  </footer>
  </>
)

const config = {
     ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
     ACCOUNT_PROFILE_URL: "http://local.openedx.io:1995",
     ACCOUNT_SETTINGS_URL: "http://local.openedx.io:1997",
     BASE_URL: "local.openedx.io:8080",
     CREDENTIALS_BASE_URL: "http://local.openedx.io:18150",
     CSRF_TOKEN_API_PATH: "/csrf/api/v1/token",
     ECOMMERCE_BASE_URL: "http://local.openedx.io:18130",
     LANGUAGE_PREFERENCE_COOKIE_NAME: "openedx-language-preference",
     LMS_BASE_URL: "http://local.openedx.io:8000",
     STUDIO_BASE_URL: "http://studio.local.openedx.io:8001",
     LOGIN_URL: "http://local.openedx.io:8000/login",
     LOGOUT_URL: "http://local.openedx.io:8000/logout",
     MARKETING_SITE_BASE_URL: "http://local.openedx.io:8000",
     ORDER_HISTORY_URL: "localhost:1996/orders",
     REFRESH_ACCESS_TOKEN_ENDPOINT: "http://local.openedx.io:8000/login_refresh",
     SEGMENT_KEY: "null",
     SITE_NAME: "Open edX",
     USER_INFO_COOKIE_NAME: "edx-user-info",
     LOGO_URL: "/brand-openedx/logo.svg",
     LOGO_TRADEMARK_URL: "/brand-openedx/logo-trademark.svg",
     LOGO_WHITE_URL: "/brand-openedx/logo-white.svg",
     FAVICON_URL: "https://edx-cdn.org/v3/default/favicon.ico",
     pluginSlots: {
          'org.openedx.frontend.layout.footer.v1': {
               plugins: [
                    {
                         // Hide the default footer
                         op: PLUGIN_OPERATIONS.Hide,
                         widgetId: 'default_contents',
                    },
                    {
                         // Insert a custom footer
                         op: PLUGIN_OPERATIONS.Insert,
                         widget: {
                              id: 'custom_footer',
                              type: DIRECT_PLUGIN,
                              RenderWidget: OpenCraftFooter,
                         },
                    },
               ]
          }
     },
};

export default config;
