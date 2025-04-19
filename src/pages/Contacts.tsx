
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { FileText, PlusIcon, Upload, UsersIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ContactForm } from "@/components/contacts/ContactForm";
import { useToast } from "@/hooks/use-toast";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useRef } from "react";

export default function Contacts() {
  const [hasContacts, setHasContacts] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleUploadCSV = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would process the CSV file
      toast({
        title: "CSV Upload",
        description: `Uploaded ${file.name}`,
      });
      setHasContacts(true);
    }
  };

  const handleManualAdd = () => {
    setShowContactForm(true);
  };

  const handleContactSubmit = (data: any) => {
    console.log("New contact:", data);
    toast({
      title: "Contact Added",
      description: "New contact has been created successfully",
    });
    setShowContactForm(false);
    setHasContacts(true);
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        accept=".csv"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      
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

      <Sheet open={showContactForm} onOpenChange={setShowContactForm}>
        <SheetContent className="bg-drive-dark border-drive-border">
          <SheetHeader>
            <SheetTitle className="text-white">Add New Contact</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <ContactForm
              onSubmit={handleContactSubmit}
              onCancel={() => setShowContactForm(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
