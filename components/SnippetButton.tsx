"use client";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SnippetButton = () => {
  const pathname = usePathname();

  const snippetPage = pathname.includes("/snippets");
  return (
    <Link
      href="/snippets"
      className={`${snippetPage ? "hidden" : ""} relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10  border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
      <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
        Snippets
      </span>
    </Link>
  );
};

export default SnippetButton;
