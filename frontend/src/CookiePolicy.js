import logow384 from "./_next/logo-2w384.png";
import logow750 from "./_next/logo-2w750.png";

import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

function CookiePolicy() {
  return (
    <div className="cookiePolicy">
      <div id="__next">
        <NavBar />
        <div>
          <div className="py-10 bg-[#14213d]"></div>
          <div className="md:w-[1080px] mx-auto px-4 md:px-[40px] py-10">
            <div className="grid md:grid-cols-2 font-[Montserrat] font-bold">
              <div>
                <h1 className="flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Location_On">
                      <g>
                        <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                        <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                      </g>
                    </g>
                  </svg>
                  04 Westdale Gardens, Manchester M19 1JD
                </h1>
                <p className="flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                    ></path>
                  </svg>
                  +44 7494 051093
                </p>
                <div className="flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Mail">
                      <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path>
                    </g>
                  </svg>
                  <a href="https://magnetrecruit.com/Component/info@magnetrectuit.com">
                    <p>info@magnetrecruit.uk</p>
                  </a>
                </div>
                <h1 className="py-4 uppercase text-2xl">
                  magnet recruit limited
                </h1>
                <p>Modified: 24.01.2024</p>
              </div>
              <div className="py-12 px-4 hidden md:block">
                <img
                  alt="/"
                  srcSet={`${logow384} 1x, ${logow750} 2x`}
                  src={logow750}
                  width="350"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="py-12 font-[Montserrat] md:w-[1080px]">
              <h1 className="text-xl py-2 font-bold">Introduction</h1>
              <p className="tracking-wide">
                Welcome to Magnet Recruit&#x27;s Cookies Policy. This policy is
                designed to inform you about the use of cookies on our website.
              </p>
              <h1 className="text-xl py-2 font-bold">What are Cookies?</h1>
              <p className="tracking-wide">
                Cookies are small text files that are stored on your device when
                you visit a website. They are widely used to make websites work
                efficiently and provide information to the website owners.
              </p>
              <h1 className="text-xl py-2 font-bold">How We Use Cookies</h1>
              <p className="tracking-wide">
                We use cookies for various purposes, including but not limited
                to:
                <li className="md:pl-4">
                  Authentication: To log you into your account.
                </li>
                <li className="md:pl-4">
                  Preferences: To remember your preferences and settings.
                </li>
                <li className="md:pl-4">
                  Analytics: To analyse how you interact with our website and
                  improve its performance.
                </li>
                <li className="md:pl-4">
                  Marketing: To deliver relevant advertisements to you.
                </li>
              </p>
              <h1 className="text-xl py-2 font-bold">
                Types of Cookies We Use
              </h1>
              <li className="font-semibold md:pl-4">Essential Cookies</li>
              <p className="tracking-wide md:pl-10">
                These cookies are necessary for the website to function
                properly. They enable core functionality, such as security,
                network management, and accessibility.
              </p>
              <li className="font-semibold md:pl-4">Analytics Cookies</li>
              <p className="tracking-wide md:pl-10">
                These cookies help us analyse and understand how visitors use
                our website. We use this information to improve our
                website&#x27;s performance and user experience.
              </p>
              <li className="font-semibold md:pl-4">Marketing Cookies</li>
              <p className="tracking-wide md:pl-10">
                We use marketing cookies to deliver relevant advertisements to
                you. These cookies may track your browsing habits and help us
                display personalized content.
              </p>
              <h1 className="text-xl py-2 font-bold">Third-Party Cookies</h1>
              <p className="tracking-wide">
                Some cookies on our website may be placed by third-party service
                providers. These third parties may include analytics services,
                advertising networks and social media platforms. We do not have
                control over these cookies. Please refer to the respective
                privacy policies of these third parties for more information.
              </p>
              <h1 className="text-xl py-2 font-bold">Cookie Management</h1>
              <p className="tracking-wide">
                Some cookies on our website may be placed by third-party service
                providers. These third parties may include analytics services,
                advertising networks and social media platforms. We do not have
                control over these cookies. Please refer to the respective
                privacy policies of these third parties for more information.
              </p>
              <h1 className="text-xl py-2 font-bold">Changes to This Policy</h1>
              <p className="tracking-wide">
                We may update this Cookies Policy from time to time. Any changes
                will be posted on this page, and the effective date will be
                updated accordingly.
              </p>
              <h1 className="text-xl py-2 font-bold">Contact Us</h1>
              <p className="tracking-wide">
                If you have any questions or concerns about our use of cookies,
                please contact us at
                <a
                  className="cursor-pointer text-blue-700 md:pl-2"
                  href="mailto:info@magnetrecruit.com"
                >
                  info@magnetrecruit.com
                </a>
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
