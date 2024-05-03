interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
  //The ? means that it's optional. I give it a default value
}

//i pass a default value on color
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
