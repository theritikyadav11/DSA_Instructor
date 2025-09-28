import { useState } from "react";
import getResponse from "../api.js";
import MessageBox from "./MessageBox.jsx";
import { PacmanLoader } from "react-spinners";

export default function QueryBox() {
  const [inputData, setInputData] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleInputChange(event) {
    let data = event.target.value;
    setInputData(data);
    setIsEnable(data.trim() !== "");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isEnable) return;

    setClicked(true);
    setLoading(true);
    setResponse("");

    try {
      const resp = await getResponse(inputData);
      const text = resp.candidates[0].content.parts[0].text;
      console.log("Response: ", text);
      setResponse(text);
    } catch (err) {
      console.error("Error fetching response:", err);
      setResponse("Error fetching response");
    }

    setInputData("");
    setIsEnable(false);
    setLoading(false);
    setClicked(false);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl items-center gap-3"
      >
        <input
          type="text"
          placeholder="Ask anything about DSA..."
          className="flex-1 p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          value={inputData}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={!isEnable || loading}
          className={`px-6 py-3 rounded-xl font-medium text-white text-lg transition-all shadow-md
            ${
              clicked ? "bg-blue-700 scale-95" : "bg-blue-500 hover:bg-blue-600"
            }
            ${!isEnable || loading ? "bg-gray-300 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      <div className="mt-6">
        {loading ? (
          <PacmanLoader color="black" loading={loading} size={20} />
        ) : (
          <MessageBox message={response} />
        )}
      </div>
    </div>
  );
}
