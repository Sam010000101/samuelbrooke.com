import { useEffect } from "react";

type NotificationProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

export default function Notification({
  type,
  message,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-50 rounded-md px-4 py-2 shadow-lg transition-all duration-300 ${
        type === "success" ? "bg-green-500 text-black" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}
