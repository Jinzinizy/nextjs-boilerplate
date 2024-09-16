import { useRouter } from 'next/router';

export default function QuestionPage() {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic id from the URL

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Question {id}</h1>
      <p>This is the content for Question {id}.</p>
      <a
        className="mt-4 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
        href="/"
      >
        Go Back
      </a>
    </div>
  );
}
