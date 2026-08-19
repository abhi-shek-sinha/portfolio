import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import StackSection from "./components/StackSection";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <StackSection />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
