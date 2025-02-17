'use client';
import { useState } from "react";

type LLMType = "DeepSeek R1" | "OpenAI GPT-3.5" | "Hugging Face";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [selectedLLM, setSelectedLLM] = useState<LLMType>("DeepSeek R1");

  const saveSettings = () => {
    localStorage.setItem("apiKey", apiKey);
    localStorage.setItem("selectedLLM", selectedLLM);
    alert("Settings saved!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-4">
        <div>
          <label className="block">API Key</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        <div>
          <label className="block">Default LLM</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedLLM}
            onChange={(e) => setSelectedLLM(e.target.value as LLMType)}
          >
            <option value="DeepSeek R1">DeepSeek R1</option>
            <option value="OpenAI GPT-3.5">OpenAI GPT-3.5</option>
            <option value="Hugging Face">Hugging Face</option>
          </select>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={saveSettings}
        >
          Save
        </button>
      </div>
    </div>
  );
}
