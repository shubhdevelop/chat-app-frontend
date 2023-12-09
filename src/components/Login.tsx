import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Disc3, Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useState } from "react";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false as boolean);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center ">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your Credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-[100px]}">
            {isLoading ? (
              <Disc3 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Login"
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
};
