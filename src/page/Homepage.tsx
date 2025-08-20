import Banner_section from "../components/Homepage/Banner_section";
import Services_section from "../components/Homepage/Services_section";
import Cashback_section from "../components/Homepage/Cashback_section";
import Projects_section from "../components/Homepage/Projects_section";
import Baner4buoc from "../components/Homepage/Baner4buoc";
import BatDongSanGiaTot from "../components/Homepage/BatDongSanGiaTot";
import TinTuc from "../components/Homepage/TinTuc";

const Homepage = () => {
  return (
    <div className="">
      <Banner_section />
      <Services_section />
      <Cashback_section />
      <Projects_section />
      <Baner4buoc />
      <BatDongSanGiaTot />
      <TinTuc />
    </div>
  );
};

export default Homepage;
