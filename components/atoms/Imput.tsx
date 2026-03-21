type Props = {
  placeholder: string;
  type?: string;
};

export default function Input({ placeholder, type = "text" }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-md p-2 w-full bg-gray-200"
    />
  );
}