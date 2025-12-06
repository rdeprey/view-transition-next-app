import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="shell">
      <header className="site-header" style={{ viewTransitionName: "site-header" }}>
        <h1 className="site-title">View Transitions Lab</h1>
        <nav className="site-nav">
          <a href="/">Home</a>
          <a href="/gallery">Route transitions</a>
          <a href="/manual">Manual API</a>
        </nav>
      </header>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
