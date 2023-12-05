import { Button } from "@/components/ui/button";
import { Disc3, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false as boolean);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center ">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="pl-2"
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="pl-2"
                  type="email"
                  id="name"
                  placeholder="Name of your project"
                />
              </div>{" "}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="pl-2"
                  id="password"
                  type="password"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  className="pl-2"
                  type="password"
                  id="confirmPassword"
                  placeholder="Name of your project"
                />
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-[100px]}">
            {isLoading ? (
              <Disc3 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </CardFooter>
        <CardContent>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button type="button" className="w-full mt-6" disabled={isLoading}>
            {isLoading ? (
              <Disc3 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Github color="white" className="mr-2 h-4 w-4" />
            )}
            Github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
