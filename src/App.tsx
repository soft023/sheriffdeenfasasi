import { Box } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills"; // 1. Make sure this import exists!
import Projects from "./Projects";
import Footer from "./Footer";
import Experience from "./Experience";

function App() {
  return (
    <Provider>
      <Box bg="black" minH="100vh">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />

        <Footer />
      </Box>
    </Provider>
  );
}

export default App;
