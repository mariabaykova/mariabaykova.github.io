import styles from "../styles/Header.module.scss";
export default function Header(props) {
  return <header className={styles.header}>{props.title}</header>;
}
