import { useEffect } from "react";
import { useFetcher } from "react-router";

export default function SignupForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const success = fetcher.data?.success;
  const error = fetcher.data?.error;

  useEffect(() => {
    if (fetcher.data?.success) {
      gtag("event", "newsletter_signup");
    }
  }, [fetcher.data]);

  if (success) {
    return <p className="font-mono text-sm text-gray-400">Thanks — you're on the list.</p>;
  }

  return (
    <fetcher.Form method="post" className="flex flex-col gap-1 md:items-end">
      <label htmlFor="signup-email" className="font-mono text-sm text-gray-400">
        New work and shows, a few times a year.
      </label>
      <div className="flex items-center gap-2">
        <input type="hidden" name="intent" value="newsletter_signup" />
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="border border-black/20 px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-black transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-mono text-sm bg-black text-white px-3 py-1.5 hover:opacity-70 transition-opacity disabled:opacity-40"
        >
          {isSubmitting ? "…" : "Sign up"}
        </button>
      </div>
      {error && <p className="font-mono text-sm text-red-500">{error}</p>}
    </fetcher.Form>
  );
}
