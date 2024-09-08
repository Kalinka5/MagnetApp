import React, { useState } from "react";

import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import candidates from "./bg/candidates.gif";

import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

import "./_next/static/css/ContactUs.css";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [telegram, setTelegram] = useState("");

  const clearFields = () => {
    setEmail("");
    setPhoneNumber("");
    setName("");
    setNationality("");
    setTelegram("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        "service_ag2wrue",
        "template_rx3r89w",
        e.target,
        "tKwGaXHU-P-HsC77h"
      );
      console.log("Email sent successfully");
      Swal.fire(
        "Успешно!",
        "Ваш запрос уже отправлен к нам на почту.",
        "success"
      );
      clearFields();
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire("Ошибка!", "Что-то пошло не так...", "error");
    }
  };

  return (
    <div className="clients">
      <div id="__next">
        <NavBar />
        <div className="md:w-full">
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
                <path
                  className="elementor-shape-fill"
                  d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                ></path>
              </svg>
            </div>
            <div className="py-28">
              <h1 className="text-white text-4xl tracking-widest text-center font-extrabold">
                Связаться с нами
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
          <div className="bg-[#14213D] py-6">
            <div className="md:w-[1240px] mx-auto">
              <h1 className="text-2xl text-center text-white font-semibold">
                Мы здесь, чтобы помочь вам
              </h1>
              <p className="text-white text-sm font-light text-center p-6">
                Не стесняйтесь обращаться к нам или просто напишите здесь. Наша
                поддержка Сотрудники свяжутся с вами очень скоро.
              </p>
            </div>
            <div className="md:w-[1240px] px-4 m-auto">
              <div className="md:flex py-8">
                <div className="md:basis-1/2 py-6">
                  <h1 className="text-2xl py-8 text-[#fca311] font-bold">
                    СВЯЗАТЬСЯ С НАМИ
                  </h1>
                  <div className="flex gap-8 md:py-2">
                    <div className="flex text-[#fca311]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="45"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                      </svg>
                    </div>
                    <h1 className="py-4 block tracking-widest uppercase px-2 text-xs w-full text-white">
                      04 Westdale Gardens, Manchester M19 1JD
                    </h1>
                  </div>
                  <div className="flex gap-8 py-2">
                    <div className="flex text-[#fca311]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="45"
                        height="45"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="none"
                          fillRule="none"
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
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M4.868,43.303l2.694,-9.835c-1.662,-2.878 -2.536,-6.144 -2.535,-9.489c0.005,-10.465 8.521,-18.979 18.987,-18.979c5.079,0.002 9.845,1.979 13.43,5.566c3.584,3.588 5.558,8.356 5.556,13.428c-0.004,10.465 -8.522,18.98 -18.986,18.98c-0.001,0 0,0 0,0h-0.008c-3.177,-0.001 -6.3,-0.798 -9.073,-2.311z"
                              fill="#fca311"
                              fillRule="nonzero"
                            ></path>
                            <path
                              d="M4.868,43.803c-0.132,0 -0.26,-0.052 -0.355,-0.148c-0.125,-0.127 -0.174,-0.312 -0.127,-0.483l2.639,-9.636c-1.636,-2.906 -2.499,-6.206 -2.497,-9.556c0.004,-10.742 8.745,-19.48 19.486,-19.48c5.21,0.002 10.105,2.031 13.784,5.713c3.679,3.683 5.704,8.577 5.702,13.781c-0.004,10.741 -8.746,19.48 -19.486,19.48c-3.189,-0.001 -6.344,-0.788 -9.144,-2.277l-9.875,2.589c-0.042,0.012 -0.084,0.017 -0.127,0.017z"
                              fill="#fca311"
                              fillRule="nonzero"
                            ></path>
                            <path
                              d="M24.014,5c5.079,0.002 9.845,1.979 13.43,5.566c3.584,3.588 5.558,8.356 5.556,13.428c-0.004,10.465 -8.522,18.98 -18.986,18.98h-0.008c-3.177,-0.001 -6.3,-0.798 -9.073,-2.311l-10.065,2.64l2.694,-9.835c-1.662,-2.878 -2.536,-6.144 -2.535,-9.489c0.005,-10.465 8.521,-18.979 18.987,-18.979M24.014,42.974v0v0M24.014,42.974v0v0M24.014,4v0c-11.016,0 -19.982,8.962 -19.987,19.979c-0.001,3.367 0.849,6.685 2.461,9.622l-2.585,9.439c-0.094,0.345 0.002,0.713 0.254,0.967c0.19,0.192 0.447,0.297 0.711,0.297c0.085,0 0.17,-0.011 0.254,-0.033l9.687,-2.54c2.828,1.468 5.998,2.243 9.197,2.244c11.024,0 19.99,-8.963 19.995,-19.98c0.002,-5.339 -2.075,-10.359 -5.848,-14.135c-3.775,-3.777 -8.796,-5.858 -14.139,-5.86z"
                              fillOpacity="0"
                              fill="#cfd8dc"
                              fillRule="nonzero"
                            ></path>
                            <path
                              d="M35.176,12.832c-2.98,-2.982 -6.941,-4.625 -11.157,-4.626c-8.704,0 -15.783,7.076 -15.787,15.774c-0.001,2.981 0.833,5.883 2.413,8.396l0.376,0.597l-1.595,5.821l5.973,-1.566l0.577,0.342c2.422,1.438 5.2,2.198 8.032,2.199h0.006c8.698,0 15.777,-7.077 15.78,-15.776c0.001,-4.215 -1.638,-8.179 -4.618,-11.161z"
                              fill="#16213d"
                              fillRule="nonzero"
                            ></path>
                            <path
                              d="M19.268,16.045c-0.355,-0.79 -0.729,-0.806 -1.068,-0.82c-0.277,-0.012 -0.593,-0.011 -0.909,-0.011c-0.316,0 -0.83,0.119 -1.265,0.594c-0.435,0.475 -1.661,1.622 -1.661,3.956c0,2.334 1.7,4.59 1.937,4.906c0.237,0.316 3.282,5.259 8.104,7.161c4.007,1.58 4.823,1.266 5.693,1.187c0.87,-0.079 2.807,-1.147 3.202,-2.255c0.395,-1.108 0.395,-2.057 0.277,-2.255c-0.119,-0.198 -0.435,-0.316 -0.909,-0.554c-0.474,-0.238 -2.807,-1.385 -3.242,-1.543c-0.435,-0.158 -0.751,-0.237 -1.068,0.238c-0.316,0.474 -1.225,1.543 -1.502,1.859c-0.277,0.317 -0.554,0.357 -1.028,0.119c-0.474,-0.238 -2.002,-0.738 -3.815,-2.354c-1.41,-1.257 -2.362,-2.81 -2.639,-3.285c-0.277,-0.474 -0.03,-0.731 0.208,-0.968c0.213,-0.213 0.474,-0.554 0.712,-0.831c0.237,-0.277 0.316,-0.475 0.474,-0.791c0.158,-0.317 0.079,-0.594 -0.04,-0.831c-0.117,-0.238 -1.039,-2.584 -1.461,-3.522z"
                              fill="#fca311"
                              fillRule="evenodd"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h1 className="text-white tracking-widest py-3 text-sm px-2">
                      +44 7494 051093
                    </h1>
                  </div>
                  <div className="flex gap-8 py-2">
                    <div className="flex text-[#fca311]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="45"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                      </svg>
                    </div>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1946800022%3A1668448922110746&amp;service=mail&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin&amp;ifkv=ARgdvAtpIClW3LwyU3UBQE-GG7HNFTGaMg55GE_WuAYvER76vZ1cm9dhPrHSC-92QoQOi-lxnSb5">
                      <h1 className="cursor-pointer text-xs px-2 text-white tracking-widest py-4">
                        INFO@MAGNETRECRUIT.UK
                      </h1>
                    </a>
                  </div>
                  <div className="flex justify-between gap-8 py-2">
                    <h1 className="text-sm px-2 text-white tracking-widest py-4">
                      Резервные аккаунты Марии:
                    </h1>
                    <div className="flex text-[#fca311]">
                      <a
                        href="https://t.me/Maria_MagnetLTD"
                        className="rezerv-btn"
                      >
                        Резерв1
                      </a>
                      <a
                        href="https://t.me/MariyaMagnetLTD"
                        className="rezerv-btn"
                      >
                        Резерв2
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between gap-8 py-2">
                    <h1 className="text-sm px-2 text-white tracking-widest py-4">
                      Резервные аккаунты Максима:
                    </h1>
                    <div className="flex text-[#fca311]">
                      <a
                        href="https://t.me/Maxim_Magnet"
                        className="rezerv-btn"
                      >
                        Резерв1
                      </a>
                      <a
                        href="https://t.me/MaximMagnetUK"
                        className="rezerv-btn"
                      >
                        Резерв2
                      </a>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <h1 className="md:text-xl p-6 md:text-left text-center text-sm text-[#fca311] font-bold">
                    ОТПРАВИТЬ ЗАПРОС
                  </h1>
                  <form className="sm:mx-14 md:px-8" onSubmit={sendEmail}>
                    <p className="text-white pt-4">
                      Е-мейл <span className="text-red-700">*</span>
                    </p>
                    <input
                      type="email"
                      className="md:w-[600px] w-full h-2 py-4"
                      placeholder=""
                      required=""
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-white pt-4">
                      Телефон <span className="text-red-700">*</span>
                    </p>
                    <input
                      type="phone"
                      className="md:w-[600px] w-full h-2 py-4"
                      placeholder=""
                      required=""
                      name="phoneNumber"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <p className="text-white pt-4">
                      ФИО <span className="text-red-700">*</span>
                    </p>
                    <input
                      type="name"
                      className="md:w-[400px] w-full h-2 py-4"
                      placeholder=""
                      required=""
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="text-white pt-4">
                      Гражданство <span className="text-red-700">*</span>
                    </p>
                    <input
                      type="name"
                      className="md:w-[400px] w-full h-2 py-4"
                      placeholder=""
                      required=""
                      name="nationality"
                      id="nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                    <p className="text-white pt-4">
                      Telegram или WhatsApp{" "}
                      <span className="text-red-700">*</span>
                    </p>
                    <input
                      type="name"
                      className="md:w-[400px] w-full h-2 py-4"
                      placeholder=""
                      required=""
                      name="telegram"
                      id="telegram"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                    <div className="flex justify-center md:justify-start mx-auto py-4">
                      <button
                        type="submit"
                        className="py-2 px-4 rounded-sm text-xs hover:bg-slate-500 font-bold hover:text-white bg-slate-200"
                      >
                        Отправить сейчас
                      </button>
                    </div>
                  </form>
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

export default ContactUs;
