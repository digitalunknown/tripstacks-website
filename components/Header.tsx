"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_STORE_URL } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="logo" aria-label="TripStacks home">
          <img src="/logo.png" alt="TripStacks" width={50} height={50} />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/" className={pathname === "/" ? "is-current" : undefined}>
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className={pathname === "/privacy-policy" ? "is-current" : undefined}
          >
            Privacy Policy
          </Link>
        </nav>

        <div className="header-actions">
          <a
            className="download-link"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
            <span className="download-arrow" aria-hidden="true">
              <svg viewBox="0 0 18 16" width="16" height="16">
                <path
                  d="M17.781 8.031 11.031 14.781a.75.75 0 0 1-1.062-1.061L15.44 8.25H.75a.75.75 0 0 1 0-1.5h14.69L9.969 1.281A.75.75 0 1 1 11.031.22l6.75 6.75a.749.749 0 0 1 0 1.061Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={open ? "is-open" : undefined} />
            <span className={open ? "is-open" : undefined} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu">
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            Download Now
          </a>
        </div>
      ) : null}
    </header>
  );
}
