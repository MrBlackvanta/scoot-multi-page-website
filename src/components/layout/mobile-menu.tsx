"use client";

import { ButtonAnchor } from "@/components";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { useEffect, useRef, useState } from "react";

import NavLinks from "./nav-links";

const SCROLL_LOCK = "v-scroll-lock";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle(SCROLL_LOCK, open);

    if (!open) return;

    let enter = requestAnimationFrame(() => {
      enter = requestAnimationFrame(() => panel.current?.focus());
    });

    const wide = matchMedia("(width >= 48rem)");
    const close = () => setOpen(false);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        trigger.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;

      const focusable = panel.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) return;

      const atStart =
        document.activeElement === first ||
        document.activeElement === panel.current;

      if (event.shiftKey && atStart) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", close);
    return () => {
      cancelAnimationFrame(enter);
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="justify-self-start text-yellow md:hidden"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-black/75 transition-[opacity,visibility] duration-300 motion-reduce:transition-none md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          ref={panel}
          tabIndex={-1}
          onClick={(event) => {
            if ((event.target as Element).closest("a")) setOpen(false);
          }}
          className={`absolute inset-y-0 left-0 flex w-64 flex-col bg-navy-deep px-8 pt-16 pb-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLinks variant="drawer" />
          <ButtonAnchor href="#download" tone="dark" className="mt-auto w-full">
            Get Scootin
          </ButtonAnchor>
        </div>
      </div>
    </>
  );
}
