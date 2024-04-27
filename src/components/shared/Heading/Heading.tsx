import styles from "./styles.module.css";

function Heading({ title }: { title: string }) {
  return <div className={styles.title}>{title}</div>;
}

export default Heading;
