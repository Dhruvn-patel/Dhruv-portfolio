"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { AnimatedServiceCard } from "../home/ui/AnimatedServiceCard";

export const HoverLayoutGrid = ({ cards, className }: { cards: any[]; className?: string }) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 sm:mt-12 lg:mt-16 gap-3 sm:gap-4",
        className
      )}
    >
      {cards.map((item, idx) => (
        <div key={item?.id} className="relative group block p-2 h-full w-full cursor-pointer">
          <AnimatedServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};
