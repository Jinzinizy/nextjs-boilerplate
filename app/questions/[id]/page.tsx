
export default async function QuestionPage({ params }: { params: { id: string } }) {
  const { id } = params; // Extract id from the URL params

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Question {id}</h1>
    </div>
  );
}
