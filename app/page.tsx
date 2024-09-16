import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-900 text-white-[family-name:var(--font-geist-sans)]">
      {/* Next.js logo in top-right */}
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

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Centered Text with corrected font size */}
        <p className="text-center text-white text-3xl sm:text-4xl">
          Welcome to my submission for the Digital Customer Success Manager role at Vercel,<br />
          Click on the buttons below to view my answers!<br /><br />
          Looking forward to hearing feedback from you soon; thanks =]
        </p>
      </main>
    </div>
  );
}
