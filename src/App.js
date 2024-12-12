import "./App.css";
import logo from "./icons/logo.webp";
import site1 from "./images/Site1.webp";
import site2 from "./images/Site2.webp";
import site3 from "./images/Site3.webp";
import site4 from "./images/Site4.webp";
import site5 from "./images/Site5.webp";
import site6 from "./images/Site6.webp";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Site from "./Site";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(null);

  const clientNum = 3;
  const packageNum = 4;

  const modalInfo = [
    `We have successfully built fully functional websites for ${clientNum} satisfied clients.`,
    `We provide ${packageNum} web development packages. For more information about our packages, please feel free to contact us via our social media handles.`,
    `We have successfully completed a total of ${data.length} web projects, including both client work and personal projects.`,
  ];

  function showModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function resetModal() {
    closeModal();
    setInfo(null);
  }

  return (
    <main>
      {/* Header */}

      <div>
        <div>
          <span>Portfolio</span>
        </div>
      </div>

      <div>
        {/* Intro Block */}

        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <div
              onClick={() => {
                showModal();
                setInfo(modalInfo[0]);
              }}
            >
              <span>{clientNum}</span>
              <span>clients</span>
            </div>
            <div
              onClick={() => {
                showModal();
                setInfo(modalInfo[1]);
              }}
            >
              <span>{packageNum}</span>
              <span>packages</span>
            </div>
            <div
              onClick={() => {
                showModal();
                setInfo(modalInfo[2]);
              }}
            >
              <span>{data.length}</span>
              <span>projects</span>
            </div>
          </div>
          <div>
            <span>Jim's Art</span>
            <span>Bringing your ideas into reality</span>
            <div>
              <a href="https://facebook.com/JimsArtUSA" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/jimsart.usa" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://wa.me/2349117091195" target="_blank">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Content Block */}

        <div>
          {data.map((item, index) => {
            return (
              <Site
                image={item.image}
                link={item.link}
                key={"site-" + (index + 1)}
              />
            );
          })}
        </div>

        {/* Modal */}

        {modal ? (
          <div
            onClick={(e) =>
              e.target === e.currentTarget ? resetModal() : null
            }
          >
            <div>
              <p>
                {info === null
                  ? "Unable to process request. Please try again later."
                  : info}
              </p>
              <div onClick={() => resetModal()}>
                <IoMdCloseCircle />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
