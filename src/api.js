const API_KEY = "AIzaSyBQpdCj3xGqyo5yS27N76aH3kjlnl0-0gk";
const URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const header = {
  "x-goog-api-key": API_KEY,
  "Content-Type": "application/json",
};

export default async function getResponse(userInput) {
  const data = {
    system_instruction: {
      parts: [
        {
          text: "You are a Data Structure and Algorithm Instructor. Reply question in short and easy to understand and if the question is not related to Data structure and algorithm reply him rudely.",
        },
      ],
    },
    contents: [
      {
        parts: [{ text: userInput }],
      },
    ],
  };

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "x-goog-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
