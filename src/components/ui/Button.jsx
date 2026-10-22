// ============================================================
// Button — reusable CTA component
// variant: "primary" | "outline" | "ghost"
// ============================================================

import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  onClick,
  className = "",
  ...props
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
