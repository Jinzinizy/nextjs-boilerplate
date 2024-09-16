export default function FeedbackPage() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl mb-8">Feedback Page</h1>
        <p className="text-lg mb-4">
          We would love to hear your feedback! Please fill out the form below:
        </p>
        {/* You can add a feedback form here */}
        <form className="w-full max-w-md flex flex-col gap-4">
          <textarea
            className="p-4 bg-gray-800 rounded"
            rows="5"
            placeholder="Your feedback..."
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
          >
            Submit Feedback
          </button>
        </form>
        <a
          className="mt-8 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
          href="/"
        >
          Go Back
        </a>
      </div>
    );
  }
  