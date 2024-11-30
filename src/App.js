import About from "./Component/About/About";
import Cirtificate from "./Component/Cirtificate/Cirtificate";
import Education from "./Component/Education/Education";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Markofall from "./Component/Marksofall/Markofall";
import Navebar from "./Component/Navebar/Navebar";
import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills/Skills";


function App() {
  const images = [
    "https://drive.google.com/open?id=1VxlGWvAqpRB4yRIj2NJL4HkXn4QDYNha&usp=drive_fs",
    "https://drive.google.com/file/d/1Z30XmciJQlwad-bpRmRg3twPT3v5Z94H/view?pli=1",
    "https://drive.google.com/file/d/1p9_AYcTSUasgB-KO2ftiN0bGH_TltEol/view?pli=1",
    "https://drive.google.com/file/d/18nUzOrCwc4dlO7jodFx9iLCMzE_rV62k/view?pli=1",
    ""
  ];

  return (
    <>
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navebar/>
      <Home />
      <About />
      <Skills />
      <Education />
      <Markofall />
      <Cirtificate images={images} autoSlide={true} interval={2000} />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default App;