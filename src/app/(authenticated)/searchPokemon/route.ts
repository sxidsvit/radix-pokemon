import { NextRequest, NextResponse } from "next/server";

import { getFullPokemon } from "@/pokemon";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  console.log('url.searchParams: ', url.searchParams);
  const q = url.searchParams.get("q") ?? "";
  const limit = url.searchParams.get("limit") ?? 10;
  return NextResponse.json(await getFullPokemon(+limit, q));
}
