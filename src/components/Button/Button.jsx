import { MdMessage } from "react-icons/md";
import styles from "./Button.moudle.css";

const Button = (props) => {
  return (
    <button className ={styles.primary_btn}>
      <MdMessage fontsize="24px" />
      VIA SUPPORT CHAT
    </button>
  );
};

export default Button;
