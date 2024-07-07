import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ratelimit } from '@/lib/ratelimiter';

export async function middleware(req: NextRequest) {
  const ip = req.ip ?? "127.0.0.1";
  const { success, limit, reset, remaining } = await ratelimit.limit(
      ip
  )

  if (!success) {
      console.log("limit", limit)
      console.log("reset", reset)
      console.log("remaining", remaining)

      return NextResponse.json("Rate limited", { status: 429});
  }
  return NextResponse.json("success", {status: 200})
}

export const config = {
  matcher: '/:path*',
};