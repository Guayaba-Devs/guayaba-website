import { Button, Image } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Josafat Jimenez",
    area: "Fullstack Developer & Devops",
    role: "Fundador",
    image:
      "https://avatars.githubusercontent.com/u/88176494?s=400&u=6b5abccfe8c982218614bfe752803c8bb28536a9&v=4",
  },
  {
    name: "Ian Vega",
    area: "Fullstack Developer & Mobile Developer",
    role: "Fundador",
    image: "https://avatars.githubusercontent.com/u/94271969?v=4",
  },
  {
    name: "Ivan Ramirez",
    area: "Fullstack Developer",
    role: "Co-fundador",
    image: "https://avatars.githubusercontent.com/u/47402911?v=4",
  },
];

const CommunitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - cardsPerView : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.8 },
  };

  return (
    <section className="relative w-screen bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h2
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Nuestro <span className="text-orange-400">Team</span>
        </motion.h2>
        <p className="text-lg font-light mb-8">
          Conoce a los talentosos miembros de Guayaba Devs.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <Button
          isIconOnly={true}
          onClick={handlePrev}
          className="absolute z-50 left-0 bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500"
        >
          &#8592;
        </Button>

        {/* Carrusel */}
        <div className="flex overflow-hidden w-full justify-center">
          <AnimatePresence initial={false} mode="wait">
            {teamMembers
              .slice(currentIndex, currentIndex + cardsPerView)
              .map((member, index) => (
                <motion.div
                  className="mx-4 bg-gray-800 rounded-xl shadow-lg p-6"
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  style={{ minWidth: "250px" }}
                  viewport={{ once: false }}
                >
                  <div className="relative w-full flex justify-center mb-5">
                    {/* Imagen del usuario */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full"
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.area}</p>

                    <Button className="mt-3 text-sm bg-orange-400 text-white rounded-md p-1">
                      {member.role}
                    </Button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <Button
          isIconOnly={true}
          onClick={handleNext}
          className="absolute right-0 bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500"
        >
          &#8594;
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;
