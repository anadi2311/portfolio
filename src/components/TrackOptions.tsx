import Link from "next/link";

type Track = {
  name: string;
  price: string;
  priceNote?: string;
  audience: string;
  includes: string[];
  cta?: { label: string; href: string };
  status?: string;
};

const tracks: Track[] = [
  {
    name: "Product management",
    price: "Free",
    audience:
      "Engineers and anyone building PM fundamentals from the ground up.",
    includes: [
      "Product management and leadership",
      "PLG vs sales-led and other GTM models",
      "Hypothesis testing and experiments",
      "Product analytics and go-to-market",
      "Pricing and packaging",
      "Website design, branding, and vision briefs",
      "Figma basics and front-end lingo for working with designers",
    ],
    cta: { label: "Start lesson 1", href: "/learn/product/how-pm-begins" },
  },
  {
    name: "Product engineering",
    price: "Paid",
    priceNote: "Cost only. Covers hosting. No profit.",
    audience: "PMs who need technical depth to partner with engineering.",
    includes: [
      "Frontend: how apps are built and shipped",
      "APIs and how services talk",
      "Auth, SSL/TLS, and identity",
      "Platform engineering: deploy on GCP",
      "Docker, Kubernetes, and VPC networking",
      "Kafka and ClickHouse for analytics pipelines",
      "Terraform, Helm, Git, and CI/CD",
    ],
    status: "Opens after the PM spine. Payments not live yet.",
  },
];

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex gap-2.5 text-sm leading-6 text-zinc-400">
      <span className="mt-0.5 shrink-0 text-zinc-500" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function TrackColumn({ track }: { track: Track }) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-zinc-950 px-6 py-8 text-zinc-100 sm:px-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight">{track.name}</h2>
        <p className="text-lg text-zinc-400">{track.price}</p>
        {track.priceNote ? (
          <p className="text-sm text-zinc-500">{track.priceNote}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-zinc-500">Includes:</p>
        <ul className="flex flex-col gap-2">
          {track.includes.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-zinc-500">Who it&apos;s for</p>
        <p className="text-sm leading-6 text-zinc-400">{track.audience}</p>
      </div>

      {track.cta ? (
        <Link
          href={track.cta.href}
          className="mt-auto inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
        >
          {track.cta.label}
        </Link>
      ) : (
        <p className="mt-auto text-sm text-zinc-500">{track.status}</p>
      )}
    </article>
  );
}

export function TrackOptions() {
  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-5">
      {tracks.map((track) => (
        <TrackColumn key={track.name} track={track} />
      ))}
    </section>
  );
}
