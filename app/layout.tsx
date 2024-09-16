import type { Metadata } from "next"; 
import localFont from "next/font/local";
import Link from "next/link";  // Import Link for navigation
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Digital CSM - Mujin Zhang",
  description: "Digital CSM take home assignment submission for - Mujin Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
          {children}
        </main>

        {/* Footer with Questions and Feedback buttons */}
        <footer className="row-start-3 flex flex-col items-center gap-4 w-full">
          {/* Buttons for Questions 1-8 */}
          <div className="flex gap-4 flex-wrap items-center justify-center">
            {Array.from({ length: 8 }, (_, i) => (
              <Link 
                href={`/questions/${i + 1}`} 
                key={i} 
                className="rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Question {i + 1}
              </Link>
            ))}
          </div>

          {/* Feedback Button */}
          <Link 
            href="/feedback"
            className="rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full max-w-screen-sm"
          >
            Feedback
          </Link>
        </footer>
      </body>
    </html>
  );
}
