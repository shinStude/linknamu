import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/links";

const DB_NAME = "linknamu";
const COLLECTION = "clicks";

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection<{ _id: string; count: number }>(COLLECTION);

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
