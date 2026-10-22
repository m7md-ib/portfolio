// ============================================================
// Hero — first impression. Animated headline + CTA buttons.
// The large gradient orb creates visual depth.
// ============================================================

import { personal } from "../../data/portfolio";
import Button from "../ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative background orb */}
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.orbSecondary} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}
        {personal.available && (
          <div className={styles.badge}>
            <span className={styles.pulse} />
            Available for work
          </div>
        )}

        {/* Main headline */}
        <h1 className={styles.headline}>
          <span className={styles.hi}>Hi, I'm</span>
          <span className={styles.name}>{personal.name}</span>
          <span className={styles.role}>{personal.role}</span>
        </h1>

        <p className={styles.tagline}>{personal.tagline}</p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Button href="#projects">View my work</Button>
          <Button variant="outline" href="#contact">Get in touch</Button>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          {Object.entries(personal.social).map(([platform, url]) => (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              {platform}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  );
}
