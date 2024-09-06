import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
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
  {
    name: "Lizette Leal",
    area: "Diseño gráfico",
    role: "Diseño",
    image: "/liz.jpg",
  },
  {
    name: "Erick Gutierrez",
    area: "Marketing",
    role: "Fotografía",
    image: "/mike.jpg",
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
      prevIndex + cardsPerView >= teamMembers.length ? 0 : prevIndex + 1
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
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section className="relative w-screen bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h2
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
          onClick={() => paginate(-1)}
          className="absolute z-50 left-0 bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500"
        >
          &#8592;
        </Button>

        {/* Carrusel */}
        <div className="flex overflow-hidden w-full justify-center">
          {teamMembers
            .slice(currentIndex, currentIndex + cardsPerView)
            .map((member, index) => (
              <motion.div
                key={member.name}
                className="mx-4 bg-gray-800 rounded-xl shadow-lg p-6"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ minWidth: "250px" }}
                layout
              >
                <div className="relative w-full flex justify-center mb-5">
                  {/* Imagen del usuario */}
                  <img
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
        </div>

        <Button
          isIconOnly={true}
          onClick={() => paginate(1)}
          className="absolute right-0 bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500"
        >
          &#8594;
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;
