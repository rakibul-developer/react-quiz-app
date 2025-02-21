import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../button/Button";
import Checkbox from "../form/Checkbox";
import Form from "../form/Form";
import TextInput from "../form/TextInput";
import Illustration from "../illustration/Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={signupImage} alt="Signup" />
        </Illustration>
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter password" icon="lock" />
          <TextInput
            type="text"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox type="checkbox" text="I agree to the Terms & Conditions" />
          <Button>Submit now</Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
