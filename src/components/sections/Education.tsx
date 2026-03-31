import { motion } from "framer-motion";
import { educationData } from "@/data/educations";
import type { FC } from "react";

const Education: FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education Journey
        </motion.h2>

        <div className="relative">
          {/* Slim Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#c9fbff] via-[#c2fcf7] to-[#85bdbf] shadow-md" />

          {/* Timeline Items - Tighter Spacing */}
          <div className="space-y-16 md:space-y-20">
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{
                  opacity: 0,
                  x: education.side === "right" ? -80 : 80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start justify-center gap-4 md:gap-8 ${
                  education.side === "right" ? "" : "flex-row-reverse"
                }`}
              >
                {/* Content - Compact */}
                <div
                  className={`${education.side === "right" ? "md:pr-3 text-right" : "md:pl-3 text-left"} flex-1 max-w-md`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Institution + GPA (University Only) */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {education.institution}
                      </h3>
                      {education.gpa && education.type === "university" && (
                        <span className="text-cyan-400 font-semibold text-lg bg-cyan-900/30 px-3 py-1 rounded-xl border border-cyan-400/30">
                          {education.gpa}
                        </span>
                      )}
                    </div>

                    {/* Degree & Period */}
                    <div className="mb-4">
                      <p className="text-cyan-300 font-semibold text-lg">
                        {education.degree}
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        {education.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {education.description}
                    </p>

                    {/* Type Badge */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          education.type === "school"
                            ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                            : education.type === "university"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                        }`}
                      >
                        {education.type === "school"
                          ? "High School"
                          : education.type === "university"
                            ? "University"
                            : "Bootcamp"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Compact Image */}
                <div
                  className={`${education.side === "right" ? "md:pl-2" : "md:pr-2"} flex-shrink-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80 relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-cyan-500/25 border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
                  >
                    <img
                      src={education.image}
                      alt={education.institution}
                      className="w-full h-full object-cover rounded-xl brightness-110 hover:brightness-120 transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
