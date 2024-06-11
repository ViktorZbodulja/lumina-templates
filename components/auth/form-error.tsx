import { AlertCircle } from "lucide-react";

function FormError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="bg-destructive/30 flex text-sm font-medium items-center gap-2 my-4 text-secondary-foreground p-3 rounded-md">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormError;
