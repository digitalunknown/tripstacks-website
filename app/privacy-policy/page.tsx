import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The best way to plan, organize, and remember your trips.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <article className="policy">
        <header className="policy-hero">
          <p className="policy-updated">Updated on August 19, 2026</p>
          <h1>Privacy policy</h1>
        </header>

        <div className="policy-body">
          <h2>Summary</h2>
          <p>
            TripStacks is built local-first. You can use the app without creating
            an account, and your trips, places, photos, checklists, and
            preferences are stored on your device by default. We do not sell
            your personal information, and we do not run a TripStacks user
            database of itineraries.
          </p>
          <p>Optional features may send limited data off-device when you use them:</p>
          <ul>
            <li>
              <strong>AI suggestions</strong> (Plan Day, Find Places, Create Trip)
              go through our lightweight AI proxy to Google Gemini
            </li>
            <li>
              <strong>Sign in with Apple</strong> enables iCloud sync via your
              Apple ID / iCloud account
            </li>
            <li>
              <strong>Location</strong> (optional) powers “near you” suggestions
            </li>
            <li>
              <strong>Apple Maps / MapKit</strong> resolves places and map
              imagery on device with Apple
            </li>
            <li>
              <strong>Unsplash</strong> may be used when you choose cover photos
            </li>
          </ul>
          <p>
            These services only receive what’s needed for the feature you
            invoked, and that data is not used by TripStacks to build a
            marketing profile.
          </p>

          <h2>What we store on your device</h2>
          <p>
            TripStacks stores your travel data locally on your iPhone/iPad,
            including:
          </p>
          <ul>
            <li>Trips, days, activities, travel, reminders, and checklists</li>
            <li>Saved Places and related notes/photos</li>
            <li>
              Optional food preferences, drink preferences, and interests used
              for AI personalization
            </li>
            <li>App settings (for example appearance and map style)</li>
          </ul>
          <p>
            If you never sign in and never use optional network features, this
            data stays on your device.
          </p>

          <h2>AI features (Plan Day, Find Places, Create Trip)</h2>
          <p>
            To generate suggestions, TripStacks sends a request to our AI proxy
            (/api/ai, hosted on our cloud provider), which forwards it to Google
            Gemini and returns the result to the app.
          </p>
          <p>Depending on the feature, a request may include:</p>
          <ul>
            <li>
              Your prompt or selected shortcut (for example “Best of Toronto” or
              “Plan a weekend near you”)
            </li>
            <li>
              Preferences you saved in the app (food, interests, alcohol
              preference)
            </li>
            <li>
              Limited trip context (destination, dates or unscheduled day count,
              rough map area) when relevant
            </li>
            <li>
              Short summaries of existing places or trips, used only to
              personalize and avoid duplicates
            </li>
            <li>
              Approximate location label/coordinates when you explicitly use a
              “near you” flow
            </li>
          </ul>
          <p>
            We design these requests to include travel-planning context, not
            account credentials. AI responses are shown in the app for you to
            review, edit, save, or discard. TripStacks does not keep a permanent
            archive of your prompts or AI results on our own servers as a user
            profile; the proxy exists to call Gemini securely (including
            protecting API keys) and return suggestions to your device.
          </p>
          <p>
            Google’s processing of prompts is governed by Google’s terms and
            privacy policy for the Gemini API.
          </p>

          <h2>How AI data travels</h2>
          <ol>
            <li>
              <strong>On device:</strong> The app assembles your prompt, optional
              preferences, and relevant local context.
            </li>
            <li>
              <strong>Encrypted request:</strong> That payload is sent over HTTPS
              to our AI proxy.
            </li>
            <li>
              <strong>Model call:</strong> The proxy sends the request to Google
              Gemini and receives structured suggestions.
            </li>
            <li>
              <strong>Return to device:</strong> Results are returned to the app
              for display. Saving anything (a place, trip draft, or day items)
              happens locally (and in iCloud only if you are signed in and
              syncing).
            </li>
          </ol>
          <p>
            Map matching, Look Around / map snapshots, and Apple Maps previews
            are handled with Apple MapKit on your device (and Apple’s map
            services), not by uploading your full itinerary to TripStacks.
          </p>

          <h2>Location</h2>
          <p>
            If you allow Location access, TripStacks may use your approximate
            current location only for features that need it (for example “near
            you” place or trip suggestions). You can deny or revoke Location
            access in iOS Settings; those features will be unavailable, and the
            rest of the app continues to work.
          </p>

          <h2>Maps and place imagery</h2>
          <p>
            When you search for or refine places, TripStacks may use Apple Maps /
            MapKit to look up addresses, coordinates, routes, and optional Look
            Around or map snapshot imagery. That processing is provided by Apple
            under Apple’s privacy terms.
          </p>

          <h2>Cover photos (Unsplash)</h2>
          <p>
            If you choose a cover image from Unsplash (or the app fetches a
            destination cover), a search/download request is made to Unsplash.
            Unsplash’s privacy policy applies to that service. Photos you attach
            yourself remain in your local (and, if signed in, iCloud) trip/place
            data.
          </p>

          <h2>Sign in with Apple and iCloud sync</h2>
          <p>
            Sign in with Apple is optional and is used to enable iCloud sync for
            your TripStacks data.
          </p>
          <p>If you sign in, we may receive:</p>
          <ul>
            <li>A unique Apple user identifier</li>
            <li>
              On first sign-in only, your name and/or email if you choose to
              share them
            </li>
          </ul>
          <p>
            Your trips, places, attached photos, and related stats sync through
            your iCloud account using Apple’s iCloud document/file services. That
            content is not stored in a TripStacks-operated itinerary database.
            Signing out stops iCloud syncing on that device; data already in
            iCloud or on device remains until you delete it.
          </p>

          <h2>Explore and other in-app content</h2>
          <p>
            Explore staff picks and similar editorial content are provided in
            the app for inspiration. Creating a trip or saving places from
            Explore stores that content locally (and in iCloud if sync is
            enabled), the same as other trips and places.
          </p>

          <h2>Analytics, advertising, and selling data</h2>
          <p>
            TripStacks does not sell your personal information. We do not use
            your itineraries for third-party advertising. Optional third-party
            services above (Google Gemini, Apple, Unsplash) receive only what is
            needed for the feature you use, under their own policies.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>Use the app without signing in</li>
            <li>Sign out to stop iCloud sync</li>
            <li>
              Clear or delete trips/places on device (and in iCloud if synced)
            </li>
            <li>Revoke Location access</li>
            <li>Avoid AI, Unsplash, or Maps features you don’t want to use</li>
          </ul>

          <p className="policy-updated">Last updated: August 19, 2026</p>
        </div>
      </article>
    </main>
  );
}
