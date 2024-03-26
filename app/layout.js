// "use client";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title:
    "Goodman Consulting | OKC Construction Expert Witness, Public Adjustor, Umpire Services, and Commercial Roof Inspection in Oklahoma City.",
  description:
    "Goodman Consulting | OKC Construction Expert Witness, Public Adjustor, Umpire Services, and Commercial Roof Inspection in Oklahoma City.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
