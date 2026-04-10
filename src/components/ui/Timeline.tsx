import { Children } from "react";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TimelineProps } from "@/types";

const Timeline: FC<TimelineProps> = ({
  children,
  lineColor = "from-[#040f0f] to-[#57737a] dark:from-[#c9fbff] dark:via-[#c2fcf7] dark:to-[#85bdbf]",
  className = ""
}) => {
  const items = Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {/* Top Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-3 bg-gradient-to-r from-[#040f0f] to-[#57737a] dark:from-[#c9fbff] dark:to-[#85bdbf] rounded-full shadow-md z-20" />

      {/* Timeline Line */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-5 bottom-5 w-0.5 bg-gradient-to-b ${lineColor} shadow-sm rounded-full z-10`}
      />

      {/* Bottom Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 bg-gradient-to-r from-[#040f0f] to-[#57737a] dark:from-[#c9fbff] dark:to-[#85bdbf] rounded-full shadow-md z-20" />

      {/* Timeline Items */}
      <div className="space-y-16 md:space-y-20 relative z-10 pt-12 pb-12">
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
