
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { CheckIcon, PlusIcon } from "lucide-react";

export default function Tasks() {
  // Empty state initially with no tasks
  const hasTasks = false;

  const handleAddTask = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Add task clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Tasks</h1>
          <p className="mt-1 text-drive-subtext">Manage your to-dos and follow-ups</p>
        </div>
        <Button onClick={handleAddTask} className="bg-drive-primary hover:bg-drive-secondary text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-white hover:bg-drive-border"
        >
          All Tasks
        </Button>
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-drive-subtext hover:bg-drive-border"
        >
          Today
        </Button>
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-drive-subtext hover:bg-drive-border"
        >
          This Week
        </Button>
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-drive-subtext hover:bg-drive-border"
        >
          Completed
        </Button>
      </div>

      {!hasTasks ? (
        <EmptyState
          icon={<CheckIcon className="h-12 w-12" />}
          title="No tasks for today"
          description="You're all caught up! Add tasks to stay organized and never miss a follow-up with your contacts and deals."
          actionLabel="Add Task"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={handleAddTask}
          className="mt-16 rounded-xl border border-drive-border bg-drive-card p-8"
        />
      ) : (
        <div className="rounded-xl border border-drive-border bg-drive-card">
          {/* Task list would go here when populated */}
        </div>
      )}
    </div>
  );
}
