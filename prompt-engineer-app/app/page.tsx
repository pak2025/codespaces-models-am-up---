// File: app/page.tsx
// Purpose: Main landing page for the Prompt Engineer App
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Prompt Engineer App</h1>
                  <p className="text-lg mb-8">
                          Welcome to the Prompt Engineer App! Save, refine, and execute prompts with ease.
                                </p>
                                      <div className="space-y-4">
                                              <Link
                                                        href="/dashboard"
                                                                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                                                          >
                                                                                    Go to Dashboard
                                                                                            </Link>
                                                                                                    <Link
                                                                                                              href="/settings"
                                                                                                                        className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                                                                                                                                >
                                                                                                                                          Settings
                                                                                                                                                  </Link>
                                                                                                                                                        </div>
                                                                                                                                                            </div>
                                                                                                                                                              );
                                                                                                                                                              }