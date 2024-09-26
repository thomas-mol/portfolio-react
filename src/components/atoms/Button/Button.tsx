import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  type: "primary" | "secondary";
}

const Button = ({ children, type }: Props) => {
  const buttonClass = type === "primary" ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.button} ${buttonClass}`}>{children}</button>
  );
};

export default Button;
