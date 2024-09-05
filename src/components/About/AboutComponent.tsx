import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const AboutComponent = () => {
  return (
    <section className="relative w-screen bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          Sobre <span className="text-orange-400">Nosotros</span>
        </motion.h2>

        <motion.p
          className="text-center sm:text-md text-lg mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          En Guayaba Devs, somos una comunidad apasionada por la tecnología,
          iniciada por estudiantes de sistemas computacionales. Nuestra misión
          es conectar, colaborar y aprender juntos, apoyando el crecimiento
          personal y profesional de cada miembro.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="w-full h-max sm:w-1/3 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <Card isHoverable isPressable className="p-6 bg-slate-100">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-orange-400">
                  Nuestra Historia
                </h3>
              </CardHeader>
              <CardBody>
                <p>
                  Comenzamos en 2022 como Escihu Wizards, un grupo de
                  estudiantes entusiastas que evolucionó hacia una comunidad
                  inclusiva y diversa.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="w-full h-max sm:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <Card isHoverable isPressable className="p-6 bg-slate-100">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-orange-400">
                  Nuestra Misión
                </h3>
              </CardHeader>
              <CardBody>
                <p>
                  Fomentamos el aprendizaje continuo y la colaboración para que
                  todos nuestros miembros alcancen sus metas en el mundo de la
                  tecnología.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="w-full h-max sm:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <Card isHoverable isPressable className="p-6 bg-slate-100">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-orange-400">
                  Nuestra Comunidad
                </h3>
              </CardHeader>
              <CardBody>
                <p>
                  Con diversas sedes y un enfoque global, Guayaba Devs es más
                  que una comunidad: es un espacio para el crecimiento y la
                  innovación.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
