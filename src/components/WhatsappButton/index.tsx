import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  const openWhatsApp = () => {
    // Coloca aquí el enlace de WhatsApp con el mensaje que deseas enviar
    window.open("https://api.whatsapp.com/send?phone=+56994947370&text=Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20ofrecidos%20en%20la%20p%C3%A1gina%20Web");
  };

  useEffect(() => {
    // Botón se muestra después de desplazarse 300 píxeles
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      {isVisible && (
        <div
          onClick={openWhatsApp}
          aria-label="Abrir WhatsApp"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-md"
        >
          <FaWhatsapp />
        </div>
      )}
    </div>
  );
}
