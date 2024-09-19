import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';



// Helper function to get the question data
async function getQuestionData(id: string) {
  // Dynamically resolve the path relative to the project root
  const questionsDirectory = path.join(process.cwd(), 'app/questions/content'); // Adjust the path if the structure is different
  const filePath = path.join(questionsDirectory, `${id}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  // Read the file content and convert from Markdown to HTML
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const content = marked(fileContents);
  return { id, content };
}

// Page component for dynamic question page
export default async function QuestionPage({ params }: { params: { id: string } }) {
  const { id } = params; // Extract id from the URL params
  const questionData = await getQuestionData(id);

  // Handle 404 if question is not found
  if (!questionData) {
    notFound(); // Return a 404 page if the markdown file is missing
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Question {id}</h1>
      <div dangerouslySetInnerHTML={{ __html: questionData.content }} /> {/* Render Markdown content */}
    </div>
  );
}
