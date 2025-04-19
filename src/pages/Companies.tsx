
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { BriefcaseIcon, PlusIcon } from "lucide-react";

export default function Companies() {
  // Empty state initially with no companies
  const hasCompanies = false;

  const handleAddCompany = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Add company clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Companies</h1>
          <p className="mt-1 text-drive-subtext">Manage your company profiles</p>
        </div>
        <Button onClick={handleAddCompany} className="bg-drive-primary hover:bg-drive-secondary text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Company
        </Button>
      </div>

      {!hasCompanies ? (
        <EmptyState
          icon={<BriefcaseIcon className="h-12 w-12" />}
          title="No companies yet"
          description="Add your first company to start tracking organizations. Link contacts to companies and manage your B2B relationships effectively."
          actionLabel="Add Company"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={handleAddCompany}
          className="mt-16 rounded-xl border border-drive-border bg-drive-card p-8"
        />
      ) : (
        <div className="rounded-xl border border-drive-border bg-drive-card">
          {/* Company list would go here when populated */}
        </div>
      )}
    </div>
  );
}
