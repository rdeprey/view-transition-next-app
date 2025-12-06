import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "View Transitions Lab",
  description: "View Transition API + React 19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#020617" }}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @view-transition {
                navigation: auto;
              }
            `,
          }}
        />
      </head>
      <body style={{ background: "#020617" }}>
        <div className="shell">
          <Header />
          <main className="app">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
