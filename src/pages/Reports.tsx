
import { Button } from "@/components/ui/button";
import { CustomCard } from "@/components/ui/custom-card";
import { EmptyState } from "@/components/ui/empty-state";
import { BarChartIcon, PlusIcon } from "lucide-react";

export default function Reports() {
  // Empty state initially with no data
  const hasData = false;

  const handleCreateReport = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Create report clicked");
  };

  const reportTypes = [
    {
      title: "Monthly Sales",
      description: "Track your monthly sales performance",
      icon: <BarChartIcon className="h-12 w-12" />,
    },
    {
      title: "Win/Loss Ratio",
      description: "Analyze your deal success rate",
      icon: <BarChartIcon className="h-12 w-12" />,
    },
    {
      title: "Conversion Rate by Source",
      description: "See which lead sources convert best",
      icon: <BarChartIcon className="h-12 w-12" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports</h1>
          <p className="mt-1 text-drive-subtext">
            Analyze your sales performance and track metrics
          </p>
        </div>
        <Button
          onClick={handleCreateReport}
          className="bg-drive-primary hover:bg-drive-secondary text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Create Report
        </Button>
      </div>

      {!hasData ? (
        <div className="grid gap-6 md:grid-cols-3">
          {reportTypes.map((report) => (
            <CustomCard key={report.title} className="flex flex-col items-center p-8">
              <div className="mb-4 rounded-full bg-drive-border p-3 text-drive-subtext">
                {report.icon}
              </div>
              <h3 className="mb-2 text-center text-xl font-medium text-white">
                {report.title}
              </h3>
              <p className="mb-6 text-center text-drive-subtext">
                {report.description}
              </p>
              <Button
                onClick={handleCreateReport}
                className="bg-drive-primary hover:bg-drive-secondary text-white"
              >
                Generate Report
              </Button>
            </CustomCard>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<BarChartIcon className="h-12 w-12" />}
          title="No reports yet"
          description="Create your first report to gain insights into your sales performance."
          actionLabel="Create Report"
          actionIcon={<PlusIcon className="h-4 w-4" />}
          onAction={handleCreateReport}
          className="mt-16 rounded-xl border border-drive-border bg-drive-card p-8"
        />
      )}
    </div>
  );
}
