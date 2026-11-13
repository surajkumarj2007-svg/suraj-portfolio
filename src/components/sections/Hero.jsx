
import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.classList.remove("sk-animate");
          void hero.offsetWidth;
          hero.classList.add("sk-animate");
        } else {
          hero.classList.remove("sk-animate");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sk-hero,
        .sk-hero * {
          box-sizing: border-box;
        }

        .sk-hero {
          position: relative;
          width: 100%;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 75% 45%, rgba(20,90,255,.17), transparent 43%),
            radial-gradient(ellipse at 90% 75%, rgba(124,58,237,.15), transparent 45%);
        }

        .sk-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background-image: radial-gradient(
            rgba(255,255,255,.5) 1px,
            transparent 1px
          );
          background-size: 65px 65px;
          opacity: .17;
          animation: sk-background-stars 18s linear infinite;
        }

        .sk-hero-inner {
          width: 100%;
          max-width: 1320px;
          min-width: 0;
          margin: 0 auto;
          padding: 125px clamp(20px,5vw,65px) 65px;
          display: grid;
          grid-template-columns: minmax(0,1.1fr) minmax(0,.9fr);
          align-items: center;
          gap: clamp(20px,4vw,60px);
        }

        /* ENTRANCE ANIMATION */

        .sk-content,
        .sk-portrait-stage {
          opacity: 0;
          transform: translateY(65px);
        }

        .sk-animate .sk-content {
          animation: sk-slide-up .9s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .sk-animate .sk-portrait-stage {
          animation: sk-slide-up 1.1s cubic-bezier(.2,.8,.2,1) .12s forwards;
        }

        @keyframes sk-slide-up {
          from {
            opacity: 0;
            transform: translateY(65px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* INTRODUCTION */

        .sk-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #22d3ee;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 4px;
          margin-bottom: 22px;
        }

        .sk-eyebrow::before {
          content: "";
          width: 42px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg,#06b6d4,#3b82f6);
        }

        .sk-title {
          margin: 0;
          color: white;
          font-size: clamp(44px,5.7vw,76px);
          font-weight: 850;
          line-height: 1.04;
          letter-spacing: -2.8px;
        }

        .sk-title span {
          display: block;
          width: fit-content;
          max-width: 100%;
          background: linear-gradient(100deg,#22d3ee,#3b82f6,#a78bfa);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .sk-role {
          margin: 25px 0 15px;
          color: #f1f5f9;
          font-size: clamp(20px,2vw,27px);
          font-weight: 750;
        }

        .sk-description {
          max-width: 620px;
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.85;
          margin: 0;
        }

        .sk-location {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 22px;
          color: #cbd5e1;
          font-size: 15px;
        }

        .sk-location-icon {
          color: #22d3ee;
        }

        /* BUTTONS */

        .sk-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .sk-button {
          min-height: 49px;
          padding: 13px 22px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 750;
          text-decoration: none;
          transition: transform .3s, box-shadow .3s;
        }

        .sk-button:hover {
          transform: translateY(-4px);
        }

        .sk-primary {
          color: #07111f;
          background: linear-gradient(100deg,#22d3ee,#60a5fa,#8b5cf6);
          box-shadow: 0 0 25px rgba(34,211,238,.24);
        }

        .sk-primary:hover {
          box-shadow: 0 0 35px rgba(34,211,238,.5);
        }

        .sk-secondary {
          color: white;
          border: 1px solid rgba(167,139,250,.8);
          background: rgba(15,23,42,.55);
        }

        .sk-socials {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
        }

        .sk-socials a {
          color: #cbd5e1;
          font-size: 14px;
          text-decoration: none;
          transition: color .3s, transform .3s;
        }

        .sk-socials a:hover {
          color: #22d3ee;
          transform: translateY(-3px);
        }

        /* PORTRAIT */

        .sk-portrait-stage {
          position: relative;
          width: 100%;
          max-width: 510px;
          min-width: 0;
          height: clamp(390px,43vw,520px);
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          isolation: isolate;
        }

        .sk-glow {
          position: absolute;
          z-index: -2;
          width: 65%;
          aspect-ratio: 1;
          left: 50%;
          top: 46%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: linear-gradient(135deg,#006eff,#842dff);
          filter: blur(85px);
          opacity: .55;
          animation: sk-glow-pulse 4s ease-in-out infinite alternate;
        }

        /* RINGS */

        .sk-ring {
          position: absolute;
          left: 50%;
          top: 46%;
          transform: translate(-50%,-50%);
          width: 76%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid rgba(0,195,255,.8);
          box-shadow:
            0 0 18px rgba(0,195,255,.45),
            inset 0 0 20px rgba(0,195,255,.12);
          z-index: -1;
          pointer-events: none;
        }

        .sk-ring-two {
          width: 88%;
          border-color: rgba(139,92,246,.65);
          border-style: dashed;
          animation: sk-ring-rotate 30s linear infinite;
        }

        .sk-ring-three {
          width: 98%;
          border-color: rgba(0,160,255,.22);
          border-style: dotted;
          animation: sk-ring-rotate 45s linear infinite reverse;
        }

        /* REVOLVING STARS */

        .sk-star-orbit {
          position: absolute;
          left: 50%;
          top: 46%;
          width: 110%;
          height: 110%;
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
          animation: sk-star-revolve 14s linear infinite;
        }

        .sk-orbit-two {
          width: 120%;
          height: 120%;
          animation-duration: 20s;
          animation-direction: reverse;
        }

        .sk-orbit-three {
          width: 95%;
          height: 95%;
          animation-duration: 11s;
        }

        .sk-orbit-star {
          position: absolute;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          box-shadow:
            0 0 6px #fff,
            0 0 13px #22d3ee,
            0 0 24px #008cff;
        }

        .star-a { top: 0; left: 50%; }
        .star-b { top: 25%; right: 5%; }
        .star-c { bottom: 12%; right: 18%; }
        .star-d { bottom: 18%; left: 8%; }

        .star-e {
          top: 12%;
          left: 12%;
          width: 5px;
          height: 5px;
          background: #a78bfa;
          box-shadow: 0 0 14px #a78bfa;
        }

        .star-f { top: 48%; right: 0; width: 7px; height: 7px; }
        .star-g { bottom: 5%; left: 48%; width: 4px; height: 4px; }
        .star-h { top: 32%; left: 0; width: 5px; height: 5px; }

        .star-i {
          top: 5%;
          right: 18%;
          width: 4px;
          height: 4px;
          background: #c4b5fd;
          box-shadow: 0 0 15px #a78bfa;
        }

        .star-j { bottom: 15%; right: 5%; width: 6px; height: 6px; }

        /* PHOTO */

        .sk-portrait {
          position: relative;
          z-index: 2;
          display: block;
          width: 82%;
          height: 94%;
          bottom: 28px;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 0 16px rgba(0,170,255,.2));
          transition: transform .4s ease;
        }

        .sk-portrait:hover {
          transform: translateY(-7px);
        }

        /* FLOATING BADGES */

        .sk-badge {
          position: absolute;
          z-index: 5;
          padding: 11px 15px;
          border: 1px solid #00c8ff;
          border-radius: 12px;
          color: white;
          background: rgba(5,12,40,.96);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .4px;
          white-space: nowrap;
          box-shadow: 0 0 20px rgba(0,195,255,.35);
          animation: sk-badge-float 4s ease-in-out infinite;
        }

        .sk-badge-ai { top: 19%; left: 0; }

        .sk-badge-dev {
          top: 42%;
          right: 0;
          border-color: #a855f7;
          box-shadow: 0 0 20px rgba(168,85,247,.4);
          animation-delay: -2s;
        }

        .sk-badge-data {
          bottom: 20%;
          left: 0;
          animation-delay: -1s;
        }

        /* PLATFORM */

        .sk-platform {
          position: absolute;
          z-index: 3;
          bottom: 5%;
          left: 7%;
          width: 86%;
          height: 35px;
          border-radius: 50%;
          border-top: 2px solid #a855f7;
          border-bottom: 3px solid #22d3ee;
          box-shadow:
            0 8px 22px rgba(0,195,255,.35),
            0 0 25px rgba(168,85,247,.3);
        }

        /* KEYFRAMES */

        @keyframes sk-ring-rotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        @keyframes sk-star-revolve {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        @keyframes sk-glow-pulse {
          from { opacity: .35; }
          to { opacity: .65; }
        }

        @keyframes sk-badge-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes sk-background-stars {
          from { background-position: 0 0; }
          to { background-position: 65px 65px; }
        }

        /* TABLET */

        @media (max-width: 950px) {
          .sk-hero-inner {
            grid-template-columns: minmax(0,1fr) minmax(0,1fr);
            gap: 18px;
            padding: 115px 28px 55px;
          }

          .sk-title {
            font-size: clamp(40px,5vw,58px);
          }

          .sk-portrait-stage {
            height: 430px;
          }

          .sk-badge {
            font-size: 10px;
            padding: 9px 11px;
          }
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .sk-hero {
            min-height: auto;
          }

          .sk-hero-inner {
            grid-template-columns: minmax(0,1fr);
            gap: 25px;
            padding: 100px 20px 45px;
          }

          .sk-content {
            text-align: center;
          }

          .sk-eyebrow {
            justify-content: center;
          }

          .sk-title {
            font-size: clamp(43px,11vw,58px);
            letter-spacing: -2px;
          }

          .sk-title span {
            margin-inline: auto;
          }

          .sk-role { font-size: 21px; }

          .sk-description {
            font-size: 14px;
            margin-inline: auto;
          }

          .sk-location,
          .sk-actions,
          .sk-socials {
            justify-content: center;
          }

          .sk-portrait-stage {
            width: 100%;
            max-width: 390px;
            height: 390px;
          }

          .sk-portrait { bottom: 20px; }

          .sk-badge {
            font-size: 10px;
            padding: 8px 10px;
          }

          .sk-badge-ai { left: 0; top: 16%; }
          .sk-badge-dev { right: 0; top: 39%; }
          .sk-badge-data { left: 0; bottom: 19%; }

          .sk-button {
            padding: 12px 15px;
            font-size: 12px;
          }
        }

        @media (max-width: 360px) {
          .sk-hero-inner { padding-inline: 14px; }
          .sk-portrait-stage { height: 340px; }
          .sk-badge { font-size: 9px; padding: 7px 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sk-hero *,
          .sk-hero *::before {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section ref={heroRef} className="sk-hero" id="home">
        <div className="sk-hero-inner">

          {/* INTRODUCTION */}

          <div className="sk-content">
            <div className="sk-eyebrow">
              HELLO, I'M
            </div>

            <h1 className="sk-title">
              Suraj Kumar
              <span>Singh.</span>
            </h1>

            <h2 className="sk-role">
              Aspiring AI Engineer
            </h2>

            <p className="sk-description">
              I am a Computer Science Engineering student
              passionate about data, technology and artificial
              intelligence. I enjoy building practical projects,
              exploring new technologies and continuously
              developing my technical skills.
            </p>

            <div className="sk-location">
              <span className="sk-location-icon">●</span>
              Bengaluru, India
            </div>

            <div className="sk-actions">
              <a
                href="/resume.pdf"
                download
                className="sk-button sk-primary"
              >
                ↓ Download Resume ↗
              </a>

              <a
                href="#projects"
                className="sk-button sk-secondary"
              >
                Explore My Work ↗
              </a>
            </div>

            <div className="sk-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-kumar-singh-b79723390/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* PORTRAIT */}

          <div className="sk-portrait-stage">

            <div className="sk-glow"></div>

            <div className="sk-ring"></div>
            <div className="sk-ring sk-ring-two"></div>
            <div className="sk-ring sk-ring-three"></div>

            {/* 10 REVOLVING STARS */}

            <div className="sk-star-orbit">
              <span className="sk-orbit-star star-a"></span>
              <span className="sk-orbit-star star-b"></span>
              <span className="sk-orbit-star star-c"></span>
              <span className="sk-orbit-star star-d"></span>
            </div>

            <div className="sk-star-orbit sk-orbit-two">
              <span className="sk-orbit-star star-e"></span>
              <span className="sk-orbit-star star-f"></span>
              <span className="sk-orbit-star star-g"></span>
            </div>

            <div className="sk-star-orbit sk-orbit-three">
              <span className="sk-orbit-star star-h"></span>
              <span className="sk-orbit-star star-i"></span>
              <span className="sk-orbit-star star-j"></span>
            </div>

            {/* BADGES */}

            <div className="sk-badge sk-badge-ai">
              ✦ AI / ML
            </div>

            <div className="sk-badge sk-badge-dev">
              {"</>"} DEVELOPER
            </div>

            <div className="sk-badge sk-badge-data">
              ▥ DATA ANALYST
            </div>

            {/* PHOTO */}

            <img
              src="/profile-transparent.png"
              alt="Suraj Kumar Singh"
              className="sk-portrait"
            />

            <div className="sk-platform"></div>

          </div>

        </div>
      </section>
    </>
  );
}
