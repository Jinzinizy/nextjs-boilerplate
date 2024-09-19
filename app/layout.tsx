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

// Reusable button class for consistent styling
const buttonClass = "flex-1 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-8 sm:h-10 px-2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}>
        
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

        {/* Home Button with the same style as other buttons */}
        <header className="absolute top-4 left-4">
          <Link href="/" className={buttonClass}>
            Home
          </Link>
        </header>

        {/* Main content - this grows to fill the available space */}
        <main className="flex-grow flex flex-col justify-center items-center p-4">
          {children}
        </main>

        {/* Footer with Questions and Feedback buttons */}
        <footer className="w-full bg-gray-900 p-4">
          <div className="flex justify-between w-full gap-2">
            {/* Reuse buttonClass for each Question button */}
            {Array.from({ length: 7 }, (_, i) => (
              <Link 
                href={`/questions/${i + 1}`} 
                key={i} 
                className={buttonClass}
              >
                Q{i + 1}
              </Link>
            ))}
          </div>

          {/* Feedback Button that spans full width */}
          <Link 
            href="/feedback"
            className={`${buttonClass} mt-4 w-full`}
          >
            Question 8 / Feedback 
          </Link>
        </footer>
      </body>
    </html>
  );
}
