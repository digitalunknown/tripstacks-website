import { APP_STORE_URL } from "@/lib/site";

const FEATURES = [
  {
    src: "/feature-1.png",
    eyebrow: "Trips",
    title: "Upcoming, past, and unscheduled — all stacked.",
    body: "Create trips in seconds, then keep every one organized as it moves from idea to itinerary to memory.",
    alt: "TripStacks trips list with upcoming, past, and unscheduled trips",
  },
  {
    src: "/feature-2.png",
    eyebrow: "Plan",
    title: "AI that plans the day and finds the places.",
    body: "Describe the vibe. TripStacks builds itineraries and suggests places that actually fit how you travel.",
    alt: "TripStacks AI trip planning screen",
  },
  {
    src: "/feature-3.png",
    eyebrow: "Essentials",
    title: "Everything you need, in one place.",
    body: "Maps, packing lists, reservations, and the details that matter — sitting with the trip, not scattered across apps.",
    alt: "TripStacks trip essentials and itinerary",
  },
  {
    src: "/feature-4.png",
    eyebrow: "Profile",
    title: "A travel profile that grows with you.",
    body: "Track your stats, unlock badges, and watch your trips add up into a profile that’s actually yours.",
    alt: "TripStacks travel profile, stats, and badges",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <h1>TripStacks is the simplest way to plan, organize, and remember your trips</h1>
          <p>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Be the first to try it. Plan a trip today.
            </a>
          </p>
          <div className="store-wrap">
            <a
              className="store-badge"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="screens" aria-label="TripStacks app screens">
        <img src="/hero-1.png" alt="TripStacks app screens showing trips, planning, and itinerary views" />
      </section>

      <section className="feature-grid" aria-label="TripStacks features">
        {FEATURES.map((feature) => (
          <article className="feature" key={feature.src}>
            <div className="feature-copy">
              <p className="feature-eyebrow">{feature.eyebrow}</p>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </div>
            <div className="feature-visual">
              <img src={feature.src} alt={feature.alt} width={1080} height={1620} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
