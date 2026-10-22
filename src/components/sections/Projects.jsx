// ============================================================
// Projects — featured projects grid with hover effects
// ============================================================

import { projects } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Tag from "../ui/Tag";
import styles from "./Projects.module.css";

// Single project card — extracted as a sub-component for clarity
function ProjectCard({ project, index }) {
  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project image placeholder */}
      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderText}>
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useScrollReveal();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects</h2>

        {/* Featured — larger cards */}
        <div ref={ref} className={`fade-up ${styles.featuredGrid}`}>
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <p className={styles.otherLabel}>More projects</p>
            <div className={styles.othersGrid}>
              {others.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
