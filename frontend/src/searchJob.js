import whoweare from "./bg/whoweare.gif";

import NavBar from "./Component/NavBar";
import CompanyInfo from "./Component/CompanyInfo";
import Footer from "./Component/Footer";

function SearchJob() {
  return (
    <div className="clients">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={whoweare}
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  height: "100vh",
                  width: "100vw",
                }}
                alt="WhoWeAre"
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
                Поиск Работы
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
          <div className="w-full bg-[#e5e5e5]">
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
            <div className="py-16"></div>
            <CompanyInfo />
            <div className="md:px-16 md:py-5 mx-auto px-4 md:mx-0 md:col-span-2 md:grid md:gap-1 md:grid-auto-rows-max overflow-y-auto">
              <div className="md:mx-48 m-4 border-[#14213d] border rounded-3xl md:p-12 p-6">
                <p className="text-xl text-justify">
                  В Magnet Recruit мы уделяем особое внимание
                  персонализированному подходу, стремясь глубоко понять ваши
                  уникальные навыки и карьерные цели. Вместо стандартного
                  подхода, когда одно решение предлагается всем, мы создаем
                  индивидуальный опыт, который выходит за рамки обычных
                  предложений вакансий. Наша команда опытных консультантов
                  готова помочь вам с оптимизацией резюме и ускорить получение
                  приглашений от работодателей. Свяжитесь с нашими менеджерами,
                  и мы подберем для вас возможности, которые соответствуют вашим
                  целям и ожиданиям.
                </p>
                <div className="pt-16">
                  <div className="items-center flex justify-center">
                    <a
                      type="submit"
                      className="shadow- flex my-4 px-4 p-2 rounded-sm hover:bg-[#fca311] hover:text-white uppercase bg-slate-200 shadow-slate-400 shadow-lg"
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
                      Связаться С Нами
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SearchJob;
