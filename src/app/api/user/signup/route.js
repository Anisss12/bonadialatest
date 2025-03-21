import User from "@/models/user.model";
import connect from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST() {
  await connect();
  try {
  } catch (error) {}
}
