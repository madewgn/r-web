import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation'
import { Deta } from "deta";
import { getSession, login, logout } from "@/lib/ses";
const deta = Deta("c0xauewxmm6_MZAwmovmUXAEUK4CBdyFqqvCCxf5CH6Z");
const db = deta.Base("vpn");


export async function GET(request: NextApiRequest) {
  const session = await getSession()
  console.log(session)
  
  const username = session.user.username;
  const data = await db.get(username);
  return new Response(JSON.stringify({ message: data.saldo }), {
    status: 200,
  });
}


// export async function POST(request: Request) {
//   const body = await request.text(); // Read the raw text of the request body

//   // Parse the raw text body into a URLSearchParams object
//   const params = new URLSearchParams(body);

//   // Get username and password from the parsed body
//   const username = params.get('username');
//   const password = params.get('password');
//   const sta = await cek_login(username, password);
//   if (sta == true) {
//     return new Response(redirect('/dashboard'), {
//       status: 200,
//     });
//   }
//   else {
//     return new Response(redirect('/login'), {
//       status: 200,
//     });
//   }



// }
