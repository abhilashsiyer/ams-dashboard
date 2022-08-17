import "./style.scss";

import AMSLogo from "./../../assets/AMS.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={AMSLogo} alt="AMS logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
