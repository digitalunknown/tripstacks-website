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
          <p className="policy-updated">Updated on January 22, 2026</p>
          <h1>Privacy policy</h1>
        </header>

        <div className="policy-body">
          <p>
            <strong>Summary</strong>
            <br />
            <br />
            At TripStacks, we believe your travel plans should be your business.
            Because our app is built with a &quot;local-first&quot; philosophy, we do
            not require any account creation or login, and we do not collect or
            store any personally identifiable information (PII). All your
            itineraries and preferences are stored exclusively on your own
            device; TripStacks has no backend servers and cannot access your
            saved data. To provide you with personalized travel suggestions, the
            app allows you to enter prompts, food preferences, and interests
            which are sent to Google Gemini for processing. While these inputs
            are used to generate your custom day plans, they are not linked to a
            persistent user profile.
          </p>

          <p>
            <strong>How Plan Day works</strong>
          </p>

          <p>
            To provide personalized travel suggestions while keeping{" "}
            <strong>TripStacks</strong> serverless, the app acts as a secure
            bridge between your local device and Google’s AI infrastructure.
          </p>

          <p>
            When you request a day plan, the app bundles your specific prompt
            with the preferences stored on your phone into a single, encrypted
            request sent directly to the <strong>Gemini API</strong>.
          </p>

          <p>How the Data Travels</p>

          <p>
            Because TripStacks has no backend, the &quot;logic&quot; of combining
            your data happens right on your device. Here is the step-by-step
            technical flow:
          </p>

          <ol>
            <li>
              <strong>Local Compilation:</strong> The app takes your current
              prompt (e.g., <em>&quot;Plan a Saturday in Tokyo&quot;</em>) and
              retrieves your saved food preferences (e.g.,{" "}
              <em>&quot;Vegan, loves sushi&quot;</em>) and interests (e.g.,{" "}
              <em>&quot;Photography, ancient temples&quot;</em>) from your
              device&apos;s local storage.
            </li>
            <li>
              <strong>Prompt Engineering:</strong> These pieces are combined
              into a &quot;Structured Prompt.&quot; For example: &quot;Act as a
              travel expert. Plan a day in Tokyo for a user who is{" "}
              <strong>Vegan</strong> and interested in{" "}
              <strong>Photography</strong>. The user wants to:{" "}
              <em>Plan a Saturday in Tokyo</em>.&quot;
            </li>
            <li>
              <strong>Secure Transmission:</strong> This text is packaged into a
              JSON object and sent via <strong>HTTPS (TLS encryption)</strong>{" "}
              to Google’s API endpoint.
            </li>
            <li>
              <strong>AI Processing:</strong> Google Gemini processes the text,
              applies its knowledge of the world, and generates a response.
            </li>
            <li>
              <strong>Direct Return:</strong> The response is sent back to the
              app, which renders it on your screen. None of this data ever
              touches a TripStacks server.
            </li>
          </ol>

          <p>
            <strong>How Sign In With Apple works</strong>
          </p>

          <p>
            We offer Sign in with Apple as an optional way to enable iCloud sync
            for your TripStacks data. If you choose to sign in, we receive a
            unique Apple-provided identifier (and, only on first sign-in, your
            name and/or email if you choose to share it) to recognize your
            account on this device. Your trips, photos you attach, and stats are
            stored and synced via your iCloud account using Apple’s iCloud
            services (Cloud Documents/Files) and are not stored on our servers.
            You can sign out at any time to stop iCloud syncing; your data
            remains in your iCloud account and/or on your device unless you
            delete it.
          </p>
        </div>
      </article>
    </main>
  );
}
