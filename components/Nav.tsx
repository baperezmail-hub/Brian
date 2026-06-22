"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { BOOKING_URL } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest(".mob-menu") && !target.closest(".hamburger")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Logo />
            <div className="nav-logo-text">
              <div className="brand">Prestige Bin Services</div>
              <div className="sub">Miami, FL</div>
            </div>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#how">How It Works</a>
            <a href="#why">Why Us</a>
            <a href="#service-area">Service Area</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href={BOOKING_URL} className="nav-book">Book Now</a>
          </div>
          <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className={`mob-menu ${open ? "open" : ""}`} id="mobMenu">
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#how" onClick={() => setOpen(false)}>How It Works</a>
        <a href="#why" onClick={() => setOpen(false)}>Why Us</a>
        <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
        <a href="#service-area" onClick={() => setOpen(false)}>Service Area</a>
        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        <a href={BOOKING_URL} onClick={() => setOpen(false)}>Book Now — Instant</a>
      </div>
    </>
  );
}
