import SignIn from "../../assets/images/SignIn/SignIn.png";
import "./ImageSideSignIn.scss";
const ImageSideSignInSection = () => {
  return (
    <>
      <div className="SignInImageSection">
        <img className="image-styles" src={SignIn} alt="logo" />
        <h4 className="WelcomeHeading">Welcome To ClockLog </h4>
        <h5 className="Question m-0">
          Do you require well-organized and effective monitoring and time
          tracking tool for organization?
        </h5>
        <p className="Description">
          ClockLog is providing you with all these features with better
          visualization and representation.<br/> Clocklog can be used in business
          industries, firms, and organizations to manage the teams and employees
          whether they are working in an office, remotely, or hybrid
        </p>
      </div>
    </>
  );
};

export default ImageSideSignInSection;
