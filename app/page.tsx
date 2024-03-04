
import { Dashboard } from "@/components/dashboard";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Reseller Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function Home() {
  return (
    <Dashboard/>
  );
}


