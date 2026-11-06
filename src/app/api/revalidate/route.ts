import { parseBody } from "next-sanity/webhook";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { contentTags } from "@/lib/content";

type WebhookPayload = { _type?: string };

/**
 * Sanity webhook target. In sanity.io/manage → API → Webhooks, point a webhook at
 * https://<your-domain>/api/revalidate with projection {_type} and the same secret as
 * SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret, true);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }
  if (!body?._type || !contentTags.includes(body._type)) {
    return NextResponse.json({ message: "Ignored", type: body?._type ?? null }, { status: 200 });
  }

  // expire: 0 so the next visitor sees the edit immediately rather than a stale copy.
  revalidateTag(body._type, { expire: 0 });
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: body._type, now: Date.now() });
}
