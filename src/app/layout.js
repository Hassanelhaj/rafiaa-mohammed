import "./globals.css";

import Root from "./Root";

export const metadata = {
  title: "Rafiaa Mohammed ",
  description: "developed by hassan ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head></head>

      <body>
        <main>
          <Root children={children} />
        </main>
      </body>
    </html>
  );
}
