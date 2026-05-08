'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Shows once per full page load (refresh) after a short delay — not again on client-side navigations.
 * Dismiss hides until next refresh. Hidden entirely on `/bootcamp`.
 */
export default function BootcampCornerPopup() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const showScheduledLatchRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname === '/bootcamp') {
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!mounted || pathname === '/bootcamp') return;
    if (showScheduledLatchRef.current) return;
    showScheduledLatchRef.current = true;

    const t = setTimeout(() => setOpen(true), 1600);
    return () => clearTimeout(t);
  }, [mounted, pathname]);

  function dismiss() {
    setOpen(false);
  }

  if (!mounted || pathname === '/bootcamp') return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          className="fixed z-[120] pointer-events-none bottom-0 left-0 right-0 md:left-auto md:right-[max(0.75rem,env(safe-area-inset-right,0px))] md:bottom-0 md:inline-flex md:w-max md:max-w-none md:flex-none"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        >
          <aside
            role="dialog"
            aria-labelledby="bootcamp-corner-title"
            aria-describedby="bootcamp-corner-desc"
            className="pointer-events-auto relative w-full border-t border-white/20 bg-black pb-[env(safe-area-inset-bottom,0px)] shadow-2xl shadow-black md:w-auto md:max-w-[280px] md:rounded-t-sm md:border md:border-b-0 md:p-4 md:pr-10 md:shadow-2xl md:pb-[max(1rem,env(safe-area-inset-bottom,0px))]"
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-2 top-2 z-[1] rounded p-1 text-white/55 transition-colors hover:bg-white/10 hover:text-white md:p-1.5"
              aria-label="Dismiss bootcamp notice"
            >
              <svg className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile: short full-width bar */}
            <div className="flex items-center gap-2 px-3 py-2 pr-11 md:hidden">
              <div className="min-w-0 flex-1">
                <p id="bootcamp-corner-title" className="font-bebas text-[15px] leading-tight tracking-wide text-white">
                  BOOTCAMP · MAY 19
                </p>
                <p id="bootcamp-corner-desc" className="mt-0.5 truncate font-montserrat text-[10px] leading-tight text-white/65">
                  Sign up · last month sold out fast
                </p>
              </div>
              <Link
                href="/bootcamp"
                className="font-bebas shrink-0 border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/15"
              >
                SIGN UP
              </Link>
            </div>

            {/* Desktop: original card */}
            <div className="hidden md:block md:pr-2">
              <p className="font-bebas pr-10 text-xl tracking-wide text-white" id="bootcamp-corner-title-desktop">
                BEGINNERS BOOTCAMP
              </p>
              <p className="mt-2 font-montserrat text-xs leading-snug text-white/75" id="bootcamp-corner-desc-desktop">
                Sign up for our bootcamp — starts <span className="text-white">May 19th</span>. Last month sold out quickly.
              </p>
              <Link
                href="/bootcamp"
                className="font-bebas mt-4 inline-flex w-full items-center justify-center border border-white/25 bg-white/10 px-4 py-2.5 text-sm tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/15"
              >
                SIGN UP
              </Link>
            </div>
          </aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
