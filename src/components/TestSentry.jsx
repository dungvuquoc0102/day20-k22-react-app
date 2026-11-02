import * as Sentry from "@sentry/react";

function TestSentry() {
  const sendError = () => {
    Sentry.captureException(new Error("SENTRY_MANUAL_TEST"));

    Sentry.flush(2000).then((result) => {
      console.log("Sentry flush:", result);
    });
  };

  return <button onClick={sendError}>Send test error</button>;
}

export default TestSentry;
