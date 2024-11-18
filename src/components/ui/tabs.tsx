import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type Tab = {
  id: string;
  label: string;
  onClick: () => void;
}

export type Tabs = {
  tabs: Tab[];
  activeTab?: string;
  setActiveTab?: (id: string) => void;
}

export default function Tabs({ tabs, activeTab: active }: Tabs) {
  let [activeTab, setActiveTab] = useState(active ?? tabs[0].id);

  useEffect(() => {
    setActiveTab(active ?? tabs[0].id);
  }, [active]);

  const handleTab = (id: string) => {
    setActiveTab(id);
    tabs.find((tab) => tab.id === id)?.onClick();
  }

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-secondary/80" : "hover:text-foreground/80"
          } relative rounded-full px-3 py-1.5 transition focus-visible:outline-2 text-base`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-secondary mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
