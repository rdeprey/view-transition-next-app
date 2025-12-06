"use client";

import { useState } from "react";

export default function ManualPage() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    const update = () => setDarkTheme((prev) => !prev);

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        update();
      });
    } else {
      update();
    }
  };

  return (
    <div className="manual-wrapper">
      <h2 style={{ viewTransitionName: "page-title" }}>
        Manual View Transition API
      </h2>
      <p style={{ viewTransitionName: "description" }}>
        This page calls <code>document.startViewTransition()</code> directly
        around a state update. React still re-renders the tree, but the browser
        animates between the old and new snapshots using our custom root
        animation.
      </p>

      <section
        className="manual-preview"
        data-theme={darkTheme ? "dark" : "light"}
        style={{ viewTransitionName: "theme-preview" }}
      >
        <div className="manual-badge-row">
          <span className="manual-pill">
            Theme: {darkTheme ? "Dark" : "Light"}
          </span>
          <span>Custom root animation</span>
        </div>
        <div className="manual-toggle-row">
          <div className="theme-chip-row">
            <span
              className={
                "theme-chip" + (darkTheme ? " theme-chip--active" : "")
              }
            >
              Dark
            </span>
            <span
              className={
                "theme-chip" + (!darkTheme ? " theme-chip--active" : "")
              }
            >
              Light
            </span>
          </div>
          <button className="manual-toggle-btn" onClick={toggleTheme}>
            Toggle theme with a transition
          </button>
        </div>
      </section>

      <p>
        Try clicking the button a few times. The whole root view participates in
        the transition because we customized{" "}
        <code>::view-transition-old(root)</code> and{" "}
        <code>::view-transition-new(root)</code> in <code>globals.css</code>.
      </p>
    </div>
  );
}
