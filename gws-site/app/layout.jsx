import "./globals.css";

const appIconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 108'><rect width='108' height='108' rx='24' fill='%23050914'/><path d='M27 31 L81 31 A12 12 0 0 1 93 43 L93 65 A12 12 0 0 1 81 77 L27 77 A12 12 0 0 1 15 65 L15 43 A12 12 0 0 1 27 31 Z' fill='none' stroke='%2322D3EE' stroke-width='3.5'/><path d='M25 42 H42 V47 H31 V61 H39 V56 H35 V52 H44 V66 H25 Z' fill='%2322D3EE'/><path d='M47 42 H52 L55 59 L59 48 L63 59 L66 42 H71 L66 66 H61 L59 58 L56 66 H51 Z' fill='%23FFFFFF'/><path d='M74 42 H88 V47 H79 V51 H86 V56 H79 V61 H88 V66 H74 Z' fill='%2322D3EE'/></svg>`;

export const metadata = {
  title: "GWS — Great White Streams",
  description:
    "Great White Streams (GWS) — premium streaming with setup guides, updates, free trials and support.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml," + encodeURIComponent(appIconSvg),
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml," + encodeURIComponent(appIconSvg),
      },
    ],
  },
};

export const viewport = {
  themeColor: "#050914",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
