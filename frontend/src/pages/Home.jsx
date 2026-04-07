import Footer from "../components/Footer";
import Header from "../components/Header";
import { Process } from "../components/Process";
import Services from "../components/Services";
import Team from "../components/Team";
import { Trust } from "../components/Trust";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Services />
      <Process />
      <Trust />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
