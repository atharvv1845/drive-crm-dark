
import { Button } from "@/components/ui/button";
import { CustomCard } from "@/components/ui/custom-card";
import { CalendarIcon, PlusIcon } from "lucide-react";

export default function Calendar() {
  // Empty state initially with no events
  const hasEvents = false;

  const handleAddEvent = () => {
    // This would open a modal or navigate to a form in a real app
    console.log("Add event clicked");
  };

  // Generate calendar grid days
  const generateCalendarDays = () => {
    const days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Day names row
    const dayNamesRow = (
      <div className="grid grid-cols-7 border-b border-drive-border" key="header">
        {dayNames.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-drive-subtext"
          >
            {day}
          </div>
        ))}
      </div>
    );
    days.push(dayNamesRow);
    
    // Calendar days - 5 weeks
    for (let week = 0; week < 5; week++) {
      const weekRow = (
        <div
          className="grid grid-cols-7 border-b border-drive-border"
          key={`week-${week}`}
        >
          {Array(7)
            .fill(0)
            .map((_, dayIndex) => {
              const dayNumber = week * 7 + dayIndex + 1;
              return (
                <div
                  key={`day-${dayNumber}`}
                  className="min-h-24 border-r border-drive-border p-1 last:border-r-0"
                >
                  <div className="text-xs font-medium text-drive-subtext">
                    {dayNumber <= 31 ? dayNumber : ""}
                  </div>
                  {/* Event placeholders would go here */}
                </div>
              );
            })}
        </div>
      );
      days.push(weekRow);
    }
    
    return days;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Calendar</h1>
          <p className="mt-1 text-drive-subtext">Schedule and track your meetings and calls</p>
        </div>
        <Button onClick={handleAddEvent} className="bg-drive-primary hover:bg-drive-secondary text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button 
          className="bg-drive-primary text-white hover:bg-drive-secondary"
        >
          Month
        </Button>
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-drive-subtext hover:bg-drive-border"
        >
          Week
        </Button>
        <Button 
          variant="outline" 
          className="border-drive-border bg-drive-card text-drive-subtext hover:bg-drive-border"
        >
          Day
        </Button>
      </div>

      <CustomCard className="p-0">
        <div className="flex items-center justify-between border-b border-drive-border p-4">
          <div className="font-medium text-white">April 2025</div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-drive-border bg-drive-card p-0 text-drive-subtext hover:bg-drive-border"
            >
              &lt;
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-drive-border bg-drive-card p-0 text-drive-subtext hover:bg-drive-border"
            >
              &gt;
            </Button>
          </div>
        </div>
        
        <div className="divide-y divide-drive-border">
          {hasEvents ? (
            generateCalendarDays()
          ) : (
            <>
              {generateCalendarDays()}
              <div className="absolute inset-0 flex items-center justify-center bg-drive-card bg-opacity-90">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-drive-border">
                    <CalendarIcon className="h-8 w-8 text-drive-subtext" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">No events scheduled</h3>
                  <p className="mb-4 text-drive-subtext">
                    Schedule your first meeting or call to populate your calendar
                  </p>
                  <Button onClick={handleAddEvent} className="bg-drive-primary hover:bg-drive-secondary text-white">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </CustomCard>
    </div>
  );
}
