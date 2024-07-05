import { useMediaQuery } from "react-responsive";
import SimpleSlider from "./SimpleSlider";
import Servicos from "./Servicos";
import styles from "./home.module.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const ResponsiveSlick = () => (
  <div>
    {/* <Desktop>
      <Servicos />
    </Desktop> */}

    <Mobile>
      <SimpleSlider />
    </Mobile>
    <Default>
      <Servicos />
    </Default>
  </div>
);

export default ResponsiveSlick;
