
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/J4TzOfevOU6
 */
import { Deta } from "deta";

import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useEffect, useState } from 'react';
const deta = Deta("c0xauewxmm6_MZAwmovmUXAEUK4CBdyFqqvCCxf5CH6Z");
const db = deta.Base("vpn");


// db untuk server
const deta_apikey = "c0runvyelq4_DfWDRc1BcuogxGgc2j4sdh4uJxyFifrg";
const db_serv = Deta(deta_apikey).Base('serv')


async function getAllServ() {
  let res = await db_serv.fetch();
  let allItems = res.items;
  let z = allItems.map(x => x.key);
  return z;
}




export async function Dashboard({ saldo }) {
  try {

    // console.log(data)
    // const saldo = data.saldo
    // const [servArray, setServArray] = useState([]);

    // useEffect(() => {
    //   const data = getAllServ();
    //   setServArray(data);
    // }, []);
    return (
      <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Package2Icon className="h-6 w-6" />
                <span>Toko MADEWGN</span>
              </Link>
              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <PackageIcon className="h-4 w-4" />
                  Services
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                      id="billing"
                      size="icon"
                      variant="ghost"
                    >
                      <DollarSignIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle billing menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[200px] py-1 text-sm" id="billing">
                    <DropdownMenuItem>Rp {saldo}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Top Up</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="w-6 h-6" />
              <span className="sr-only">Home</span>
            </Link>
            <h1 className="font-semibold text-lg md:text-2xl">New Service</h1>
            <Button size="sm">Save</Button>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">Service Details</CardTitle>
                  <CardDescription>Enter the details of the new service</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Label>
                    <span>Name</span>
                    <Input placeholder="Enter the name of the service" />
                  </Label>
                  <Label>
                    <span>Description</span>
                    <Textarea className="min-h-[100px]" placeholder="Enter the description of the service" />
                  </Label>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">Pricing</CardTitle>
                  <CardDescription>Set the pricing for the new service</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center">
                  <div className="grid gap-1">
                    <Label>
                      <span>One-time</span>
                      <Input placeholder="Enter the name of the service" />
                    </Label>
                    <Label>
                      <span>Recurring</span>
                      <Input placeholder="Enter the name of the service" />
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Existing Services</CardTitle>
                <CardDescription>View and manage the existing services</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Server</TableHead>
                      <TableHead>Protcol</TableHead>
                      <TableHead>Pricing</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
           
                      <TableRow>
                        <TableCell className="font-medium"></TableCell>
                        <TableCell></TableCell>
                        <TableCell>$499.00</TableCell>
                      </TableRow>
               
                    <TableRow>
                      <TableCell className="font-medium">SEO Package</TableCell>
                      <TableCell>SSH, Trojan, Vmess, Vless</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Social Media Marketing</TableCell>
                      <TableCell>SSH, Trojan, Vmess, Vless</TableCell>
                      <TableCell>$299.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    )
  } catch (error) {
    console.log(error)
    return new Response(redirect('/login'))
  }
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


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}



function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
