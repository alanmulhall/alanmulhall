import LogRocket from "logrocket";

let started = false;

/**
 * Initialize LogRocket session recording. No-ops during SSR, when no app id is
 * configured (e.g. local dev without VITE_LOGROCKET_APP_ID), or if already
 * started — so it is safe to call from an effect that may run more than once.
 */
export function initLogRocket(appId: string | undefined): void {
  if (started || typeof window === "undefined" || !appId) {
    return;
  }
  LogRocket.init(appId);
  started = true;
}
