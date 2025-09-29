// src/components/ui/Footer.tsx
"use client";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-300">
        <span>&copy; {new Date().getFullYear()} FinTrack Hub. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/about" className="hover:underline">About</a>
        </div>
      </div>
    </footer>
  );
}
