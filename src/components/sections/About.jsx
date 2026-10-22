// ============================================================
// About — two-column layout: bio left, highlights right
// ============================================================

import { about, personal, stats } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Button from "../ui/Button";
import styles from "./About.module.css";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className={`fade-up ${styles.grid}`}>
          {/* Left — text */}
          <div className={styles.left}>
            <p className="section-label">About me</p>
            <h2 className="section-title">
              Building things<br />
              <em>people love</em>
            </h2>
            <p className={styles.bio}>{about.bio}</p>
            <Button href={personal.resumeUrl} variant="outline" external>
              Download Résumé ↗
            </Button>
          </div>

          {/* Right — highlights list */}
          <div className={styles.right}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>Quick facts</p>
              <ul className={styles.list}>
                {about.highlights.map((item, i) => (
                  <li key={i} className={styles.item}>
                    <span className={styles.arrow}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini stats */}
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
