import React from "react";
import styles from "./Sign.module.css";

const Sign = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Sustain Style</h1>
      <p className={styles.subtitle}>Create an account</p>
      <p className={styles.description}>Enter your email to sign up for this app</p>

      <input
        className={styles.input}
        type="email"
        placeholder="email@domain.com"
      />

      <button className={styles.primaryButton}>Continue</button>

      <div className={styles.divider}><span>or</span></div>

      <button className={styles.oauthButton}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
          alt="Google"
          className={styles.icon}
        />
        Continue with Google
      </button>

      <button className={styles.oauthButton}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple"
          className={styles.icon}
        />
        Continue with Apple
      </button>

      <p className={styles.terms}>
        By clicking continue, you agree to our{" "}
        <a href="/terms">Terms of Service</a> and{" "}
        <a href="/privacy">Privacy Policy</a>
      </p>

      <button className={styles.secondaryButton}>Continue</button>
    </div>
  );
};

export default Sign;
