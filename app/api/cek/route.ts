import type { NextApiRequest, NextApiResponse } from 'next';
import { Deta } from "deta";
import { getSession, login, logout } from "@/lib/ses";
import { middleware } from '@/middleware'; // Import middleware yang telah Anda buat

const deta = Deta("c0xauewxmm6_MZAwmovmUXAEUK4CBdyFqqvCCxf5CH6Z");
const db = deta.Base("vpn");



export async function GET(request: NextApiRequest) {
  // await middleware(request);
  const session = await getSession()
  console.log(session)
  
  const username = session.user.username;
  const data = await db.get(username);
  return new Response(JSON.stringify({ message: data.saldo }), {
    status: 200,
  });
}