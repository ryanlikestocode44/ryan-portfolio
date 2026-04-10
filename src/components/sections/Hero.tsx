import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import { TypeAnimation } from "react-type-animation";
import profileImg from "@/assets/img/ryan-profile.png";
import type { FC } from "react";

const Hero: FC = () => {
  const cvLink =
    "https://drive.google.com/file/d/1fTv7tUcEoT0Q1lGAzw6EchFr8BDBIwNs/view?usp=drive_link";

  const downloadFile = () => {
    window.location.href = cvLink;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
        {/* MOBILE: Profile image + Content side by side */}
        <div className="md:hidden flex flex-col items-start gap-6 mb-8">
          {/* Profile Image - Circle on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl"
          >
            <img
              src={profileImg}
              alt="Ryan Nicholas Purba"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              draggable={false}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="icy-text"
              >
                Hi! I'm <br />
              </motion.h1>
              <TypeAnimation
                sequence={[
                  "Ryan Nicholas Purba", // Main name
                  1500, // Pause
                  "Frontend Developer", // Role 1
                  1000,
                  "Digital Designer", // Role 2
                  1000,
                  () => {} // Infinite loop
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                cursor={true}
                className="type-animation text-lg sm:text-2xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl leading-relaxed max-w-lg dark:text-[#b3c4cc] text-[#040f0f] font-light backdrop-blur-sm"
              >
                Crafting{" "}
                <span className="font-semibold dark:text-[#75f0db] text-[#57737a]">
                  pixel-perfect
                </span>{" "}
                digital experiences with clean code and modern design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                onClick={downloadFile}
                variant="primary"
                size="lg"
                className="cursor-pointer group inline-flex items-center shadow-lg hover:shadow-xl backdrop-blur-xl"
              >
                <span className="font-bold tracking-wide">Download My CV</span>
                <motion.span
                  className="ml-2 w-6 h-6 flex items-center justify-center transition-all duration-300"
                  animate={{
                    scale: [1, 1.5, 1],
                    y: [0, -1, 0]
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaFileDownload className="download-fa-icon" />
                </motion.span>
              </Button>

              <div className="flex justify-center space-x-3 sm:space-x-4">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/ryanlikestocode44"
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/ryan-nicholas-purba/"
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/ryan_nicholas.44/"
                  }
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="link-button"
                  >
                    <Icon className="text-[#040F0F] dark:text-[#ebfeff] text-xl transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="icy-text text-4xl lg:text-5xl"
              >
                Hi! I'm <br />
              </motion.h1>
              <TypeAnimation
                sequence={[
                  "Ryan Nicholas Purba", // Main name
                  1500, // Pause
                  "Frontend Developer", // Role 1
                  1000,
                  "Digital Designer", // Role 2
                  1000,
                  () => {} // Infinite loop
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                cursor={true}
                className="type-animation text-2xl lg:text-3xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl leading-relaxed max-w-lg dark:text-[#b3c4cc] text-[#040f0f] font-light backdrop-blur-sm"
              >
                Crafting{" "}
                <span className="font-semibold dark:text-[#75f0db] text-[#57737a]">
                  pixel-perfect
                </span>{" "}
                digital experiences with clean code and modern design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                onClick={downloadFile}
                variant="primary"
                size="lg"
                className="cursor-pointer group inline-flex items-center shadow-2xl hover:shadow-2xl hover:scale-[1.02] backdrop-blur-xl"
              >
                <span className="font-bold tracking-wide">Download My CV</span>
                <motion.span
                  className="ml-2 w-6 h-6 flex items-center justify-center transition-all duration-300"
                  animate={{
                    scale: [1, 1.5, 1],
                    y: [0, -1, 0]
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaFileDownload className="download-fa-icon" />
                </motion.span>
              </Button>

              <div className="flex space-x-3 sm:space-x-4">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/ryanlikestocode44"
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/ryan-nicholas-purba/"
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/ryan_nicholas.44/"
                  }
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="link-button"
                  >
                    <Icon className="text-[#040F0F] dark:text-[#ebfeff] text-xl transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full h-[300px] lg:h-[500px] group relative overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Ryan Nicholas Purba"
              className="profile-image"
              loading="eager"
              fetchPriority="high"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
