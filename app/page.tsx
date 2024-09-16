import Image from "next/image";

export default function Home() {
  return (
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

       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <p className="text-center text-white text-lg">
        Welcome to my submission for the Digital Customer Success Manager role at Vercel,<br/>
        Click on the buttons below to view my answers!<br /><br />
        Looking forward to hearing feedback from you soon; thanks =]
      </p>
      </main>

      <footer className="row-start-3 flex flex-col items-center gap-4 w-full">
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {Array.from({ length: 8 }, (_, i) => (
            <a
              key={i}
              className="rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href={`#question${i + 1}`}
            >
              Question {i + 1}
            </a>
          ))}

        </div>
        <a
          className="rounded-full border border-solid border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-800 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full max-w-screen-sm"
          href="#feedback"
        >
          Feedback
        </a>
      </footer>
    </div>
  );
}