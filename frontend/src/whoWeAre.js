import whoWeAre from "./bg/whoweare.gif";
import downArrow from "./image/downarrow.svg";
import human1w256 from "./_next/human1w256.png";
import human1w640 from "./_next/human1w640.png";
import human2w256 from "./_next/human2w256.png";
import human2w640 from "./_next/human2w640.png";
import human3w256 from "./_next/human3w256.png";
import human3w640 from "./_next/human3w640.png";
import human4w256 from "./_next/human4w256.png";
import human4w640 from "./_next/human4w640.png";
import Mrw256 from "./_next/Mrw256.png";
import Mrw640 from "./_next/Mrw640.png";

import NavBar from "./Component/NavBar";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";

import "./_next/static/css/WhoWeAre.css";

function WhoWeAre() {
  return (
    <div className="who-we-are">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={whoWeAre}
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
                Кто Мы
              </h1>
            </div>
            <div>
              <svg
                id="testmonialsvgtop"
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
          <div className="bg-[#14213d]">
            <h1 className="text-white py-8 text-4xl text-center font-bold">
              Познакомьтесь с нашей командой
            </h1>
            <div className="grid md:grid-cols-2 md:w-[1080px] w-full mx-auto">
              <div className="item-center">
                <div className="flex justify-center mx-auto">
                  <img
                    alt="Human1"
                    srcSet={`${human1w256} 1x, ${human1w640} 2x`}
                    src={human1w256}
                    width="250"
                    height="170"
                    decoding="async"
                    data-nimg="1"
                    className="mx-auto overflow-hidden"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h1 className="text-[#fca214] text-2xl text-center font-semibold px-4 pt-3">
                  Сэм Хассан
                </h1>
                <p className="text-white px-12 text-center font-semibold">
                  Основатель
                </p>
                <div className="flex gap-2 cursor-pointer justify-center py-2 text-slate-800"></div>
                <div className="md:w-full px-2">
                  <div className="flex border md:border-none sm:mx-2">
                    <p className="md:w-[25%] w-full text-sm text-[#FCA311] border p-4 md:border-b-0">
                      О Сэме
                    </p>
                    <p className="w-[80%] hidden md:block border-b-2"></p>
                  </div>
                  <div className="md:mx-2">
                    <p className="p-4 border text-white border-t-transparent text-sm text-justify">
                      Ранее работая в различных компаниях в качестве временного
                      консультанта по подбору персонала, Сэм решил отказаться от
                      своего статуса сотрудника и создать частную организацию,
                      основанную на ценностях, в которые он верит. Он основал
                      Magnet Recruit в разгар пандемии 2020 году с целью
                      создания продвижение культуры в сфере подбора персонала,
                      которая ставит клиентов и кандидатов на первое место.
                    </p>
                  </div>
                  <div className="my-4 border md:border-none sm:mx-2">
                    <div className="flex">
                      <p className="md:w-[25%] w-full text-[#FCA311] border p-4 lg:border-b-0">
                        Его девиз
                      </p>
                      <p className="w-[80%] hidden md:block border-b-2"></p>
                    </div>
                    <div>
                      <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border text-white border-t-transparent text-sm text-justify">
                        “Начинайте, помня о цели”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-center">
                <div className="flex justify-center mx-auto">
                  <img
                    alt="Human2"
                    srcSet={`${human2w256} 1x, ${human2w640} 2x`}
                    src={human2w256}
                    width="250"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="mx-auto overflow-hidden"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h1 className="text-[#fca214] text-2xl text-center font-semibold px-4 pt-3">
                  Самер Хассан
                </h1>
                <p className="text-white px-12 text-center font-semibold">
                  Директор
                </p>
                <div className="flex gap-2 cursor-pointer justify-center py-2 text-slate-800"></div>
                <div className="md:w-full px-2">
                  <div className="flex border md:border-none sm:mx-2">
                    <p className="md:w-[30%] w-full text-sm text-[#FCA311] border p-4 md:border-b-0">
                      О Самере
                    </p>
                    <p className="w-[80%] hidden md:block border-b-2"></p>
                  </div>
                  <div className="md:mx-2">
                    <p className="p-4 border text-white border-t-transparent text-sm text-justify">
                      Самер Хассан — директор и основатель компании Magnet
                      Recruit, специализирующейся на трудоустройстве
                      русскоязычных специалистов в Великобритании. Свою карьеру
                      он начал в сфере кадрового менеджмента, накопив
                      значительный опыт в подборе персонала для международных
                      компаний. Стремясь помочь кандидатам найти работу за
                      границей, Самер создал компанию Magnet Recruit, которая
                      стала успешной благодаря его глубокому пониманию рынка и
                      уникальному подходу к подбору кадров. В своей компании
                      Самер лично курирует ключевые процессы, помогая
                      русскоязычным специалистам найти подходящие вакансии и
                      адаптироваться в Великобритании.
                    </p>
                  </div>
                  <div className="my-4 border md:border-none sm:mx-2">
                    <div className="flex">
                      <p className="md:w-[25%] w-full text-[#FCA311] border p-4 lg:border-b-0">
                        Его девиз
                      </p>
                      <p className="w-[80%] hidden md:block border-b-2"></p>
                    </div>
                    <div>
                      <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border text-white border-t-transparent text-sm text-justify">
                        “Мы находим таланты, которые ведут к успеху”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-center mt-20">
                <div className="flex justify-center mx-auto">
                  <a href="https://t.me/MariyaMagnet_LTD" className="img-link">
                    {" "}
                    <img
                      alt="Human3"
                      srcSet={`${human3w256} 1x, ${human3w640} 2x`}
                      src={human3w256}
                      width="250"
                      height="200"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <div className="content">
                      <h1>Перейти в Telegram</h1>
                      <p>К пользователю Maria_MagnetLTD</p>
                    </div>
                  </a>
                </div>
                <h1 className="text-[#fca214] text-2xl text-center font-semibold px-4 pt-3">
                  Мария Смирнова
                </h1>
                <p className="text-white px-12 text-center font-semibold">
                  Менеджер по работе с клиентами
                </p>
                <div className="flex gap-2 cursor-pointer justify-center py-2 text-slate-800">
                  <a href="https://t.me/MariyaMagnet_LTD">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="35"
                      width="35"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#29b6f6"
                        d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                      ></path>
                      <path
                        fill="#b0bec5"
                        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="md:w-full px-2">
                  <div className="flex border md:border-none sm:mx-2">
                    <p className="md:w-[35%] w-full text-sm text-[#FCA311] border p-4 md:border-b-0">
                      О Марии
                    </p>
                    <p className="w-[80%] hidden md:block border-b-2"></p>
                  </div>
                  <div className="md:mx-2">
                    <p className="p-4 border text-white border-t-transparent text-sm text-justify">
                      Мария Смирнова — менеджер по трудоустройству в
                      Великобритании в компании Magnet Recruit. Она начала
                      карьеру в сфере HR, работая в различных кадровых
                      агентствах, где развивала навыки подбора персонала и
                      адаптации кандидатов. Опыт и успехи в этой области привели
                      её в Magnet Recruit, где Мария занимается подбором и
                      трудоустройством специалистов из-за рубежа. В компании она
                      отвечает за весь процесс — от поиска кандидатов до их
                      успешного трудоустройства и адаптации на новом месте
                      работы в Великобритании.
                    </p>
                  </div>
                  <div className="my-4 border md:border-none sm:mx-2">
                    <div className="flex">
                      <p className="md:w-[25%] w-full text-[#FCA311] border p-4 lg:border-b-0">
                        Ее девиз
                      </p>
                      <p className="w-[80%] hidden md:block border-b-2"></p>
                    </div>
                    <div>
                      <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border text-white border-t-transparent text-sm text-justify">
                        “Видение без действий — всего лишь мечта”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-center mt-20">
                <div className="flex justify-center mx-auto">
                  <a href="https://t.me/MaximMagnet" className="img-link">
                    {" "}
                    <img
                      alt="Human4"
                      srcSet={`${human4w256} 1x, ${human4w640} 2x`}
                      src={human4w256}
                      width="250"
                      height="200"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <div className="content">
                      <h1>Перейти в Telegram</h1>
                      <p>К пользователю MaximMagnet</p>
                    </div>
                  </a>
                </div>
                <h1 className="text-[#fca214] text-2xl text-center font-semibold px-4 pt-3">
                  Максим Чернов
                </h1>
                <p className="text-white px-12 text-center font-semibold">
                  Менеджер по работе с клиентами
                </p>
                <div className="flex gap-2 cursor-pointer justify-center py-2 text-slate-800">
                  <a href="https://t.me/MaximMagnet">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="35"
                      width="35"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#29b6f6"
                        d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                      ></path>
                      <path
                        fill="#b0bec5"
                        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="md:w-full px-2">
                  <div className="flex border md:border-none sm:mx-2">
                    <p className="md:w-[35%] w-full text-sm text-[#FCA311] border p-4 md:border-b-0">
                      О Максиме
                    </p>
                    <p className="w-[80%] hidden md:block border-b-2"></p>
                  </div>
                  <div className="md:mx-2">
                    <p className="p-4 md:pb-9 border text-white border-t-transparent text-sm text-justify">
                      Максим Чернов — менеджер по трудоустройству в
                      Великобритании в компании Magnet Recruit. Он начал карьеру
                      в рекрутинге с младших позиций, постепенно набирая опыт в
                      подборе персонала для различных отраслей. Присоединившись
                      к Magnet Recruit, Максим быстро стал ключевым сотрудником,
                      отвечающим за подбор и трудоустройство иностранных
                      специалистов в Великобритании, включая организацию
                      интервью и адаптацию на новом месте работы.
                    </p>
                  </div>
                  <div className="my-4 border md:border-none sm:mx-2">
                    <div className="flex">
                      <p className="md:w-[25%] w-full text-[#FCA311] border p-4 lg:border-b-0">
                        Его девиз
                      </p>
                      <p className="w-[80%] hidden md:block border-b-2"></p>
                    </div>
                    <div>
                      <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border text-white border-t-transparent text-sm text-justify">
                        “Обещайте меньше, делайте больше”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:flex cols-3 mt-20 text-white back">
              <div className="grid w-[25%]"></div>
              <div className="grid w-[50%] bg-[#14213d] pt-24">
                <h1 className="md:text-6xl text-xl w-full text-[#FCA311] text-center">
                  Наша философия подбора персонала:
                </h1>
                <div className="flex flex-col py-6 md:ml-9">
                  <div className="flex py-1">
                    <div className="flex md:basis-1/3 justify-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                      </svg>
                      <h1 className="text-justify md:font-bold px-1 basis-1/2">
                        Смелый подход
                      </h1>
                    </div>
                    <div className="pl-3">
                      <a href="/">
                        <h1 className="md:font-normal hover:text-[#FCA311]">
                          Решаем даже самые сложные задачи.
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="flex md:basis-1/3 justify-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path>
                      </svg>
                      <h1 className="text-justify md:font-bold px-1">
                        Элитное Представительство
                      </h1>
                    </div>
                    <div className="pl-3">
                      <a href="/">
                        <h1 className="font-normal hover:text-[#FCA311]">
                          Рекомендуем только лучших специалистов.
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="flex md:basis-1/3 justify-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                      </svg>
                      <h1 className="md:font-bold px-1">
                        Долгосрочное партнерство
                      </h1>
                    </div>
                    <div className="pl-3">
                      <a href="/">
                        <h1 className="font-normal hover:text-[#FCA311]">
                          Ориентируемся на долгосрочные взаимоотношения.
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="flex md:basis-1/3 justify-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 38.55c-30.5 0-55 24.52-55 55 0 30.45 24.5 54.95 55 54.95s55-24.5 55-54.95c0-30.48-24.5-55-55-55zM191.3 164.4c-5.7 0-11.1.4-16 1.4-19.9 4-34.1 15.6-43.1 35.4-9.4 20.6-12.1 50.6-5.8 88l6 5.9c13.8 13.8 36.1 21.4 58.6 21.4 21.1 0 42.1-6.7 56-19V179.2c-21-9.8-39.8-14.5-55.7-14.8zm129.4 0c-15.9.3-34.7 5-55.7 14.8v118.3c13.9 12.3 34.9 19 56 19 22.5 0 44.8-7.6 58.6-21.4l6-5.9c6.3-37.4 3.6-67.4-5.8-88-9-19.8-23.2-31.4-43.1-35.4-4.9-1-10.3-1.4-16-1.4zm-209.1 14.4h-.2c-30 .7-55.2 12.1-70.2 32.1-13.3 17.8-19.5 42.9-13.6 76 .9 5.1 2.1 10.5 3.7 16 24.5 18.5 54.3 18.6 78.9.3-9.2-44.8-6.9-81.9 5.6-109.4 2.4-5.3 5.2-10.2 8.4-14.7-2.9-.2-5.8-.3-8.6-.3H111.7c-.1 0-.1-.1-.1 0zm288.8 0c0-.1 0 0-.1 0H396.4c-2.8 0-5.7.1-8.6.3 3.2 4.5 6 9.4 8.4 14.7 12.5 27.5 14.8 64.6 5.6 109.4 24.5 18.3 54.4 18.2 78.9-.3 1.5-5.5 2.8-10.9 3.7-16 5.9-33.1-.3-58.2-13.6-76-15-20-40.2-31.4-70.2-32.1h-.2zM132.8 318.4c6.9 26.1 17.7 54.9 32.9 86.1h58.6l22.7-56.7v-28c-16.4 10-36.3 14.7-56 14.7-20.7 0-41.5-5.2-58.2-16.1zm246.4 0c-16.7 10.9-37.5 16.1-58.2 16.1-19.7 0-39.6-4.7-56-14.7v28l22.7 56.7h58.6c15.2-31.2 26-60 32.9-86.1zm-264.6 3.4c-23 13.9-50.1 16.1-74.5 6.4 9.6 23 24.1 48.5 44.5 76.3h61c-14-29.6-24.2-57.2-31-82.7zm282.8 0c-6.8 25.5-17 53.1-31 82.7h61c20.4-27.8 34.9-53.3 44.5-76.3-24.3 9.7-51.5 7.5-74.5-6.4zM256 373.7l-22.1 55.4 22.1 44.3 22.1-44.3zM91.53 422.5l11.47 46h35.3l-23-23 23-23zm90.27 0l16.6 16.6 6.3 6.4-23 23h51.7l-19.3-38.6 3-7.4zm113.1 0l1.5 3.7 1.5 3.7-19.3 38.6h51.7l-23-23 23-23zm78.9 0l16.6 16.6 6.3 6.4-23 23H409l11.5-46zM160 426.2l-19.3 19.3 19.3 19.3 19.3-19.3zm192 0l-19.3 19.3 19.3 19.3 19.3-19.3z"></path>
                      </svg>
                      <h1 className="text-justify md:font-bold px-1">
                        Целевая экспертиза
                      </h1>
                    </div>
                    <div className="pl-3">
                      <a href="/">
                        <h1 className="font-normal hover:text-[#FCA311]">
                          Компетентность в том, что мы делаем лучше всего.
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-[25%]"></div>
            </div>
            <div className="md:w-[1240px] w-full justify-center py-12 m-auto">
              <h1 className="text-[#fca311] text-center py-2 font-bold">
                НАБОР ПЕРСОНАЛА
              </h1>
              <h1 className="text-white tracking-wider text-4xl text-center font-bold py-2">
                Наш процесс подбора персонала
              </h1>
            </div>
            <div className="md:w-[900px] m-auto gap-10 hidden md:grid grid-cols-3 py-4">
              <div className="grid">
                <h1 className="mt-40"></h1>
                <h1 className="text-[#fca311] tracking-wider text-justify capitalize font-bold">
                  04. Беспроблемная адаптация
                </h1>
                <span className="border-t-2"></span>
                <h1 className="text-white text-sm tracking-widest justify-center">
                  После собеседований мы берем на себя весь процесс — от сбора
                  отзывов и подготовки предложений до проверки рекомендаций. Мы
                  заботимся о всех деталях, освобождая ваше время для решения
                  ключевых задач.
                </h1>
                <div className="flex justify-center rotate-180">
                  <img
                    alt="DownArrow"
                    src={downArrow}
                    width="100"
                    height="1"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-[#fca311] tracking-wider font-bold capitalize">
                  01. Стратегическая консультация
                </h1>
                <h1 className="border-b-2 mt-10"></h1>
                <div className="grid place-content-center">
                  <h1 className="py-6 tracking-widest text-white text-sm">
                    Мы глубоко погружаемся в вашу компанию, её культуру,
                    ценности и требования к роли, чтобы полностью понять ваши
                    ожидания.
                  </h1>
                </div>
                <div className="grid place-content-center mx-auto">
                  <div className="flex justify-center py-14">
                    <img
                      alt="Mr"
                      srcSet={`${Mrw256} 1x, ${Mrw640} 2x`}
                      src={Mrw640}
                      width="250"
                      height="150"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h1 className="text-[#fca311] tracking-wider font-bold mt-24 capitalize">
                    03. Детальная оценка
                  </h1>
                  <h1 className="border-b-2 pt-6"></h1>
                  <h1 className="py-6 tracking-widest text-white text-sm justify-center">
                    Мы проводим тщательный анализ, составляем короткий список и
                    представляем вам наиболее подходящих кандидатов, чтобы
                    упростить процесс собеседования.
                  </h1>
                </div>
              </div>
              <div className="grid">
                <div className="flex justify-center">
                  <img
                    alt="DownArrow"
                    src={downArrow}
                    width="100"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h1 className="pt-16 text-[#fca311] font-bold capitalize">
                  02. Целенаправленный поиск
                </h1>
                <h1 className="border-b-2"></h1>
                <h1 className="pt-10 text-sm text-white tracking-widest">
                  Наши консультанты, обладая глубокими знаниями отрасли и
                  широкой сетью контактов, тщательно подбирают наиболее
                  подходящие кандидатуры.
                </h1>
                <div className="flex justify-center rotate-90">
                  <img
                    alt="DownArrow"
                    src={downArrow}
                    width="100"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-4 md:hidden">
              <div className="px-2">
                <h1 className="text-[#fca311] tracking-wider font-bold capitalize">
                  01. Стратегическая консультация
                </h1>
                <div className="grid place-content-center py-2 border-t-[#fca311]">
                  <h1 className="py-2 px-6 tracking-widest text-white text-sm">
                    Мы глубоко погружаемся в вашу компанию, её культуру,
                    ценности и требования к роли, чтобы полностью понять ваши
                    ожидания.
                  </h1>
                </div>
              </div>
              <div className="px-2">
                <h1 className="text-[#fca311] tracking-wider font-bold capitalize">
                  02. Целенаправленный поиск
                </h1>
                <div className="grid place-content-center py-2 border-t-[#fca311]">
                  <h1 className="py-2 px-6 tracking-widest text-white text-sm">
                    Наши консультанты, обладая глубокими знаниями отрасли и
                    широкой сетью контактов, тщательно подбирают наиболее
                    подходящие кандидатуры.
                  </h1>
                </div>
              </div>
              <div className="px-2">
                <h1 className="text-[#fca311] tracking-wider font-bold capitalize">
                  03. Детальная оценка
                </h1>
                <div className="grid place-content-center py-2 border-t-[#fca311]">
                  <h1 className="py-2 px-6 tracking-widest text-white text-sm">
                    Мы проводим тщательный анализ, составляем короткий список и
                    представляем вам наиболее подходящих кандидатов, чтобы
                    упростить процесс собеседования.
                  </h1>
                </div>
              </div>
              <div className="px-2">
                <h1 className="text-[#fca311] tracking-wider font-bold capitalize">
                  04. Беспроблемная адаптация
                </h1>
                <div className="grid place-content-center py-2 border-t-[#fca311]">
                  <h1 className="py-2 px-6 tracking-widest text-white text-sm">
                    После собеседований мы берем на себя весь процесс — от сбора
                    отзывов и подготовки предложений до проверки рекомендаций.
                    Мы заботимся о всех деталях, освобождая ваше время для
                    решения ключевых задач.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Carousel page="whoweare" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
