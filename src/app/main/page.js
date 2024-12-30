import Nav from "@/components/Nav";
import IntroSection from "../layout/introSection";
import ProjectSection from "../layout/projectSection";
import ContactSection from "../layout/contactSection";

const mainPage = () => {
  return (
    <>
    <Nav />
    <IntroSection />
    <ProjectSection />
    <ContactSection />
    </>
  );
}

export default mainPage;