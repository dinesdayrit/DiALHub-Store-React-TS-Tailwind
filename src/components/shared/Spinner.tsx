type SpinnerProps = {
  text?: string;
  type?: "lazyLoad" | "default";
};

const Spinner: React.FC<SpinnerProps> = ({ text, type = "default" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${
        type === "lazyLoad" ? "h-screen" : ""
      }`}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-green-600 dark:border-gray-600 dark:border-t-gray-400" />
      {text && <p className="text-gray-500 dark:text-gray-400">{text}</p>}
    </div>
  );
};

export default Spinner;
