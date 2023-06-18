import verifyemail from "./../../../../assets/images/SignIn/verifyemail.png";
import "./LastStepper.scss";

const LastStepper = () => {
  return (
    <div className="fourth-stepper" style={{paddingBlock:'2.2rem'}}>
      <img src={verifyemail} alt="email_icon" />
      <p className="sent-email">
        An email has been sent to Jhonsmith@mail.com to verify your email
        address.<br/> Please check your inbox and click on the link in the Email for
        account activation.
      </p>
      <p className="not-received">Haven't received any email</p>
    </div>
  );
};
export default LastStepper;
