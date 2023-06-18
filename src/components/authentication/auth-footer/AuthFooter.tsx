import "./authFooter.scss";
import facebook from "../../../assets/images/SignIn/facebook.png";
import instagram from "../../../assets/images/SignIn/instagram.png";
import linkedin from "../../../assets/images/SignIn/linkedin.png";
import twitter from "../../../assets/images/SignIn/twitter.png";
import youtube from "../../../assets/images/SignIn/youtube.png";
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <div className="auth-footer">
      <p className="copy-rights">
        Copyrights © 2022 All Rights Reserved by <span>ClockLog</span>
      </p>
      <div className="social-icons">
        <Link to="/">
          <img className="icon" src={twitter} alt="Twitter" />
        </Link>
        <Link to="/">
          <img className="icon" src={instagram} alt="Instagram" />
        </Link>
        <Link to="/">
          <img className="icon" src={facebook} alt="Facebook" />
        </Link>
        <Link to="/">
          <img className="icon" src={linkedin} alt="Linkedin" />
        </Link>
        <Link to="/">
          <img className="icon" src={youtube} alt="Youtube" />
        </Link>
      </div>
      <p className="coolie-policy">
        Cookie Policy &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms & Conditions
      </p>
    </div>
  );
};

export default AuthFooter;
