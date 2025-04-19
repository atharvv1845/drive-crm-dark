
import { CalendarIcon, FileTextIcon, UsersIcon } from "lucide-react";
import { CustomCard } from "@/components/ui/custom-card";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-drive-subtext">Overview of your sales performance</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard 
          title="Qualified Leads" 
          value="0"
          description="No leads yet"
          icon={<UsersIcon className="h-6 w-6" />}
          className="bg-gradient-to-br from-drive-primary/20 to-drive-primary/5"
        />
        <MetricCard 
          title="Demos Booked" 
          value="0"
          description="No demos yet"
          icon={<CalendarIcon className="h-6 w-6" />}
          className="bg-gradient-to-br from-drive-secondary/20 to-drive-secondary/5"
        />
        <MetricCard 
          title="Closed Deals" 
          value="0"
          description="No closed deals yet"
          icon={<FileTextIcon className="h-6 w-6" />}
          className="bg-gradient-to-br from-drive-primary/20 to-drive-primary/5"
        />
        <MetricCard 
          title="Revenue Forecast" 
          value="$0"
          description="No revenue yet"
          icon={<FileTextIcon className="h-6 w-6" />}
          className="bg-gradient-to-br from-drive-secondary/20 to-drive-secondary/5"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CustomCard
          title="Monthly Pipeline Value"
          description="Track your monthly sales pipeline"
        >
          <div className="flex h-64 items-center justify-center">
            <div className="text-center">
              <p className="text-lg text-drive-subtext">No pipeline data yet</p>
              <p className="mt-2 text-sm text-drive-subtext">
                Add deals to see your pipeline value
              </p>
            </div>
          </div>
        </CustomCard>

        <CustomCard
          title="Sales Leaderboard"
          description="Top performing sales reps"
        >
          <div className="flex h-64 items-center justify-center">
            <div className="text-center">
              <p className="text-lg text-drive-subtext">No leaderboard data yet</p>
              <p className="mt-2 text-sm text-drive-subtext">
                Add team members to see your leaderboard
              </p>
            </div>
          </div>
        </CustomCard>
      </div>

      <CustomCard
        title="Upcoming Tasks"
        description="Tasks due today or soon"
      >
        <div className="flex h-40 items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-drive-subtext">No tasks for today</p>
            <p className="mt-2 text-sm text-drive-subtext">
              You're all caught up! 🎉
            </p>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

function MetricCard({ title, value, description, icon, className }: MetricCardProps) {
  return (
    <div className={`rounded-xl border border-drive-border p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-drive-subtext">{title}</p>
        {icon && <div className="rounded-full bg-drive-dark p-2 text-drive-primary">{icon}</div>}
      </div>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-drive-subtext">{description}</p>
    </div>
  );
}
