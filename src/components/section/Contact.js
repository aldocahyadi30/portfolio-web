import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  function copyNumber() {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText("+6285174241330").then(() => {
        toast.success("Number copied to clipboard!");
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = "+6285174241330";
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      toast.success("Number copied to clipboard!");
    }
  }
  return (
    <section id="contact" className="relative bg-jet lg:bg-raisin-black sm:h-screen min-h-screen w-full px-8 lg:px-20 xl:px-24 py-8 lg:p-0 lg:py-24 xl:py-24 flex flex-col snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">CONTACT</p>
      </div>
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        CONTACT <span className="text-platinum">ME</span>
      </p>
      <div className="w-full h-full grid p-12 lg:p-0 gap-4 lg:gap-16 grid-cols-1 lg:grid-cols-2">
        <div onClick={() => (window.location.href = "mailto:aldocahyadi28@gmail.com")} className="hover:cursor-pointer w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faEnvelope} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">aldocahyadi28@gmail.com</p>
        </div>
        <div onClick={() => copyNumber()} className="hover:cursor-pointer w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faWhatsapp} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">+6285174241330</p>
        </div>
        <div onClick={() => (window.location.href = "https://www.linkedin.com/in/aldocahyadi")} className="hover:cursor-pointerw-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly">
          <FontAwesomeIcon icon={faLinkedin} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">Aldo Octavio Cahyadi</p>
        </div>
        <div
          onClick={() => (window.location.href = "https://www.google.com/maps/place/Surabaya,+East+Java/@-7.2755897,112.5478708,11z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fbf8381ac47f:0x3027a76e352be40!8m2!3d-7.2574719!4d112.7520883!16zL20vMDFmNHhk?entry=ttu")}
          className="hover:cursor-pointer w-full h-full border border-hunyadi-yellow rounded-2xl flex flex-col items-center justify-evenly"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-hunyadi-yellow size-8" />
          <p className="font-display text-sm text-platinum">Surabaya, Indonesia</p>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 bg-onyx w-full h-16 lg:h-20 flex items-center justify-center">
        <p className="text-platinum text-base">© Copyright {new Date().getFullYear()} Aldo Octavio Cahyadi</p>
      </footer>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </section>
  );
};

export default Contact;
