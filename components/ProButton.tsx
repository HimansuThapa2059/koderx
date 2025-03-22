"use client";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProButton = () => {
  const pathname = usePathname();

  const pricingPage = pathname.includes("/pricing");

  return (
    <Link
      href="/pricing"
      className={`${pricingPage ? "hidden" : ""} flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10  to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300`}
    >
      <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
      <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
        Pro
      </span>
    </Link>
  );
};

export default ProButton;
