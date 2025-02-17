'use client';
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

interface Question {
  id: string;
  text: string;
}

export default function PromptManagementPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "preset-questions"));
        const questionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Question[];
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  const addQuestion = async () => {
    if (newQuestion.trim() === "") return;
    try {
      const docRef = await addDoc(collection(db, "preset-questions"), {
        text: newQuestion,
      });
      setQuestions([...questions, { id: docRef.id, text: newQuestion }]);
      setNewQuestion("");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const deleteQuestion = async (id: string) => {
    try {
      await deleteDoc(doc(db, "preset-questions", id));
      setQuestions(questions.filter((question) => question.id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Prompt Management</h1>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Add a new preset question"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <div className="mt-4">
          {questions.length > 0 ? (
            questions.map((question) => (
              <div key={question.id} className="p-4 border rounded mt-2">
                <p>{question.text}</p>
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No preset questions found. Add a question to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
}
