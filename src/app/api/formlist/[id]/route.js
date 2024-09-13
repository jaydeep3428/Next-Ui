import { connectionstr } from "@/app/util/db";
import { formdata } from "@/app/util/model/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const Id = content.params.id;
  const record = { _id: Id };

  await mongoose.connect(connectionstr);
  const result = await formdata.findById(record);

  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const Id = content.params.id;
  const record = { _id: Id };

  await mongoose.connect(connectionstr);
  const result = await formdata.deleteOne(record);

  return NextResponse.json({ result, success: true });
}
