// Layouts are made differently in 13
// You can use different layouts for different pages

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import TransitionEffect1 from "components/Transition";

// Import Inter font from Google Fonts
import { Raleway } from "@next/font/google";
import ScrollIndicator from "components/ScrollIndicator.jsx/ScrollIndicator";

// This is what you need to do to use imported Inter font
// Keep in mind this font is a variable one
// For correct functionality you then have to use it's classname inside body className
const inter = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.variable} flex min-h-screen flex-col justify-between bg-gray-50 font-sans`}
    >
      <Header />

      <main className="z-10 mx-auto w-full max-w-4xl py-36 px-4">
        <TransitionEffect1>{children}</TransitionEffect1>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
