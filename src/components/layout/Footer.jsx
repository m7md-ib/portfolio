import { personal } from "../../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite.
        </p>
        <div className={styles.socials}>
          <a href={personal.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
