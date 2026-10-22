// ============================================================
// Skills — grouped skill categories with animated tags
// ============================================================

import { skills } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Tag from "../ui/Tag";
import styles from "./Skills.module.css";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">What I use</p>
        <h2 className="section-title">Skills &amp; Tools</h2>

        <div ref={ref} className={`fade-up ${styles.grid}`}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
