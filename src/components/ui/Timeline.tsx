import { Children } from "react";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TimelineProps } from "@/types";

const Timeline: FC<TimelineProps> = ({
  children,
  lineColor = "from-[#040f0f] to-[#57737a] dark:from-[#c9fbff] dark:via-[#c2fcf7] dark:to-[#85bdbf]",
  className = "",
}) => {
  const items = Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {/* Vertical Timeline Line */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b ${lineColor} shadow-md rounded-full z-0`}
      />

      {/* Timeline Items */}
      <div className="space-y-16 md:space-y-20 relative z-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: Math.random() > 0.5 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

Timeline.displayName = "Timeline";

export default Timeline;
