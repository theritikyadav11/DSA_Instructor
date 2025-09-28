import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function MessageBox({ message }) {
  if (!message) return null;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-6">
        <div className="text-gray-800 text-lg whitespace-pre-line">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {message}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
