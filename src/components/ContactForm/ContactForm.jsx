import Button from "../Button/Button";
import styles from "./Contact.module.css";


const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button text = "VISA SUPPORT CHAT" icons={MdMessage}/>
      </div>
      <div className={styles.contact_images}></div>
    </section>
  );
};

export default ContactForm;
