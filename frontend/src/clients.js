import React, { useState } from "react";

import clients from "./bg/client.gif";
import manLocatew64 from "./_next/manlocatew64.png";
import manLocatew128 from "./_next/manlocatew128.png";

import NavBar from "./Component/NavBar";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";

import "./_next/static/css/Clients.css";

function Clients() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleClick1 = () => {
    setIsVisible1(!isVisible1);
  };
  const handleClick2 = () => {
    setIsVisible2(!isVisible2);
  };
  const handleClick3 = () => {
    setIsVisible3(!isVisible3);
  };
  const handleClick4 = () => {
    setIsVisible4(!isVisible4);
  };

  return (
    <div className="clients">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={clients}
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  height: "100vh",
                  width: "100vw",
                }}
                alt="Clients"
              />
              <svg
                id="wwrtopsvg"
                className="fill-[#14213d]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                ></path>
              </svg>
            </div>
            <div className="py-28">
              <h1 className="text-white text-5xl tracking-widest text-center font-extrabold">
                Клиенты
              </h1>
            </div>
            <div>
              <svg
                id="candidatesvgbottom"
                className="fill-[#14213d]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                ></path>
              </svg>
            </div>
          </div>
          <div className="md:w-full bg-[#FFFFFF]">
            <div className="md:w-[1080px] mx-auto pt-16 tracking-widest leading-loose">
              <h1 className="text-3xl font-semibold text-[#08131F] px-2 text-center">
                Magnet Recruit предоставляет широкий спектр услуг,
                ориентированных на удовлетворение ваших конкретных нужд и
                требований.
              </h1>
            </div>
            <div className="grid md:grid-cols-4 p-2 md:w-[1080px] gap-10 m-auto py-6 my-4 md:mb-12">
              <div className="px-6 mantine-h7ke5k">
                <div
                  className="mantine-Group-root mantine-w4rqhk"
                  justify="center"
                >
                  <h1
                    className="text-3xl my-4 text-center text-[#fca311] cursor-pointer flex hover:text-[#14213d] uppercase p-4 border shadow-xl h1-center"
                    onClick={handleClick1}
                  >
                    ЗНАНИЯ
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M24 24H0V0h24v24z"
                        opacity=".87"
                      ></path>
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                    </svg>
                  </h1>
                </div>
                <div
                  className={`mantine-1avyp1d ${
                    isVisible1 ? "visible-content" : "hidden-content"
                  }`}
                  aria-hidden={!isVisible1}
                >
                  <div
                    style={{
                      opacity: isVisible1 ? "1" : "0",
                      transition: "opacity 1000ms linear",
                    }}
                  >
                    <div className="mantine-Text-root mantine-1d564l0">
                      <div className="shadow-xl border p-4">
                        <div className="flex justify-center text-gray-600 text-sm py-4">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            viewBox="0 0 17 17"
                            height="40"
                            width="40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g></g>
                            <path d="M14.985 8.943l0.998 0.067c-0.263 3.92-3.55 6.99-7.483 6.99-4.136 0-7.5-3.364-7.5-7.5 0-3.905 3.047-7.19 6.938-7.479l0.074 0.997c-3.371 0.25-6.012 3.097-6.012 6.482 0 3.584 2.916 6.5 6.5 6.5 3.409 0 6.257-2.66 6.485-6.057zM17 7.499v0.5l-0.501 0.017h-7.482v-8.017l0.501 0.001c4.126 0.009 7.482 3.374 7.482 7.499zM15.986 7.016c-0.223-3.17-2.776-5.743-5.969-5.995v5.995h5.969z"></path>
                          </svg>
                        </div>
                        <p className="text-center font-bold py-4 capitalize">
                          ВРЕМЕННЫЕ РЕШЕНИЯ
                        </p>
                        <p className="text-center px-2 font-normal text-gray-500 text-base leading-loose">
                          Используя наши глубокие отраслевые знания и обширные
                          связи, наша команда консультантов готова предоставлять
                          временную поддержку для руководителей во время
                          сезонных пиков или для решения уникальных задач вашего
                          проекта.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 mantine-h7ke5k">
                <div
                  className="mantine-Group-root mantine-w4rqhk"
                  justify="center"
                >
                  <h1
                    className="text-3xl uppercase my-4 text-center flex text-[#fca311] cursor-pointer hover:text-[#14213d] border shadow-xl py-4 px-8 h1-center"
                    onClick={handleClick2}
                  >
                    ОПЫТ
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M24 24H0V0h24v24z"
                        opacity=".87"
                      ></path>
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                    </svg>
                  </h1>
                </div>
                <div
                  className={`mantine-1avyp1d ${
                    isVisible2 ? "visible-content" : "hidden-content"
                  }`}
                  aria-hidden={!isVisible2}
                >
                  <div
                    style={{
                      opacity: isVisible2 ? "1" : "0",
                      transition: "opacity 1000ms linear",
                    }}
                  >
                    <div className="mantine-Text-root mantine-1d564l0">
                      <div className="shadow-xl border p-4">
                        <div className="flex justify-center py-4">
                          <img
                            alt="ManLocate"
                            srcSet={`${manLocatew64} 1x, ${manLocatew128} 2x`}
                            src={manLocatew128}
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <p className="text-center font-bold py-4 capitalize">
                          ОПЫТНЫЕ СПЕЦИАЛИСТЫ
                        </p>
                        <p className="text-center px-2 font-normal text-gray-500 text-base leading-loose">
                          Наши эксперты по подбору персонала специализируются на
                          поиске талантов, которые способны усилить ваш проект и
                          вывести его на новый уровень. Мы уделяем особое
                          внимание вашей корпоративной культуре и ценностям,
                          обеспечивая результативность, которая постоянно
                          превосходит ожидания.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 mantine-h7ke5k">
                <div
                  className="mantine-Group-root mantine-w4rqhk"
                  justify="center"
                >
                  <h1
                    className="text-3xl uppercase my-4 text-center flex text-[#fca311] cursor-pointer hover:text-[#14213d] p-4 border shadow-xl h1-center"
                    onClick={handleClick3}
                  >
                    БАЗА
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M24 24H0V0h24v24z"
                        opacity=".87"
                      ></path>
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                    </svg>
                  </h1>
                </div>
                <div
                  className={`mantine-1avyp1d ${
                    isVisible3 ? "visible-content" : "hidden-content"
                  }`}
                  aria-hidden={!isVisible3}
                >
                  <div
                    style={{
                      opacity: isVisible3 ? "1" : "0",
                      transition: "opacity 1000ms linear",
                    }}
                  >
                    <div className="mantine-Text-root mantine-1d564l0">
                      <div className="shadow-xl border">
                        <div className="flex justify-center py-4 text-grey-600 text-sm">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="40"
                            width="40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
                          </svg>
                        </div>
                        <p className="text-center font-bold py-4">
                          СОБСТВЕННАЯ БАЗА
                        </p>
                        <p className="text-center px-4 font-normal text-gray-500 text-base leading-loose">
                          Magnet предлагает эксклюзивные услуги по работе с
                          собственной базой данных, уделяя приоритетное внимание
                          вашим запросам. Мы проводим целенаправленный
                          хедхантинг, подбирая лучших специалистов для вашей
                          организации, соблюдая сроки и обеспечивая высокое
                          качество обслуживания.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 mantine-h7ke5k">
                <div
                  className="mantine-Group-root mantine-w4rqhk"
                  justify="center"
                >
                  <h1
                    className="text-3xl border uppercase my-4 text-center flex text-[#fca311] cursor-pointer hover:text-[#14213d] p-4 shadow-xl h1-center"
                    onClick={handleClick4}
                  >
                    ПАКЕТЫ
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M24 24H0V0h24v24z"
                        opacity=".87"
                      ></path>
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                    </svg>
                  </h1>
                </div>
                <div
                  className={`mantine-1avyp1d ${
                    isVisible4 ? "visible-content" : "hidden-content"
                  }`}
                  aria-hidden={!isVisible4}
                >
                  <div
                    style={{
                      opacity: isVisible4 ? "1" : "0",
                      transition: "opacity 1000ms linear",
                    }}
                  >
                    <div className="mantine-Text-root mantine-1d564l0">
                      <div className="shadow-xl border">
                        <div className="flex justify-center py-4">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className="rotate-90 text-gray-600"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-center font-bold py-4">
                          ИНДИВИДУАЛЬНЫЕ ПАКЕТЫ
                        </p>
                        <p className="text-center px-4 font-normal text-gray-500 text-base leading-loose">
                          Понимая, что подбор персонала — это больше, чем просто
                          заполнение вакансий, мы предлагаем индивидуальные
                          пакеты для решения ваших специфических задач. Будь то
                          разработка должностных инструкций или создание
                          профессиональных команд под проект, наши лучшие
                          консультанты готовы работать с вами и для вас.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel page="clients" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Clients;
