import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Nav() {
  const [isExpanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const location = useLocation();

  return (
    <div
      className={`navbar ${
        isExpanded ? "expanded" : ""
      } sm:bg-pizita bg-pizitaCel text-tono5 font-gothamBI fixed w-screen z-30 pr-3 flex items-start`}
      onMouseEnter={() => {
        setExpanded(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
        setIsHovered(false);
      }}
    >
      <div className="flex py-2 px-3 w-screen justify-between">
        <a className="flex justify-start sm:flex-row flex-col" href="/">
          {/* Agregar la imagen a la izquierda */}
          {/* <img
            className="w-12 hover:scale-125 transition duration-300 ease-in-out transform "
            src={}
            alt="wholesale logo"
          /> */}
        </a>
        <div className="sm:flex-row flex-col sm:contents hidden">
          {/* Elementos principales alineados a la derecha */}
          <div className="flex  gap-6 justify-end mt-1 ">
            {location.pathname !== "/" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/"
              >
                Inicio
              </a>
            )}
            {location.pathname !== "/contacto" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/contacto"
              >
                Contacto
              </a>
            )}
            {location.pathname !== "/acercaDe" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/acercaDe"
              >
                Nosotros
              </a>
            )}
            <a
              className="hover:scale-110 transition pointer duration-300 ease-in-out transform"
              href="https://app.holded.com/login?lang=es"
              target="_blank"
              rel="noreferrer"
            >
              Ingresar
            </a>
            

            <div className="grid grid-cols-2 gap-3">
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col contents sm:hidden">
          {/* Elementos principales alineados a la derecha */}
          <div className="flex flex-col gap-6 justify-end mt-1 ">
            {!isHovered && (
              <i className="fa-solid fa-grip-lines flex justify-center ml-12 mt-1"></i>
            )}
            {location.pathname !== "/" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/"
              >
                Inicio
              </a>
            )}
            {location.pathname !== "/contacto" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/contacto"
              >
                Contacto
              </a>
            )}
            {location.pathname !== "/acercaDe" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/acercaDe"
              >
                Nosotros
              </a>
            )}
            <a
              className="hover:scale-110 transition pointer duration-300 ease-in-out transform flex justify-end"
              href="https://app.holded.com/login?lang=es"
              target="_blank"
              rel="noreferrer"
            >
              Ingresar
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
