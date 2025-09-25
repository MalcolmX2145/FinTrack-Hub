"use client";


import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import AuthGuard from "@/components/auth/AuthGuard";

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>
        {user && (
          <div className="mb-4 text-lg text-gray-800">
            Hello, <span className="font-semibold">{user.user_metadata?.display_name || user.user_metadata?.name || "User"}</span>
          </div>
        )}
        <p className="text-gray-600">
          Welcome to your dashboard. Here you’ll see your portfolio, gains/losses, and recent activity once we hook everything up.
        </p>
      </div>
    </AuthGuard>
  );
}
