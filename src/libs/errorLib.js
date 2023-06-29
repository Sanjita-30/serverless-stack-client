import * as Sentry from "@sentry/browser";
const isLocal = process.env.NODE_ENV === "development";
export function initSentry()
if (isLocal) {
    return;
    }
    Sentry.init({ dsn: "https://e4b535b1f0ad49039b509dff826341a5@o4505441627013120.ingest.sentry.io/4505441658208256" });

    export function logError(error, errorInfo = null) {
    if (isLocal) {
    return;
    }
    Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
    });
    }

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();
    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
        }
        logError(error, errorInfo);

    alert(message);
}