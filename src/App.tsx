import "./App.scss";
import {Header} from "./components/Header";
import {SmolCard} from "./components/SmolCard";
import {SmolContainer} from "./components/SmolContainer";
import {SmolResponsiveFlexbox} from "./components/SmolResponsiveFlexbox";
import {SmolScroll} from "./components/SmolScroll";
import {SmolSidebar} from "./components/SmolSidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SmolResponsiveFlexbox />
        <SmolContainer />
        <SmolSidebar />
        <SmolCard />
        <SmolScroll />
      </div>
    </>
  );
}

export default App;
