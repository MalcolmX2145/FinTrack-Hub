"use client";

import AuthGuard from "@/components/auth/AuthGuard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your dashboard. Here you’ll see your portfolio, gains/losses, and recent activity once we hook everything up.
        </p>
      </div>
    </AuthGuard>
  );
}
