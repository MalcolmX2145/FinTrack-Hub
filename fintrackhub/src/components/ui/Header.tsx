// src/components/ui/navbar.tsx
"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { useAuth } from "@/lib/hooks/useAuth";

export function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  const userName = user?.user_metadata?.name || user?.email;

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <span className="text-xl font-bold text-gray-900 dark:text-white">FinTrack Hub</span>
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button
              onClick={async () => {
                await signOut();
                window.location.href = "/login";
              }}
              className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded shadow hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition"
            >
              Logout
            </button>
          )}
          <ModeToggle />
          {isAuthenticated && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{userName}</span>
          )}
        </div>
      </div>
  </header>
  );
}


