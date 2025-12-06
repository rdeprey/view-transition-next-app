import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ background: "#020617" }}>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @view-transition {
                navigation: auto;
              }
            `,
          }}
        />
      </Head>
      <body style={{ background: "#020617" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
