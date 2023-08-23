import styles from "./button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      className={styles.button}
      aria-label={text}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
