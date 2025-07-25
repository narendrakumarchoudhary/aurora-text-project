import React from "react";
import { cn } from "../lib/utils"; // adjust import path if needed

export interface AuroraTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blurAmount?:
    | "blur-none"
    | "blur-sm"
    | "blur-md"
    | "blur-lg"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl"
    | string;
  animationSpeed?: {
    border?: number;
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
}

export function AuroraText({
  text,
  className,
  textClassName,
  fontSize = "clamp(3rem, 8vw, 7rem)",
  colors = {
    first: "bg-cyan-600",
    second: "bg-pink-400",
    third: "bg-green-400",
    fourth: "bg-purple-600",
  },
  blurAmount = "blur-lg",
  animationSpeed = {
    border: 1.1,
    first: 2,
    second: 2,
    third: 1,
    fourth: 2.5,
  },
}: AuroraTextProps) {
  return (
  <div
  className={cn(
    "bg-white dark:bg-black flex items-center justify-center",
    className
  )}
>


      <div className="text-center">
        <h1 className={cn("font-extrabold tracking-tight relative overflow-hidden text-black dark:text-white", textClassName)} style={{ fontSize }}>
          {text}
          <div className="absolute inset-0 z-10 mix-blend-lighten dark:mix-blend-darken pointer-events-none">
            {/* 4 aurora layers */}
            {["first", "second", "third", "fourth"].map((key, i) => (
              <div
                key={key}
                className={cn(
                  "absolute w-[60vw] h-[60vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter mix-blend-overlay",
                  colors[key as keyof typeof colors],
                  blurAmount
                )}
                style={{
                  animationName: `aurora-border, aurora-${i + 1}`,
                  animationDuration: `${animationSpeed.border}s, ${animationSpeed[key as keyof typeof animationSpeed]}s`,
                  animationTimingFunction: "ease-in-out, ease-in-out",
                  animationIterationCount: "infinite, infinite",
                  animationDirection: "normal, alternate",
                }}
              />
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
}
