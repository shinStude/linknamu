import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/links";

const DB_NAME = "linknamu";
const COLLECTION = "clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection<{ _id: string; count: number }>(COLLECTION);

  const ids = links.map((link) => link.id);
  const docs = await collection.find({ _id: { $in: ids } }).toArray();
  const counts = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
