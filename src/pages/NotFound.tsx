
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-drive-dark p-4 text-center">
      <h1 className="text-9xl font-bold text-drive-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
      <p className="mt-2 max-w-md text-drive-subtext">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button
        onClick={() => navigate("/dashboard")}
        className="mt-8 bg-drive-primary hover:bg-drive-secondary text-white"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>
    </div>
  );
}
