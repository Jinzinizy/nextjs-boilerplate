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
        <main className="flex flex-col items-center justify-center h-screen p-4">
          {children}
        </main>

        {/* Footer with Questions and Feedback buttons */}
        <footer className="grid grid-cols-8 gap-2 w-full">
          {/* Buttons for Questions 1-8 */}
          {Array.from({ length: 8 }, (_, i) => (
            <Link 
              href={`/questions/${i + 1}`} 
              key={i} 
              className="col-span-1 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-8 sm:h-10 px-3 sm:px-4"
            >
              Question {i + 1}
            </Link>
          ))}

          {/* Feedback Button that spans the entire width from Button 1 to Button 8 */}
          <Link 
            href="/feedback"
            className="col-span-8 rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 w-full"
          >
            Feedback
          </Link>
        </footer>
      </body>
    </html>
  );
}
