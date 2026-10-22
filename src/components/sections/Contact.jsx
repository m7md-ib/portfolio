// ============================================================
// Contact — simple form + direct contact info
// Submitting opens the visitor's email app with the message
// pre-filled (mailto), so no backend is needed
// ============================================================

import { useState } from "react";
import { personal } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Button from "../ui/Button";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "opened"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("opened");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className={`fade-up ${styles.wrapper}`}>
          {/* Left — call to action */}
          <div className={styles.left}>
            <p className="section-label">Say hello</p>
            <h2 className={`section-title ${styles.title}`}>
              Let's build<br />
              <em>something together</em>
            </h2>
            <p className={styles.subtitle}>
              Whether you have a project in mind, want to collaborate, or just
              want to chat — my inbox is always open.
            </p>
            <div className={styles.directContact}>
              <a href={`mailto:${personal.email}`} className={styles.email}>
                {personal.email}
              </a>
              <span className={styles.location}>{personal.location}</span>
            </div>
          </div>

          {/* Right — form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit">Send message</Button>

            {status === "opened" && (
              <p className={styles.success}>
                ✓ Your email app should open with the message ready to send. If it didn't, email me at {personal.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
