import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech lessons waitlist — Anadi Pandharkar",
  description:
    "Join the waitlist for free tech-for-PMs lessons on this live product. No paywall yet — demand first.",
};

export default function WaitlistPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-8 px-6 py-16">
      <p className="text-sm text-zinc-500">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <span className="mx-2 text-zinc-300">/</span>
        Waitlist
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Tech lessons waitlist
      </h1>
      <p className="leading-7 text-zinc-600">
        Free tech depth for PMs who need stack literacy — reviews, timelines,
        MVPs/POCs — taught on this product. Lessons are not live yet. This list
        is the demand signal before we write them.
      </p>
      <form
        className="flex flex-col gap-4"
        action="mailto:anadi.pandharkar5@gmail.com"
        method="get"
        encType="text/plain"
      >
        <input type="hidden" name="subject" value="Tech lessons waitlist" />
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-zinc-900">Email</span>
          <input
            required
            type="email"
            name="body"
            placeholder="you@company.com"
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-fit rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Join waitlist
        </button>
        <p className="text-xs leading-5 text-zinc-500">
          Opens your email client with a short note. No account, no payment. A
          proper form store comes when traffic warrants it.
        </p>
      </form>
      <p className="text-sm text-zinc-600">
        Meanwhile, the{" "}
        <Link
          href="/learn/product/how-pm-begins"
          className="underline decoration-zinc-300 underline-offset-4 hover:text-black"
        >
          free PM spine
        </Link>{" "}
        is live.
      </p>
    </main>
  );
}
