import { cookies } from "next/headers";
export async function POST(Request: Request) {
  let req = await Request.json();
  const cookieStore = cookies();
  cookieStore.set("testCookie", JSON.stringify(req));
  return Response.json({ test: 2 });
}
