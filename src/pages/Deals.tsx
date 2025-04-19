
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { FileTextIcon, PlusIcon } from "lucide-react";

export default function Deals() {
  // Empty state initially with no deals
  const hasDeals = false;

  // Deal stages for the Kanban board
  const stages = [
    { id: "new", name: "New", color: "bg-blue-500" },
    { id: "contacted", name: "Contacted", color: "bg-purple-500" },
    { id: "demo", name: "Demo", color: "bg-indigo-500" },
    { id: "proposal", name: "Proposal Sent", color: "bg-orange-500" },
    { id: "closed_won", name: "Closed Won", color: "bg-green-500" },
    { id: "closed_lost", name: "Closed Lost", color: "bg-red-500" },
  ];

  const handleAddDeal = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Add deal clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Deals</h1>
          <p className="mt-1 text-drive-subtext">Manage your sales pipeline</p>
        </div>
        <Button onClick={handleAddDeal} className="bg-drive-primary hover:bg-drive-secondary text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Deal
        </Button>
      </div>

      {!hasDeals ? (
        <EmptyState
          icon={<FileTextIcon className="h-12 w-12" />}
          title="Pipeline is empty"
          description="Start tracking deals today! Add your first opportunity to visualize your sales pipeline and track progress."
          actionLabel="Add Deal"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={handleAddDeal}
          className="mt-16 rounded-xl border border-drive-border bg-drive-card p-8"
        />
      ) : (
        <div className="mt-6 flex h-[calc(100vh-240px)] gap-4 overflow-x-auto pb-8">
          {stages.map((stage) => (
            <div key={stage.id} className="flex w-80 flex-shrink-0 flex-col">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`mr-2 h-3 w-3 rounded-full ${stage.color}`} />
                  <h3 className="font-medium text-white">{stage.name}</h3>
                </div>
                <div className="text-sm text-drive-subtext">0</div>
              </div>
              <div className="flex-1 rounded-xl border border-drive-border bg-drive-card p-2">
                {/* Deal cards would go here for each stage */}
                <div className="flex h-full items-center justify-center p-4">
                  <p className="text-center text-sm text-drive-subtext">
                    No deals in this stage
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
