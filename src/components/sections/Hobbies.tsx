import { motion } from "framer-motion";
import HobbyCard from "@/components/ui/HobbyCard";
import { hobbiesData } from "@/data/hobbies";
import type { FC } from "react";

const Hobbies: FC = () => {
  return (
    <section id="hobbies" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-16 md:mb-18"
        >
          Hobbies & Interests
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <HobbyCard key={hobby.title} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
