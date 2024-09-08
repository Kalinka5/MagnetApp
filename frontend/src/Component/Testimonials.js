import { useEffect, useState } from "react";

function Testimonials() {
  const [slide, setSlide] = useState(0);
  const slides = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div className="w-full bg-[#14213d]">
        <div className="mx-auto">
          <div className="w-full">
            <div className="md:w-[1080px] mx-auto">
              <div
                className="slick-slider md:w-[900px] p-4 mx-auto slick-initialized"
                dir="ltr"
              >
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: "700%",
                      left: "-100%",
                      transform: `translateX(-${slide * 14.285714285714286}%)`,
                      transition: "transform 1s ease-in-out",
                    }}
                  >
                    <div
                      data-index="-1"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Работа с компанией Magnet превзошла все наши
                              ожидания. Сотрудничество с вами позволило нам
                              значительно ускорить процесс подбора персонала.
                              Особо хочется отметить вашу оперативность в
                              решении вопросов и способность найти кандидатов,
                              идеально подходящих под наши требования. В течение
                              всего времени работы с вами, мы чувствовали
                              поддержку и уверенность в успехе. Спасибо за ваш
                              профессионализм и внимание к деталям!
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Герольд Браун
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Генеральный директор, DHL
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabIndex="-1"
                      aria-hidden="false"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-3xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Мы чрезвычайно довольны качеством услуг, которые
                              предоставляла компания Magnet за последние
                              несколько месяцев. Процесс подбора персонала стал
                              для нас значительно легче благодаря вашему
                              профессионализму и внимательному отношению. С
                              самого начала нашего сотрудничества вы уделяли
                              особое внимание нашим требованиям и всегда
                              находили время, чтобы обсудить прогресс и
                              убедиться, что все идет по плану. Это позволило
                              нам с уверенностью принимать решения и ускорило
                              процесс найма. Благодарим вас за отличное
                              сотрудничество и надеемся на продолжение нашего
                              успешного партнерства!
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Джордан Петерс
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Директор по персоналу, Greegs
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide"
                      tabIndex="-1"
                      aria-hidden="true"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Компания Magnet доказала свою высокую квалификацию
                              и преданность делу. Весь процесс подбора кадров
                              прошел гладко благодаря вашему вниманию и
                              внимательности к нашим пожеланиям. Нам особенно
                              понравилось, что вы регулярно информировали нас о
                              статусе поиска и всегда были на связи для
                              обсуждения. Благодаря вашей поддержке, мы смогли
                              найти именно тех специалистов, которые
                              соответствуют нашим требованиям.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Стелла Дэвис
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              HR-менеджер, Toyota Motor
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      className="slick-slide"
                      tabIndex="-1"
                      aria-hidden="true"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Работа с компанией Magnet превзошла все наши
                              ожидания. Сотрудничество с вами позволило нам
                              значительно ускорить процесс подбора персонала.
                              Особо хочется отметить вашу оперативность в
                              решении вопросов и способность найти кандидатов,
                              идеально подходящих под наши требования. В течение
                              всего времени работы с вами, мы чувствовали
                              поддержку и уверенность в успехе. Спасибо за ваш
                              профессионализм и внимание к деталям!
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Герольд Браун
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Генеральный директор, DHL
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-3xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Мы чрезвычайно довольны качеством услуг, которые
                              предоставляла компания Magnet за последние
                              несколько месяцев. Процесс подбора персонала стал
                              для нас значительно легче благодаря вашему
                              профессионализму и внимательному отношению. С
                              самого начала нашего сотрудничества вы уделяли
                              особое внимание нашим требованиям и всегда
                              находили время, чтобы обсудить прогресс и
                              убедиться, что все идет по плану. Это позволило
                              нам с уверенностью принимать решения и ускорило
                              процесс найма. Благодарим вас за отличное
                              сотрудничество и надеемся на продолжение нашего
                              успешного партнерства!
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Джордан Петерс
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Директор по персоналу, Greegs
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Компания Magnet доказала свою высокую квалификацию
                              и преданность делу. Весь процесс подбора кадров
                              прошел гладко благодаря вашему вниманию и
                              внимательности к нашим пожеланиям. Нам особенно
                              понравилось, что вы регулярно информировали нас о
                              статусе поиска и всегда были на связи для
                              обсуждения. Благодаря вашей поддержке, мы смогли
                              найти именно тех специалистов, которые
                              соответствуют нашим требованиям.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Стелла Дэвис
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              HR-менеджер, Toyota Motor
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Работа с компанией Magnet превзошла все наши
                              ожидания. Сотрудничество с вами позволило нам
                              значительно ускорить процесс подбора персонала.
                              Особо хочется отметить вашу оперативность в
                              решении вопросов и способность найти кандидатов,
                              идеально подходящих под наши требования. В течение
                              всего времени работы с вами, мы чувствовали
                              поддержку и уверенность в успехе. Спасибо за ваш
                              профессионализм и внимание к деталям!
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Герольд Браун
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Генеральный директор, DHL
                            </h1>
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
      </div>
    </div>
  );
}

export default Testimonials;
