'use client';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <main className="flex min-h-screen items-center justify-center px-6 py-16">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Application Error
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Something went wrong while rendering the page.
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Refresh the page or try rendering the route again. If the problem
              persists, inspect the terminal stack trace for the original error.
            </p>
            {error?.message ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">
                {error.message}
              </div>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Reload Page
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
