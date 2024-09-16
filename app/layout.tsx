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

// Metadata for the page (outside the component)
export const metadata: Metadata = {
  title: "Digital CSM - Mujin Zhang",
  description: "Digital CSM take home assignment submission for - Mujin Zhang",
};

// Reusable button class for questions and feedback
const buttonClass = "rounded-full border border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-10 px-4";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Generate the questions buttons dynamically
  const renderQuestions = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <Link href={`/questions/${i + 1}`} key={i} className={`col-span-1 ${buttonClass}`}>
        Question {i + 1}
      </Link>
    ));
  };

  return (
    <>
      {/* Home Button (Top Left) */}
      <header className="absolute top-4 left-4">
        <Link href="/" className="text-lg text-white hover:underline">
          Home
        </Link>
      </header>

      {/* Main layout using flex and setting height to exactly fit screen */}
      <div className="flex flex-col justify-between h-screen p-4">
        
        {/* Main content */}
        <main className="flex flex-col items-center justify-center flex-grow">
          {children}
        </main>

        {/* Footer with Questions and Feedback buttons */}
        <footer className="grid grid-cols-8 gap-2 w-full">
          {/* Render Buttons for Questions 1-8 */}
          {renderQuestions()}

          {/* Feedback Button that spans the entire width from Button 1 to Button 8 */}
          <Link 
            href="/feedback"
            className={`col-span-8 ${buttonClass} w-full`}
          >
            Feedback
          </Link>
        </footer>
      </div>
    </>
  );
}
