import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button 
      onClick={() => {
        console.log("Tab clicked"); // Debugging log
        selectTab();
      }}
      type="button"
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
    >
      {children}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3 text-purple-600"
      />
    </button>
  );
};

export default TabButton;