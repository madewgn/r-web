import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation'
import { Deta } from "deta";

import { getSession, login, logout } from "@/lib/ses";

const deta = Deta("c0xauewxmm6_MZAwmovmUXAEUK4CBdyFqqvCCxf5CH6Z");
const db = deta.Base("vpn");

async function cek_login(id, pw) {
  try {
    const p = await db.get(id);
    // console.log(p)
    // Assuming `get` returns an array, so we take the first item
    if (p.pw === pw) {
      // console.log('berhasil login');
      return true;


    } else {
      // console.log("pw salah");
      return false
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


export async function GET(request: NextApiRequest) {
  return new Response(JSON.stringify({ message: "Welcome" }), {
    status: 200,
  });
}


export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData);

  // Get username and password from the formData
  const username = formData.get('username');
  const password = formData.get('password');
  
  const sta = await cek_login(username, password);
  if (sta == true) {
    await login(formData);
    return new Response(redirect('/dashboard'), {
      status: 200,
    });
  }
  else {
    return new Response(redirect('/login'), {
      status: 200,
    });
  }



}
