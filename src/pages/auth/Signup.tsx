
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here you would integrate with your authentication backend
    // For now we'll simulate by redirecting to dashboard after delay
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-drive-dark p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            <span className="text-drive-primary">Drive</span>CRM
          </h1>
          <p className="mt-2 text-drive-subtext">Sales CRM for SaaS Teams</p>
        </div>
        
        <Card className="border-drive-border bg-drive-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Create an account</CardTitle>
            <CardDescription className="text-drive-subtext">
              Enter your details to create your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-drive-subtext">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-drive-subtext">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-drive-subtext">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-drive-subtext">Role</Label>
                <Select
                  value={role}
                  onValueChange={setRole}
                >
                  <SelectTrigger
                    id="role"
                    className="border-drive-border bg-drive-dark focus:border-drive-primary focus:ring-drive-primary"
                  >
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="border-drive-border bg-drive-card">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="sales_rep">Sales Rep</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-drive-primary hover:bg-drive-secondary text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
              <p className="text-center text-sm text-drive-subtext">
                Already have an account?{" "}
                <Link to="/" className="font-medium text-drive-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
