import { Navbar } from "./components";
import Businnes from "./components/Businnes";
import Clients from "./components/Clients";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Billing from "./components/billing";
import Contract from "./components/contract";
import Home from "./components/home";
import Statistics from "./components/statistics";
import { styles } from "./util/style";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/*  */}
      <div className={` bg-primary${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Businnes />
          <Testimonials/>
          <Clients/>
          <Cta />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
