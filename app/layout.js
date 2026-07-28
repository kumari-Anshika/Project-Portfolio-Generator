import "./globals.css";

export const metadata = {
  title: "Developer Portfolio Generator",
  description:
    "Convert Markdown resumes and portfolios into customizable websites."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
