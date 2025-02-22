import classes from "../../styles/Answers.module.css";
import Checkbox from "../form/Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        levelFor={"option1"}
        type="checkbox"
        id="option1"
        text="Text here"
      />
    </div>
  );
}
