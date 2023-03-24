module.exports = ({ theme }) => ({
  ".btn": {
    display: "inline-block",
    textAlign: "center",
    border: "1px solid var(--fw-btn-border-color)",
    borderRadius: `var(--fw-btn-radius ,${theme("spacing.2")})`,
    transition: "color,background 200ms ease-in-out",
    backgroundColor: "var(--fw-btn-bg-color)",
    color: "var(--fw-btn-text-color)",
    padding: `var(--fw-btn-py, ${theme("spacing.2")}) var(--fw-btn-px, ${theme(
      "spacing.4"
    )})`,
    boxShadow: "0px 1px 4px var(--fw-btn-shadow-color)",

    "&:disabled": {},
  },

  // @Variants
  ".btn--primary": {
    "--fw-btn-bg-color": "var(--fw-primary-color)",
    "--fw-btn-border-color": "var(--fw-primary-color)",
    "--fw-btn-text-color": "var(--fw-primary-content-color)",
    "--fw-btn-shadow-color": "var(--fw-primary-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-primary-hover-color)",
      "--fw-btn-border-color": "var(--fw-primary-hover-color)",
      "--fw-btn-text-color": "var(--fw-primary-content-color)",
    },
  },

  ".btn--secondary": {
    "--fw-btn-bg-color": "var(--fw-secondary-color)",
    "--fw-btn-border-color": "var(--fw-secondary-color)",
    "--fw-btn-text-color": "var(--fw-secondary-content-color)",
    "--fw-btn-shadow-color": "var(--fw-secondary-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-secondary-hover-color)",
      "--fw-btn-border-color": "var(--fw-secondary-hover-color)",
      "--fw-btn-text-color": "var(--fw-secondary-content-color)",
    },
  },

  ".btn--success": {
    "--fw-btn-bg-color": "var(--fw-success-color)",
    "--fw-btn-border-color": "var(--fw-success-color)",
    "--fw-btn-text-color": "var(--fw-success-content-color)",
    "--fw-btn-shadow-color": "var(--fw-success-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-success-hover-color)",
      "--fw-btn-border-color": "var(--fw-success-hover-color)",
      "--fw-btn-text-color": "var(--fw-success-content-color)",
    },
  },

  ".btn--error": {
    "--fw-btn-bg-color": "var(--fw-error-color)",
    "--fw-btn-border-color": "var(--fw-error-color)",
    "--fw-btn-text-color": "var(--fw-error-content-color)",
    "--fw-btn-shadow-color": "var(--fw-error-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-error-hover-color)",
      "--fw-btn-border-color": "var(--fw-error-hover-color)",
      "--fw-btn-text-color": "var(--fw-error-content-color)",
    },
  },

  ".btn--warning": {
    "--fw-btn-bg-color": "var(--fw-warning-color)",
    "--fw-btn-border-color": "var(--fw-warning-color)",
    "--fw-btn-text-color": "var(--fw-warning-content-color)",
    "--fw-btn-shadow-color": "var(--fw-warning-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-warning-hover-color)",
      "--fw-btn-border-color": "var(--fw-warning-hover-color)",
      "--fw-btn-text-color": "var(--fw-warning-content-color)",
    },
  },

  ".btn--info": {
    "--fw-btn-bg-color": "var(--fw-info-color)",
    "--fw-btn-border-color": "var(--fw-info-color)",
    "--fw-btn-text-color": "var(--fw-info-content-color)",
    "--fw-btn-shadow-color": "var(--fw-info-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-info-hover-color)",
      "--fw-btn-border-color": "var(--fw-info-hover-color)",
      "--fw-btn-text-color": "var(--fw-info-content-color)",
    },
  },

  ".btn--light": {
    "--fw-btn-bg-color": "var(--fw-light-color)",
    "--fw-btn-border-color": "var(--fw-light-color)",
    "--fw-btn-text-color": "var(--fw-light-content-color)",
    "--fw-btn-shadow-color": "var(--fw-light-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-light-hover-color)",
      "--fw-btn-border-color": "var(--fw-light-hover-color)",
      "--fw-btn-text-color": "var(--fw-light-content-color)",
    },
  },

  ".btn--dark": {
    "--fw-btn-bg-color": "var(--fw-dark-color)",
    "--fw-btn-border-color": "var(--fw-dark-color)",
    "--fw-btn-text-color": "var(--fw-dark-content-color)",
    "--fw-btn-shadow-color": "var(--fw-dark-color)",

    "&:hover": {
      "--fw-btn-bg-color": "var(--fw-dark-hover-color)",
      "--fw-btn-border-color": "var(--fw-dark-hover-color)",
      "--fw-btn-text-color": "var(--fw-dark-content-color)",
    },
  },

  // @Sizes
  ".btn--sm": {
    "--fw-btn-px": theme("spacing.2"),
    "--fw-btn-py": theme("spacing.1"),
    "--fw-btn-radius": theme("spacing.2"),
    fontSize: ".75rem",
  },
  ".btn--lg": {
    "--fw-btn-px": theme("spacing.6"),
    "--fw-btn-py": theme("spacing.3"),
    "--fw-btn-radius": theme("spacing.3"),
    fontSize: "1.2rem",
  },

  // @Modifiers
  ".btn--outline": {
    borderWidth: "3px",
    "--fw-btn-text-color": "var(--fw-btn-bg-color)",

    "&:not(:hover)": {
      backgroundColor: "transparent",
    },
  },
  // ".btn--gradient": {//TODO remove?
  //   backgroundImage: `linear-gradient(to right, ${theme(
  //     "colors.indigo.500"
  //   )}, ${theme("colors.purple.500")}, ${theme("colors.indigo.500")})`,
  // },
});
