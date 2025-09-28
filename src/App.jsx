import "./App.css";
import QueryBox from "./components/QueryBox";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="text-center py-6">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-sm">
          Welcome to <span className="text-blue-600">DSA Instructor</span>
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Your personal guide for Data Structures & Algorithms
        </p>
      </header>
      <main>
        <QueryBox />
      </main>
    </div>
  );
}

export default App;
