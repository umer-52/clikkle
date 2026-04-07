import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
import { getUtmSourceForLink } from '$lib/utils/utm';

const DEFAULT_APPWRITE_DASHBOARD = 'https://cloud.appwrite.io';

export function getAppwriteDashboardUrl(path = ''): string {
    const utmParams = getUtmSourceForLink();
    const base = PUBLIC_APPWRITE_DASHBOARD?.trim() || DEFAULT_APPWRITE_DASHBOARD;
    const url = new URL(path, base);

    if (utmParams) {
        url.search = url.search ? `${url.search}&${utmParams}` : utmParams;
    }

    return url.toString();
}
