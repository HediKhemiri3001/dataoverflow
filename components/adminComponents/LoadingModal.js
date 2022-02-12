import styles from "./LoadingModal.module.css";
export default function LoadingModal({ show }) {
  const showHideClassName = show
    ? styles["modal display-block"]
    : styles["modal display-none"];

  return (
    <div className={showHideClassName}>
      <section className={styles["modal-main"]}>Loading ...</section>
    </div>
  );
}
