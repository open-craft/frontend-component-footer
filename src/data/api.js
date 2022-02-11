import { getConfig } from '@edx/frontend-platform';
import { getHttpClient } from '@edx/frontend-platform/auth';
const clientOptions = {
  headers: { accept: 'application/json' },
};

export function getFooterBranding(courseId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/branding/v1/footer`);
  return getHttpClient().get(url.href, clientOptions);
}
