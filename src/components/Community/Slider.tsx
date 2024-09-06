import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Slider = () => {
  const controls = useAnimation();
  const sliderWidth = 100; // Ajustar según el contenido

  useEffect(() => {
    const cycleSlider = async () => {
      while (true) {
        await controls.start({ x: -sliderWidth, transition: { duration: 2 } });
        await controls.start({ x: 0, transition: { duration: 0 } });
      }
    };
    cycleSlider();
  }, [controls]);

  return (
    <div style={{ overflow: "hidden", width: "100vw" }}>
      <motion.div
        style={{
          display: "flex",
          width: `${sliderWidth}vw`,
          gap: "1rem",
        }}
        animate={controls}
      >
        <motion.div style={{ width: "100vw", backgroundColor: "lightblue" }}>
          Slide 1
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightgreen" }}>
          Slide 2
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 3
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 4
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 5
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 6
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 7
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 8
        </motion.div>
        <motion.div style={{ width: "100vw", backgroundColor: "lightcoral" }}>
          Slide 9
        </motion.div>
      </motion.div>
    </div>
  );
};
