
import { Login } from "@/components/login";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'login',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function buat() {
  return (
    <Login/>
  );
}
