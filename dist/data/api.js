import { getConfig } from '@edx/frontend-platform';
import { getHttpClient } from '@edx/frontend-platform/auth';
var clientOptions = {
  headers: {
    accept: 'application/json'
  }
};
export function getFooterBranding() {
  var url = new URL("".concat(getConfig().LMS_BASE_URL, "/api/branding/v1/footer"));
  return getHttpClient().get(url.href, clientOptions);
}
//# sourceMappingURL=api.js.map