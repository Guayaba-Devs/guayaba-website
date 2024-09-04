import { Button, Link } from "@nextui-org/react";

const HomeComponent = () => {
  const isVideo = false;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/path-to-your-video.mp4"
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg"
          alt="Background"
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">
          Guayaba <span className="text-orange-400">Devs</span>
        </h1>
        <p className="text-lg font-light">Comunidad de Tecnología</p>

        <div className="flex gap-2 mt-2">
          <Button
            as={Link}
            isIconOnly
            isExternal
            className=""
            aria-label="Github"
            href="https://github.com/Guayaba-Devs"
          >
            <i className="fa-brands fa-github"></i>
          </Button>

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
        </div>
      </div>

      {/* Fondo oscuro semitransparente si se necesita superponer texto */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
    </div>
  );
};

export default HomeComponent;
