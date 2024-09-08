import img1 from "../_next/magnet-reviews.png";
import img2 from "../_next/magnet-licensy.png";

import "../_next/static/css/CompanyInfo.css";

const CompanyInfo = () => {
  return (
    <div className="company-info md:pt-24">
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img1} alt="" />
            </figure>
            <div className="article-body">
              <h2 align="center">Реестр</h2>
              <p>
                Наш реестр – это база данных, в которой собраны все ключевые
                данные о наших клиентах и партнёрах. Он служит надежным
                источником информации для внутреннего использования, обеспечивая
                точность и актуальность наших данных.
              </p>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/12710521/persons-with-significant-control"
                className="read-more"
                target="_blank"
                rel="noreferrer"
              >
                Читать далее{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img2} alt="" />
            </figure>
            <div className="article-body">
              <h2 align="center">Лицензия</h2>
              <p>
                Наша лицензия подтверждает легальность и безопасность нашей
                деятельности. Мы соблюдаем все нормативные требования, что
                гарантирует надежность наших услуг и защиту интересов наших
                клиентов.
              </p>
              <a
                href="https://magnet-recruit.tiiny.site/"
                className="read-more"
                target="_blank"
                rel="noreferrer"
              >
                Читать далее{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img1} alt="" />
            </figure>
            <div className="article-body">
              <h2 align="center">Отзывы</h2>
              <p>
                Отзывы наших клиентов – это лучшее доказательство качества наших
                услуг. Мы ценим каждое мнение и всегда стремимся улучшить наш
                сервис на основе обратной связи. Ваши отзывы помогают нам расти
                и становиться лучше каждый день!
              </p>
              <a
                href="https://t.me/MagnetRecruitReviews"
                className="read-more"
                target="_blank"
                rel="noreferrer"
              >
                Читать далее{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CompanyInfo;
