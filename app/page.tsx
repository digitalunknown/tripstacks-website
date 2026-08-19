import { APP_STORE_URL } from "@/lib/site";

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
                width={245}
                height={82}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="screens" aria-label="TripStacks app screens">
        <img src="/screens.png" alt="TripStacks app screens showing trips and itinerary views" />
      </section>
    </main>
  );
}
