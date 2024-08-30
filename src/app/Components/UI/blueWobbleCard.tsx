"use client";

import React from "react";
import { WobbleCard } from "./wobble-card";
import { cn } from "@/app/utils";

export const BlueWobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <WobbleCard
      containerClassName={cn("bg-blue-600", containerClassName)}
      className={className}
    >
      {children}
    </WobbleCard>
  );
};