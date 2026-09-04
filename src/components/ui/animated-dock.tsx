"use client";

import React, { useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => twMerge(clsx(args));

export interface DockItemData {
  link?: string;
  onClick?: () => void;
  Icon: React.ReactNode;
  label?: string;
  target?: string;
  itemClassName?: string;
}

export interface AnimatedDockProps {
  className?: string;
  items: DockItemData[];
}

export const AnimatedDock: React.FC<AnimatedDockProps> = ({ className, items }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-20 items-center justify-center gap-3 sm:gap-4 rounded-3xl bg-white/[0.04] dark:bg-black/60 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-3 select-none",
        className
      )}
    >
      {items.map((item, index) => (
        <DockItem key={index} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
};

interface DockItemProps {
  mouseX: MotionValue<number>;
  item: DockItemData;
}

export const DockItem: React.FC<DockItemProps> = ({ mouseX, item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : { x: 0, width: 0 };
    return val - rect.x - rect.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 76, 44]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 160,
    damping: 14,
  });

  const iconScale = useTransform(width, [44, 76], [1, 1.45]);
  const iconSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 160,
    damping: 14,
  });

  const content = (
    <motion.div
      style={{ scale: iconSpring }}
      className="flex items-center justify-center w-full h-full text-white"
    >
      {item.Icon}
    </motion.div>
  );

  return (
    <div className="relative flex flex-col items-center">
      {/* Hover Tooltip Label */}
      <AnimatePresence>
        {isHovered && item.label && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -48, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none z-30 whitespace-nowrap px-3 py-1 rounded-lg bg-zinc-900/90 text-white font-mono text-[11px] font-semibold border border-white/20 shadow-xl backdrop-blur-md"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock Item Capsule */}
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-colors duration-200 border border-white/10 shadow-lg relative group",
          item.itemClassName || "bg-white/10 hover:bg-white/20 text-white"
        )}
      >
        {item.link ? (
          <a
            href={item.link}
            target={item.target}
            rel={item.target === "_blank" ? "noreferrer" : undefined}
            className="w-full h-full flex items-center justify-center text-white"
            aria-label={item.label}
          >
            {content}
          </a>
        ) : (
          <button
            type="button"
            onClick={item.onClick}
            className="w-full h-full flex items-center justify-center text-white cursor-pointer"
            aria-label={item.label}
          >
            {content}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedDock;
