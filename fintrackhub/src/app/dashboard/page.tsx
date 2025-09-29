"use client";


import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import AuthGuard from "@/components/auth/AuthGuard";


import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

export default function DashboardPage() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const router = useRouter();
  


  return (
    <AuthGuard>
      <Header />
      <div className="w-full flex flex-col">
        <div className="w-full bg-background dark:bg-background mt-16 px-6 py-4 rounded-md shadow">
          <NavigationMenu className="w-full" style={{width: '100%'}}>
            <NavigationMenuList className="w-full flex justify-start gap-2 border-b border-gray-700 dark:border-gray-200">
            {[
              { href: "/dashboard", label: "Overview" },
              { href: "/dashboard/portfolio", label: "Portfolio" },
              { href: "/dashboard/stocks", label: "Stocks" },
              { href: "/dashboard/etfs", label: "ETFs" },
              { href: "/dashboard/cryptocurrencies", label: "Cryptocurrencies" }
            ].map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    className={
                      `px-4 py-2 font-semibold text-base transition-colors duration-200 ` +
                      (isActive
                        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-600/5 dark:hover:bg-blue-400/5 border-b-2 border-transparent")
                    }
                    style={{
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid"
                    }}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="min-h-screen flex flex-col mt-8">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
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
        </div>
        {/* Watchlist and Activity sections removed as requested */}
      </div>
    </AuthGuard>
  );
}
