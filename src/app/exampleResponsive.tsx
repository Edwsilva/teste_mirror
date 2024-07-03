import { useMediaQuery } from "react-responsive";
import SimpleSlider from "./components/Layout/Slick/SimpleSlider";
import Servicos from "./components/Layout/Slick/Servicos";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const Example = () => (
  <div>
    <Desktop>
      <Servicos />
    </Desktop>

    <Mobile>
      <SimpleSlider />
    </Mobile>
    <Default>
      {" "}
      <Servicos />
    </Default>
  </div>
);

export default Example;
