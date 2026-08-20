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
    <>
      {open ? (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <header className="site-header">
      <div className="site-header-inner">
        <div className="logo-wrap">
          <Link href="/" className="logo" aria-label="TripStacks home">
            <img src="/logo.png" alt="" width={50} height={50} />
            <span className="logo-name">TripStacks</span>
          </Link>
          <span className="coming-label">V2.0 is coming</span>
        </div>

        <div className="header-actions">
          <nav className="nav-links" aria-label="Primary">
            <Link href="/" className={pathname === "/" ? "is-current" : undefined}>
              <span>Home</span>
              <span aria-hidden="true">Home</span>
            </Link>
            <Link
              href="/privacy-policy"
              className={pathname === "/privacy-policy" ? "is-current" : undefined}
            >
              <span>Privacy Policy</span>
              <span aria-hidden="true">Privacy Policy</span>
            </Link>
          </nav>

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
          <Link href="/" className={pathname === "/" ? "is-current" : undefined}>
            <span>Home</span>
            <span aria-hidden="true">Home</span>
          </Link>
          <Link
            href="/privacy-policy"
            className={pathname === "/privacy-policy" ? "is-current" : undefined}
          >
            <span>Privacy Policy</span>
            <span aria-hidden="true">Privacy Policy</span>
          </Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            Download Now
          </a>
        </div>
      ) : null}
    </header>
    </>
  );
}
