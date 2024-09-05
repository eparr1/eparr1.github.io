"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/app/utils";

interface ButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx={30} ry={30}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
  [key: string]: any;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
  children,
  duration = 2000,
  rx = 30,
  ry = 30,
  ...otherProps
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
    
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <path
          d={`M ${rx} 0 L ${100 - rx} 0 Q 100 0 100 ${ry} L 100 ${100 - ry} Q 100 100 ${100 - rx} 100 L ${rx} 100 Q 0 100 0 ${100 - ry} L 0 ${ry} Q 0 0 ${rx} 0`}
          fill="none"
          stroke="transparent" // To make the path visible for debugging
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

