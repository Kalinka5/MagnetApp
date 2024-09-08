import React, { useEffect, useState } from "react";

import candidates from "./bg/candidates.gif";
import chairsw640 from "./_next/chairsw640.JPG";
import chairsw828 from "./_next/chairsw828.JPG";
import bagw256 from "./_next/bagw256.png";
import bagw384 from "./_next/bagw384.png";
import locationw256 from "./_next/locationw256.png";
import locationw384 from "./_next/locationw384.png";
import notsw256 from "./_next/notsw256.png";
import notsw384 from "./_next/notsw384.png";
import searchw256 from "./_next/searchw256.png";
import searchw384 from "./_next/searchw384.png";
import arroww256 from "./_next/arroww256.png";
import arroww384 from "./_next/arroww384.png";

import NavBar from "./Component/NavBar";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";

import "./_next/static/css/Candidates.css";

function Candidates() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const [successes, setSuccess] = useState(1);
  const [clients, setClient] = useState(1);
  const [percent, setPercent] = useState(1);
  const [customers, setCustomer] = useState(1);
  const [satisfaction, setSatisfaction] = useState(1);

  useEffect(() => {
    countSuccesses();
    countClients();
    countPercent();
    countCustomers();
    countSatisfaction();
  }, []);

  const countSuccesses = async () => {
    let currentsuccess = 1;
    const interval = (1.8 * 1000) / 79; // Total 1.8 seconds divided by 79 increments

    const timer = setInterval(() => {
      currentsuccess += 1;
      if (currentsuccess > 80) {
        clearInterval(timer);
      } else {
        setSuccess(currentsuccess);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countClients = async () => {
    let currentclient = 1;
    const interval = (1.8 * 1000) / 11; // Total 1.8 seconds divided by 11 increments

    const timer = setInterval(() => {
      currentclient += 1;
      if (currentclient > 12) {
        clearInterval(timer);
      } else {
        setClient(currentclient);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countPercent = async () => {
    let currentpercent = 1;
    const interval = (1.8 * 1000) / 99; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentpercent += 1;
      if (currentpercent > 100) {
        clearInterval(timer);
      } else {
        setPercent(currentpercent);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countCustomers = async () => {
    let currentcustomer = 1;
    const interval = (1.8 * 1000) / 23; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentcustomer += 1;
      if (currentcustomer > 24) {
        clearInterval(timer);
      } else {
        setCustomer(currentcustomer);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countSatisfaction = async () => {
    let currentpercent = 1;
    const interval = (1.8 * 1000) / 99; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentpercent += 1;
      if (currentpercent > 100) {
        clearInterval(timer);
      } else {
        setSatisfaction(currentpercent);
      }
    }, interval);

    return () => clearInterval(timer);
  };

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
    <div className="candidates">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={candidates}
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  height: "100vh",
                  width: "100vw",
                }}
                alt="Candidates"
              />
              <svg
                id="wwrtopsvg"
                className="fill-[#14213d]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
              </svg>
            </div>
            <div className="py-28">
              <h1 className="text-white text-5xl tracking-widest text-center font-extrabold">
                Кандидаты
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
                <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
              </svg>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="fill-[#14213d]">
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
                ></path>
              </svg>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="md:w-[600px] mx-auto md:px-24 pb-16 py-6 pt-32">
                <h1 className="text-[#fca311] text-xl md:ml-3 md:text-left text-center">
                  ВАШЕ БУДУЩЕЕ НАЧИНАЕТСЯ ЗДЕСЬ
                </h1>
                <p className="text-sm leading-5 tracking-wider md:text-left text-center p-4">
                  В Magnet Recruit мы стремимся помочь кандидатам раскрыть свой
                  потенциал, предлагая персонализированные возможности для
                  развития. Ваш успех укрепляет нашу ежедневную миссию, и наши
                  консультанты готовы подчеркнуть ту уникальную ценность,
                  которую вы привносите в нашу команду.
                </p>
              </div>
              <div className="bg-[url(&#x27;/image/building.png&#x27;)]"></div>
            </div>
          </div>
          <div className="w-full bg-[#14213D] md:px-0 px-8">
            <div className="grid md:grid-cols-2 md:w-[980px] m-auto">
              <div className="py-20 flex mx-auto">
                <img
                  alt="Chairs"
                  srcSet={`${chairsw640} 1x, ${chairsw828} 2x`}
                  src={chairsw828}
                  width="400"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-full md:h-[55vh] h-[40vh] object-contain rounded-2xl"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="py-8 px-2">
                <h1 className="text-[#fca311] md:text-left text-center tracking-widest text-xs py-4">
                  НАШИ УСЛУГИ ПО РАЗМЕЩЕНИЮ
                </h1>
                <h1 className="text-[#fca311] md:text-left text-center py-3 tracking-wider text-xl leading-loose">
                  РАСШИРЬТЕ СВОИ ВОЗМОЖНОСТИ С
                  <br />
                  MAGNET RECRUIT
                </h1>
                <div className="pt-2 pb-10">
                  <div className="accordion-item">
                    <div className="accordion">
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick1}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                1. Отраслевая экспертиза:
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible1 ? "svg-rotate-180" : ""
                                  }`}
                                >
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
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible1
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible1}
                            >
                              Благодаря нашим глубоким знаниям отрасли, клиентов
                              и кандидатов, мы отбираем должности, которые
                              наилучшим образом соответствуют вашим навыкам и
                              карьерным целям. Наши консультанты ориентированы
                              на то, чтобы ваши возможности были на передовой,
                              предлагая индивидуальный подход к подбору позиций.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick2}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                2. Помощь в составлении резюме
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible2 ? "svg-rotate-180" : ""
                                  }`}
                                >
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
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible2
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible2}
                            >
                              Понимая важность первого впечатления, мы работаем
                              с вами над созданием резюме, которое максимально
                              раскроет ваш потенциал и подчеркнет ценность,
                              которую вы можете принести работодателю. Ваше
                              резюме будет инструментом, создающим длительное
                              положительное впечатление.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick3}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                3. Подготовка к собеседованию
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible3 ? "svg-rotate-180" : ""
                                  }`}
                                >
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
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible3
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible3}
                            >
                              Мы обеспечиваем вашу полную готовность к
                              собеседованию, помогая вам почувствовать
                              уверенность и показать себя с лучшей стороны.
                              Подробные брифинги по должности, компании,
                              ожиданиям и корпоративной культуре помогут вам
                              быть на высоте.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick4}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                4. Постоянная поддержка
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible4 ? "svg-rotate-180" : ""
                                  }`}
                                >
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
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible4
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible4}
                            >
                              Успешное трудоустройство — это только начало наших
                              долгосрочных отношений. Мы продолжаем сопровождать
                              вас на вашем карьерном пути, обеспечивая
                              регулярную обратную связь и поддержку. Для
                              подрядчиков мы поддерживаем постоянный контакт в
                              течение всего контракта, информируя о новых
                              возможностях и перспективах.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#14213D] w-full">
            <div className="py-12 md:w-[900px] grid md:grid-cols-5 mx-auto">
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Bag"
                  srcSet={`${bagw256} 1x, ${bagw384} 2x`}
                  src={bagw384}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h1
                    className="text-[#fca311] text-center text-6xl font-bold"
                    id="counter"
                  >
                    <span>{successes}+</span>
                  </h1>
                </div>
                <h1 className="m-auto text-center text-white font-bold">
                  Еженедельные успехи
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Location"
                  srcSet={`${locationw256} 1x, ${locationw384} 2x`}
                  src={locationw384}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{clients}</span>
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Глобальные клиенты
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Nots"
                  srcSet={`${notsw256} 1x, ${notsw384} 2x`}
                  src={notsw384}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{percent}</span>%
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Успех (при сохранении)
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Search"
                  srcSet={`${searchw256} 1x, ${searchw384} 2x`}
                  src={searchw384}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{customers}</span>
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Обслуживание клиентов
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Arrow"
                  srcSet={`${arroww256} 1x, ${arroww384} 2x`}
                  src={arroww384}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{satisfaction}</span>%
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Удовлетворенность клиентов
                </h1>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="fill-[#14213d]">
              <svg
                id="servicesbottomsvg"
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
                ></path>
              </svg>
            </div>
            <div className="pt-14 w-full bg-white"></div>
          </div>
          <Carousel page="candidates" />
          <div className="bg-[#14213D] pt-4">
            <h1 className="text-center text-xl text-slate-300 font-bold">
              СВЯЗАТЬСЯ С НАМИ
            </h1>
            <div className="items-center flex justify-center">
              <a
                type="submit"
                className="flex my-10 px-4 p-2 rounded-sm hover:bg-[#fca311] hover:text-white bg-slate-200"
                href="https://t.me/+_QmTkgJcIMQ1MGUy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                  className="mx-2 my-auto"
                  style={{ fontSize: "25px" }}
                >
                  <g
                    fill="#203361"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,4c-12.68359,0 -23,8.97266 -23,20c0,6.1875 3.33594,12.06641 8.94922,15.83984c-0.13281,1.05078 -0.66406,3.60156 -2.76562,6.58594l-1.10547,1.56641l1.97656,0.00781c5.42969,0 9.10156,-3.32812 10.30859,-4.60547c1.83203,0.40234 3.72656,0.60547 5.63672,0.60547c12.68359,0 23,-8.97266 23,-20c0,-11.02734 -10.31641,-20 -23,-20z"></path>
                    </g>
                  </g>
                </svg>
                Перейти в Telegram
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Candidates;
