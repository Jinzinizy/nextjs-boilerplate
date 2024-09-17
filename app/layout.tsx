import type { Metadata } from "next"; 
import localFont from "next/font/local";
import Link from "next/link";  // Import Link for navigation
import Image from "next/image";  // Import Image for the logo
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
  description: "Digital CSM take-home assignment submission for - Mujin Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        {/* Logo at the top-right corner */}
        <header className="absolute top-4 right-4">
          <Image
            className="invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
        </header>

        {/* Home Button (Top Left) */}
        <header className="absolute top-4 left-4">
          <Link href="/" className="text-lg text-white hover:underline">
            Home
          </Link>
        </header>

        {/* Main layout using flex and setting height to exactly fit the screen */}
        <div className="flex flex-col justify-center items-center h-screen p-2">
          
          {/* Main content */}
          <main className="flex flex-col items-center justify-center mb-4">
            {children}
          </main>

          {/* Footer with Questions and Feedback buttons */}
          <footer className="absolute bottom-1/6 flex flex-col items-center w-2/3">
            <div className="flex gap-2 justify-between w-full">
              {/* Buttons for Questions 1-8 */}
              {Array.from({ length: 8 }, (_, i) => (
                <Link 
                  href={`/questions/${i + 1}`} 
                  key={i} 
                  className="flex-1 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-8 sm:h-10 px-2"
                >
                  Q{i + 1}
                </Link>
              ))}
            </div>

            {/* Feedback Button that spans across the width */}
            <Link 
              href="/feedback"
              className="mt-2 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-6 sm:h-8 px-4 w-full"
            >
              Feedback
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
