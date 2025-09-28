// src/components/ui/card.tsx
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div className={cn("mb-2", className)} {...props} />
  );
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h2 className={cn("text-lg font-semibold", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={cn("", className)} {...props} />
  );
}

export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div className={cn("mt-2 text-gray-500 text-sm", className)} {...props} />
  );
}
