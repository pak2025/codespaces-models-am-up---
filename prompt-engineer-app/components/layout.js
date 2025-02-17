// File: components/Layout.js
// Purpose: Layout component to wrap pages with a header
import Header from "./Header";

export default function Layout({ children }) {
  return (
      <div>
            <Header />
                  <main className="p-4">{children}</main>
                      </div>
                        );
                        }