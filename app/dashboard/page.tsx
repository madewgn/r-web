
import { Dashboard } from "@/components/dashboard";
import { get } from "https";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Reseller Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
// import { getSession, login, logout } from "@/lib/ses";
// const session = getSession()
const res = fetch(
  'http://localhost:3000/api/cek'
);
const data = res

export default function Home() {
  const saldo = data;
  return (
    <Dashboard saldo={saldo}/>
  );
}


