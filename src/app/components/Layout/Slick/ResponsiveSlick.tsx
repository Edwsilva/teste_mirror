import { useMediaQuery } from "react-responsive";
import SimpleSlider from "./SimpleSlider";
import Servicos from "./Servicos";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Desktop = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: Props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
const Default = ({ children }: Props) => {
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
