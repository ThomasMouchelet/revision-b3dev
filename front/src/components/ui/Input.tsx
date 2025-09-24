export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className="border-2 border-gray-300 rounded-md p-2" {...props} />
  );
};
