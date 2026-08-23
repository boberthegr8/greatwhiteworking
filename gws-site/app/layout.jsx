import "./globals.css";

const appIconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 108'><rect width='108' height='108' rx='16' fill='%2306111f'/><rect x='13' y='16' width='82' height='61' rx='6' fill='%23071725' stroke='%2335e2d1' stroke-width='5'/><path d='M43 83h22' stroke='%2335e2d1' stroke-width='5' stroke-linecap='round'/><path d='M54 77v7' stroke='%2335e2d1' stroke-width='5' stroke-linecap='round'/><path d='M27 55c10-11 24-15 40-12 8 1 14 4 19 8-5 7-12 12-22 14-15 3-28 0-37-10Z' fill='%23f4fbff'/><path d='M51 43c3-8 8-13 14-17-1 8 1 14 5 19Z' fill='%2335e2d1'/><path d='M82 50c6-5 10-9 13-14-1 7 0 12-2 16 2 4 1 9 2 15-4-4-8-8-13-12Z' fill='%2335e2d1'/><path d='M45 64c-4 7-9 11-15 13 5-4 9-9 12-14Z' fill='%2335e2d1'/><circle cx='37' cy='51' r='2.2' fill='%23071725'/><path d='M28 59c5 3 11 4 17 4' fill='none' stroke='%23071725' stroke-width='2' stroke-linecap='round'/></svg>`;

export const metadata = {
  title: "Great White Streams",
  description:
    "Great White Streams customer setup, app guides, trials and support.",
  icons: {
    icon: [{ url: "data:image/svg+xml," + encodeURIComponent(appIconSvg) }],
    apple: [{ url: "data:image/svg+xml," + encodeURIComponent(appIconSvg) }],
  },
};

export const viewport = {
  themeColor: "#06111f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
