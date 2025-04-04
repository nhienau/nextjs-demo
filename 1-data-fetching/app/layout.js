import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s - Fake Store",
    default: "Fake Store",
  },
  description: "Fake Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main className="max-w-7xl mx-auto my-4 px-4">{children}</main>
      </body>
    </html>
  );
}
