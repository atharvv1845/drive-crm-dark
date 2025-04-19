
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { FileText, PlusIcon, Upload, UsersIcon } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Contacts() {
  // Empty state initially with no contacts
  const hasContacts = false;

  const handleUploadCSV = () => {
    console.log("Upload CSV clicked");
  };

  const handleManualAdd = () => {
    console.log("Manual add clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Contacts</h1>
          <p className="mt-1 text-drive-subtext">Manage your contacts and leads</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-drive-primary hover:bg-drive-secondary text-white">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2 bg-drive-dark border-drive-border">
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={handleUploadCSV}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload CSV
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={handleManualAdd}
              >
                <FileText className="mr-2 h-4 w-4" />
                Add Manually
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {!hasContacts ? (
        <EmptyState
          icon={<UsersIcon className="h-12 w-12" />}
          title="No contacts yet"
          description="Add your first contact to start building your network. Keep track of all your leads and customers in one place."
          actionLabel="Add Contact"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={() => handleManualAdd()}
          className="mt-16 rounded-xl border border-drive-border bg-drive-card p-8"
        />
      ) : (
        <div className="rounded-xl border border-drive-border bg-drive-card">
          {/* Contact list would go here when populated */}
        </div>
      )}
    </div>
  );
}
