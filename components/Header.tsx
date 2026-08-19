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
        <div className="logo-wrap">
          <Link href="/" className="logo" aria-label="TripStacks home">
            <img src="/logo.png" alt="TripStacks" width={50} height={50} />
          </Link>
          <span className="coming-label">V2.0 is coming</span>
        </div>

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
