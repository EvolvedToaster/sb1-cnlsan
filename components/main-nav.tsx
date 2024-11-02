"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, BarChart2, Globe2, Settings, AlertCircle } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/overview",
      label: "Overview",
      icon: BarChart2,
      active: pathname === "/overview",
    },
    {
      href: "/performance",
      label: "Performance",
      icon: Globe2,
      active: pathname === "/performance",
    },
    {
      href: "/url-inspection",
      label: "URL Inspection",
      icon: Search,
      active: pathname === "/url-inspection",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
    {
      href: "/security",
      label: "Security",
      icon: AlertCircle,
      active: pathname === "/security",
    },
  ];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <Search className="h-6 w-6" />
          <span className="text-lg font-semibold">Search Console</span>
        </div>
        <nav className="flex items-center space-x-6 px-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <route.icon className="h-4 w-4" />
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}