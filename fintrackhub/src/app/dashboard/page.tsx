"use client";


import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import AuthGuard from "@/components/auth/AuthGuard";

import { Navbar } from "@/components/ui/navbar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };

  return (
    <AuthGuard>
      <Navbar userName={user?.user_metadata?.display_name || user?.user_metadata?.name || "User"} />
      <div className="p-6 max-w-5xl mx-auto pt-24">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="mb-8 text-xl text-gray-800">
          Welcome, <span className="font-semibold">{user?.user_metadata?.display_name || user?.user_metadata?.name || "User"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$0.00</div>
            </CardContent>
            <CardFooter>Total value of your holdings</CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Movers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>Loading...</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Watchlist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>Loading...</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>No recent activity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthGuard>
  );
}
