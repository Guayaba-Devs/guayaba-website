import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import bgVideo from "/bg.mp4";

const HomeComponent = () => {
  const isVideo = true;

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {isVideo ? (
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ) : (
        <motion.img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg"
          alt="Background"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          whileHover={{ scale: 1.2 }}
          viewport={{ once: false }}
        >
          Guayaba <span className="text-orange-400">Devs</span>
        </motion.h1>

        <motion.p
          className="text-lg font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: false }}
        >
          Comunidad de Tecnología
        </motion.p>

        <div className="flex gap-2 mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: false }}
          >
            <Button
              as={Link}
              isIconOnly
              isExternal
              aria-label="Github"
              href="https://github.com/Guayaba-Devs"
            >
              <i className="fa-brands fa-github"></i>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            viewport={{ once: false }}
          >
            <Button
              as={Link}
              isIconOnly
              className="text-purple-800"
              isExternal
              aria-label="Discord"
              href="https://discord.gg/EZ4mqexd"
            >
              <i className="fa-brands fa-discord"></i>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-50 z-0" />
    </div>
  );
};

export default HomeComponent;
