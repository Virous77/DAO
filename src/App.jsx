import { Modal } from "./components/UI/Modal";
import Header from "./components/layout/Header";
import Content from "./components/main/Content";
import Contribution from "./components/main/Contribution";
import Tab from "./components/main/history/Tab";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Header />
      <section className=" max-w-full md:max-w-[1000px] m-auto grid grid-cols-2 items-start gap-3 mt-3">
        <Content />
        <Contribution />
      </section>
      <section className=" mt-10 max-w-full md:max-w-[1000px] m-auto ">
        <Tab />
      </section>
      <Toaster />
    </main>
  );
};

export default App;
