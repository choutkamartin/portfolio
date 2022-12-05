// Layouts are made differently in 13
// You can use different layouts for different pages

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import TransitionEffect1 from "components/Transition";

// Import Inter font from Google Fonts
import ScrollIndicator from "components/ScrollIndicator.jsx/ScrollIndicator";

// This is what you need to do to use imported Inter font
// Keep in mind this font is a variable one
// For correct functionality you then have to use it's classname inside body className

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="z-10 mx-auto w-full max-w-4xl py-10 px-4 lg:px-0 lg:py-20">
        <TransitionEffect1>{children}</TransitionEffect1>
      </main>
      <div className="fixed bottom-0 w-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,32L17.1,37.3C34.3,43,69,53,103,58.7C137.1,64,171,64,206,90.7C240,117,274,171,309,176C342.9,181,377,139,411,144C445.7,149,480,203,514,218.7C548.6,235,583,213,617,213.3C651.4,213,686,235,720,240C754.3,245,789,235,823,240C857.1,245,891,267,926,261.3C960,256,994,224,1029,176C1062.9,128,1097,64,1131,74.7C1165.7,85,1200,171,1234,181.3C1268.6,192,1303,128,1337,96C1371.4,64,1406,64,1423,64L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
