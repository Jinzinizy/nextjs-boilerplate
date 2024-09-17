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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        {/* Home Button (Top Left) */}
        <header className="absolute top-4 left-4">
          <Link href="/" className="text-lg text-white hover:underline">
            Home
          </Link>
        </header>
        
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-900 text-white-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-8 right-8">
        <Image
          className="invert"  
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
          {/* Footer with Questions and Feedback buttons */}
          <footer className="flex flex-col items-center w-full">
            <div className="flex gap-2 justify-between w-2/3">
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
              className="mt-2 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-6 sm:h-8 px-4 w-2/3"
            >
              Feedback
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
