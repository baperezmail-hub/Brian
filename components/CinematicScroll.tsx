"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

export default function CinematicScroll() {
  const [gsapReady, setGsapReady] = useState(false);
  const [scrollTriggerReady, setScrollTriggerReady] = useState(false);

  useEffect(() => {
    if (!gsapReady || !scrollTriggerReady) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ limitCallbacks: true });

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isMobile = window.matchMedia("(max-width:767px)").matches;
      const pf = isMobile ? 0.5 : 1;

      const bar = document.querySelector(".scroll-progress");
      if (bar) {
        gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
      }

      if (document.querySelector(".hero-content")) {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-pill", { y: 24, opacity: 0, duration: 0.7 })
          .from(".hero h1", { y: 44, opacity: 0, duration: 1.0 }, "-=.40")
          .from(".hero-tagline", { y: 22, opacity: 0, duration: 0.7 }, "-=.60")
          .from(".hero-sub", { y: 22, opacity: 0, duration: 0.7 }, "-=.50")
          .from(".hero-ctas", { y: 22, opacity: 0, duration: 0.7 }, "-=.50")
          .from(".hero-trust", { y: 18, opacity: 0, duration: 0.7 }, "-=.50")
          .from(".scroll-ind", { opacity: 0, duration: 0.8 }, "-=.30");
      }

      if (document.querySelector(".hero")) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "+=110%",
              scrub: true,
              pin: !isMobile,
              pinSpacing: !isMobile,
              anticipatePin: 1,
            },
          })
          .to(".hero-content", { scale: 1.45, opacity: 0, y: -50, ease: "none" }, 0)
          .to(".hero-bg", { scale: 1.25, ease: "none" }, 0)
          .to(".hero-grid", { yPercent: 20, ease: "none" }, 0)
          .to(".hero-glow1", { yPercent: -26, ease: "none" }, 0)
          .to(".hero-glow2", { yPercent: 18, ease: "none" }, 0);
      }

      const revealSel = [
        ".center",
        ".about-feat",
        ".water-callout",
        "#service-area .container > div:last-child",
        ".book-step",
        ".how-note",
        "#reviewSummary",
        "#reviewCards",
        "#reviews .container > div:last-child",
        ".trust-item",
        ".why-card",
        ".faq-item",
      ];
      revealSel.forEach((sel) => {
        gsap.utils.toArray(sel).forEach((el: Element) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 * pf },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: el, start: "top 85%" } }
          );
        });
      });

      if (document.querySelector(".about-visual")) {
        gsap.fromTo(
          ".about-visual",
          { opacity: 0, x: -40 * pf },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".about", start: "top 80%" } }
        );
        gsap.to(".about-img-wrap", {
          y: -34 * pf,
          ease: "none",
          scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      if (document.querySelector(".services-grid")) {
        gsap.fromTo(
          ".svc-card",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".services-grid", start: "top 80%" } }
        );
      }

      const steps = document.querySelector(".how-steps");
      if (steps) {
        gsap.fromTo(
          ".how-step",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".how", start: "top 72%" } }
        );
        if (!isMobile) {
          const conn = document.createElement("div");
          conn.className = "how-connector";
          const fill = document.createElement("div");
          fill.className = "how-connector-fill";
          conn.appendChild(fill);
          steps.appendChild(conn);
          gsap.to(fill, { width: "100%", ease: "none", scrollTrigger: { trigger: ".how", start: "top 65%", end: "center center", scrub: true } });
        }
      }

      if (document.getElementById("gallery")) {
        gsap.fromTo(
          "#gWrap",
          { scale: 0.92 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: "#gallery", start: "top bottom", end: "top center", scrub: true } }
        );
        gsap.to("#gallery .container", { y: -30 * pf, ease: "none", scrollTrigger: { trigger: "#gallery", start: "top bottom", end: "bottom top", scrub: true } });
      }

      if (!isMobile) {
        document.querySelectorAll<HTMLElement>(".svc-card, .why-card").forEach((card) => {
          card.style.transition = "transform 0.3s ease";
          card.style.transformStyle = "preserve-3d";
          card.addEventListener("mousemove", (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `translateY(-8px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
          });
          card.addEventListener("mouseleave", () => {
            card.style.transform = "";
          });
        });
      }

      window.addEventListener("load", () => ScrollTrigger.refresh());
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [gsapReady, scrollTriggerReady]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => setGsapReady(true)}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => setScrollTriggerReady(true)}
      />
    </>
  );
}
