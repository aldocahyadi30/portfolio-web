import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-jet lg:bg-raisin-black h-screen lg:min-h-screen w-full px-8 lg:px-20 xl:px-24 p-16 lg:p-0 lg:py-24 xl:py-24 flex flex-col snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">CONTACT</p>
      </div>
      <p className="font-display text-2xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        CONTACT <span className="text-platinum">ME</span>
      </p>
      <div className="w-full h-full grid p-8 lg:p-0 gap-4 lg:gap-16 grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faEnvelope} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">aldocahyadi28@gmail.com</p>
        </div>
        <div className="w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faWhatsapp} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">+6285174241330</p>
        </div>
        <div className="w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faLinkedin} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">Aldo Octavio Cahyadi</p>
        </div>
        <div className="w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faLocationDot} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">Surabaya, Indonesia</p>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 bg-onyx w-full h-16 lg:h-20 flex items-center justify-center">
        <p className="text-platinum text-base">© Copyright {new Date().getFullYear()} Aldo Octavio Cahyadi</p>
      </footer>
    </section>
  );
};

export default Contact;
