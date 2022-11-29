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
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-gray-50">
      <Header />

      <main className="z-10 mx-auto w-full max-w-4xl py-10 px-4  lg:px-0 lg:py-20">
        <TransitionEffect1>{children}</TransitionEffect1>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
