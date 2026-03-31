import { motion } from "framer-motion";
import type { FC } from "react";

interface Hobby {
  title: string;
  image: string;
  color: string;
}

const hobbies: Hobby[] = [
  {
    title: "Gaming",
    image: "https://via.placeholder.com/300x300/6366f1/ffffff?text=Gaming",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Workout",
    image: "https://via.placeholder.com/300x300/ec4899/ffffff?text=Workout",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Coding",
    image: "https://via.placeholder.com/300x300/10b981/ffffff?text=Coding",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Photography",
    image: "https://via.placeholder.com/300x300/f59e0b/ffffff?text=Photo",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Music",
    image: "https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Music",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Travel",
    image: "https://via.placeholder.com/300x300/06b6d4/ffffff?text=Travel",
    color: "from-cyan-500 to-sky-500",
  },
];

const Hobbies: FC = () => {
  return (
    <section id="hobbies" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Hobbies & Interests
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 cursor-pointer hover:border-white/40 transition-all duration-500 aspect-square"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Image */}
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-white drop-shadow-lg"
                >
                  {hobby.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
