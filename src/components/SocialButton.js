import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ social }) => {
  var element = null;
  var url = null;
  if (social === "instagram") {
    element = <FontAwesomeIcon icon={faInstagram} />;
    url = 'https://www.instagram.com/aldooctavio_/?hl=en';
  } else if (social === "facebook") {
    element = <FontAwesomeIcon icon={faFacebook} />;
    url = 'https://www.facebook.com/aldo.octaviocahyadi.5';
  } else if (social === "github") {
    element = <FontAwesomeIcon icon={faGithub} />;
    url = 'https://github.com/aldocahyadi30';
  } else if (social === "linkedin") {
    element = <FontAwesomeIcon icon={faLinkedin} />;
    url = 'https://www.linkedin.com/in/aldo-cahyadi-b649bb250/';
  }

  const buttonRef = useRef(null);
  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      
      
    }
  }, []);

  return (
    <div id="social-btn" className="social-btn rounded-full size-10 border border-platinum flex items-center justify-center hover:border-hunyadi-yellow">
      <a className="social-icon text-lg text-platinum " href={url} target="_blank" rel="noopener noreferrer">{element}</a>
    </div>
  );
};

export default SocialButton;
