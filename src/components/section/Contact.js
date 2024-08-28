import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../ContactForm";

const Contact = ({ reference }) => {
  return (
    <section ref={reference} id="contact" className="relative bg-jet min-h-screen w-full px-8 lg:px-9 py-4 lg:py-14 snap-center flex flex-col justify-center">
      <div className="absolute top-4 lg:top-14 rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-xs lg:text-base">CONTACT</p>
      </div>
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        CONTACT <span className="text-platinum">ME</span>
      </p>
      <div className="w-full h-[80%] flex flex-col lg:flex-row gap-4 lg:gap-0 lg:mb-12 lg:justify-between">
        <div className="lg:w-[30%] h-[10%] lg:h-full flex lg:flex-col gap-4">
          <div onClick={() => (window.location.href = "mailto:aldocahyadi28@gmail.com")} className="hover:cursor-pointer w-[30%] h-full lg:w-full  bg-platinum rounded-2xl flex flex-col items-center justify-evenly">
            <FontAwesomeIcon icon={faEnvelope} className="text-eerie-black size-6 lg:size-8" />
            <p className="hidden lg:block font-display text-[6px] lg:text-sm text-eerie-black">aldocahyadi28@gmail.com</p>
          </div>
          <div onClick={() => (window.location.href = "https://wa.me/6285174241330")} className="hover:cursor-pointer w-[30%] h-full lg:w-full  bg-platinum rounded-2xl flex flex-col items-center justify-evenly">
            <FontAwesomeIcon icon={faWhatsapp} className="text-eerie-black size-6 lg:size-8" />
            <p className="hidden lg:block font-display text-[6px] lg:text-sm text-eerie-black">+6285174241330</p>
          </div>
          <div onClick={() => (window.location.href = "https://www.google.com/maps/place/Surabaya,+East+Java/@-7.2755897,112.5478708,11z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fbf8381ac47f:0x3027a76e352be40!8m2!3d-7.2574719!4d112.7520883!16zL20vMDFmNHhk?entry=ttu")} className="hover:cursor-pointer w-[30%] h-full lg:w-full  bg-platinum rounded-2xl flex flex-col items-center justify-evenly">
            <FontAwesomeIcon icon={faLocationDot} className="text-eerie-black size-6 lg:size-8" />
            <p className="hidden lg:block font-display text-[6px] lg:text-sm text-eerie-black">Surabaya, Indonesia</p>
          </div>
        </div>
        <ContactForm  />
      </div>
      <footer className="absolute bottom-0 left-0 bg-onyx w-full h-16 lg:h-20 flex items-center justify-center">
        <p className="text-platinum text-base">© Copyright {new Date().getFullYear()} Aldo Octavio Cahyadi</p>
      </footer>
    </section>
  );
};

export default Contact;
