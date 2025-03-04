"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";
import React from "react";

const RunButton = () => {
  const { user } = useUser();
  const { language, isRunning, executionResult, runCode } =
    useCodeEditorStore();

  const handleRun = async () => {
    await runCode();

    // TODO: save the result in the database
  };

  return (
    <motion.button
      onClick={handleRun}
      disabled={isRunning}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
    group relative inline-flex items-center gap-2.5 px-5 py-2.5
    disabled:cursor-not-allowed
    focus:outline-none
  `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg opacity-100 transition-opacity group-hover:opacity-90" />

      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <div className="relative">
              <Loader2 className="w-4 h-4 animate-spin text-white/70" />
              <div className="absolute inset-0 blur animate-pulse" />
            </div>
            <span className="text-sm font-medium text-white/90">
              Executing...
            </span>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export default RunButton;
