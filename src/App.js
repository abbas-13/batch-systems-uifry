import { Cover } from "./components/Cover";
import { FAQs } from "./components/FAQs/FAQs";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { GetStarted } from "./components/GetStarted";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Features />
      <Testimonials />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
