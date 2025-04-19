
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-drive-subtext">Manage your CRM settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-drive-card">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="fields">Custom Fields</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card className="border-drive-border bg-drive-card">
            <CardHeader>
              <CardTitle className="text-white">Company Settings</CardTitle>
              <CardDescription className="text-drive-subtext">
                Update your company information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name" className="text-drive-subtext">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="Your Company, Inc."
                    className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-drive-subtext">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://yourcompany.com"
                    className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-drive-subtext">Default Timezone</Label>
                  <Input
                    id="timezone"
                    placeholder="UTC-05:00 Eastern Time (US & Canada)"
                    className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                  />
                </div>
              </div>

              <Separator className="my-4 bg-drive-border" />

              <div>
                <h3 className="mb-3 text-lg font-medium text-white">Theme Settings</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-drive-primary" />
                    <div className="text-sm text-drive-subtext">Primary Color</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-drive-secondary" />
                    <div className="text-sm text-drive-subtext">Secondary Color</div>
                  </div>
                </div>
              </div>

              <Separator className="my-4 bg-drive-border" />

              <Button className="bg-drive-primary hover:bg-drive-secondary text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card className="border-drive-border bg-drive-card">
            <CardHeader>
              <CardTitle className="text-white">User Management</CardTitle>
              <CardDescription className="text-drive-subtext">
                Add, edit or remove users and assign roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-drive-border">
                <div className="flex items-center justify-between p-4">
                  <div className="text-center text-drive-subtext">
                    No users added yet. Add team members to collaborate.
                  </div>
                </div>
              </div>
              <Button className="mt-4 bg-drive-primary hover:bg-drive-secondary text-white">
                Add Team Member
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pipeline" className="mt-6">
          <Card className="border-drive-border bg-drive-card">
            <CardHeader>
              <CardTitle className="text-white">Pipeline Editor</CardTitle>
              <CardDescription className="text-drive-subtext">
                Customize your sales pipeline stages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border border-drive-border p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-white">New</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <span className="text-white">Contacted</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-indigo-500" />
                    <span className="text-white">Demo</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-white">Proposal Sent</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-white">Closed Won</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="text-white">Closed Lost</span>
                  </div>
                </div>
                <Button className="bg-drive-primary hover:bg-drive-secondary text-white">
                  Edit Pipeline Stages
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fields" className="mt-6">
          <Card className="border-drive-border bg-drive-card">
            <CardHeader>
              <CardTitle className="text-white">Custom Fields</CardTitle>
              <CardDescription className="text-drive-subtext">
                Add custom fields to contacts, companies and deals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="bg-drive-primary hover:bg-drive-secondary text-white">
                  Add Custom Field
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <Card className="border-drive-border bg-drive-card">
            <CardHeader>
              <CardTitle className="text-white">Integrations</CardTitle>
              <CardDescription className="text-drive-subtext">
                Connect with email, calendar and other tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-drive-border p-6 text-center">
                <p className="text-drive-subtext">
                  No integrations configured. Connect your email, calendar and other tools to streamline your workflow.
                </p>
                <Button className="mt-4 bg-drive-primary hover:bg-drive-secondary text-white">
                  Connect Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
