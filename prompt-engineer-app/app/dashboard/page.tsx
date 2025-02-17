'use client';
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Prompt {
  id: string;
  text: string;
}

export default function DashboardPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "prompts"));
        const promptsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Prompt[];
        setPrompts(promptsData);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };
    fetchPrompts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "prompts", id));
      setPrompts(prompts.filter((prompt) => prompt.id !== id));
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Prompt Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {prompts.length > 0 ? (
          prompts.map((prompt) => (
            <div key={prompt.id} className="p-4 border rounded">
              <p>{prompt.text}</p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => handleDelete(prompt.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No prompts found. Add a prompt to get started!</p>
        )}
      </div>
    </div>
  );
}
