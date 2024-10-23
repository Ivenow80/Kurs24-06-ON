import styles from "./StandardBtn.module.css";

function StandardBtn({ title }) {
  return <button className={styles.btnContainer}>{title}</button>;
}

export default StandardBtn;
