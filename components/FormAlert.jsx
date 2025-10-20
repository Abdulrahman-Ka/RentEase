import { CircleAlertIcon } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

const FormAlert = ({ message }) => {
  return (
    <Alert
      variant="destructive"
      className="p-1 m-0 h-0.2 text-xs border-red-600 rounded-md "
    >
      <CircleAlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
export default FormAlert;
