import { NextApiRequest, NextApiResponse } from 'next';
import { updateSession } from '@/lib/ses';

// Middleware untuk memperbarui sesi pengguna
export async function middleware(req: NextApiRequest, res: NextApiResponse) {
    // Panggil fungsi updateSession dan tunggu hasilnya
    const response = await updateSession(req);
    
    // Kembalikan respons dari middleware (jika diperlukan)
    return response;
}
