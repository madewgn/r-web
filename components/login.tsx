/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/t2NuP2thK6K
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib/ses";



export function Login() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex flex-col w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="font-semibold text-lg md:text-2xl">Login</h1>
          <Button size="sm">Sign Up</Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Login</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
            <form action='/api/login' method='POST'>
              <Label>
                <span>Email</span>
                <Input name="username" id="username" placeholder="Enter your Telegram ID" type="text" />
              </Label>
              <Label>
                <span>Password</span>
                <Input name="password" id="password" placeholder="Enter your password" type="text" />
              </Label>
              <Button type="submit" value="Login"> login </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}