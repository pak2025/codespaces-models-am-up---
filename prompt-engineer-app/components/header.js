// File: components/Header.js
// Purpose: Header component for navigation
import Link from "next/link";

export default function Header() {
  return (
      <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Prompt Engineer App</h1>
                            <nav>
                                      <ul className="flex space-x-4">
                                                  <li>
                                                                <Link href="/dashboard" className="hover:underline">
                                                                                Dashboard
                                                                                              </Link>
                                                                                                          </li>
                                                                                                                      <li>
                                                                                                                                    <Link href="/prompt-management" className="hover:underline">
                                                                                                                                                    Prompt Management
                                                                                                                                                                  </Link>
                                                                                                                                                                              </li>
                                                                                                                                                                                          <li>
                                                                                                                                                                                                        <Link href="/chat" className="hover:underline">
                                                                                                                                                                                                                        AI Dialogue
                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                              <li>
                                                                                                                                                                                                                                                                            <Link href="/settings" className="hover:underline">
                                                                                                                                                                                                                                                                                            Settings
                                                                                                                                                                                                                                                                                                          </Link>
                                                                                                                                                                                                                                                                                                                      </li>
                                                                                                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                                                                                                                        </nav>
                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                  </header>
                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                    }