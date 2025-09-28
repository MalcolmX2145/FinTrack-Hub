
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Navbar } from "@/components/ui/navbar";


  const { user } = useAuth();
export default function Home() {
  // ...existing code...
  <>
      <Navbar userName={user?.user_metadata?.display_name || user?.user_metadata?.name || undefined} />
        <h1 className="text-4xl font-bold mb-4">Welcome to FinTrack Hub</h1>
        <p className="text-lg text-gray-600 mb-8">Track stocks, ETFs, bonds, and crypto in one place.</p>
        {/* Add your custom homepage content here */}
  </>
}

