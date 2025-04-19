
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PlusIcon, UsersIcon } from "lucide-react";

export default function Contacts() {
  // Empty state initially with no contacts
  const hasContacts = false;

  const handleAddContact = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Add contact clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Contacts</h1>
          <p className="mt-1 text-drive-subtext">Manage your contacts and leads</p>
        </div>
        <Button onClick={handleAddContact} className="bg-drive-primary hover:bg-drive-secondary text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {!hasContacts ? (
        <EmptyState
          icon={<UsersIcon className="h-12 w-12" />}
          title="No contacts yet"
          description="Add your first contact to start building your network. Keep track of all your leads and customers in one place."
          actionLabel="Add Contact"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={handleAddContact}
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
