interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
  type?: "submit" | "button";
  children: string;
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  const generateClass = (color: string) => {
    return `bg-${color}-500 hover:bg-${color}-700`;
  };

  const variantClasses = {
    primary: generateClass("blue"),
    danger: generateClass("red"),
  };

  return (
    <button
      type={type}
      className={`text-white rounded-md p-2 cursor-pointer transition-all ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
