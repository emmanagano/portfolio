import pool from "@/lib/db";
import { NextResponse } from "next/server";

// GET all messages
export async function GET() {
	const result = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
	return NextResponse.json(result.rows);
}

// POST a new message
export async function POST(req: Request) {
	const { message } = await req.json();

	if (!message || message.trim() === "") {
	return NextResponse.json({ error: "Message is required" }, { status: 400 });
	}

	const result = await pool.query(
		"INSERT INTO messages (message) VALUES ($1) RETURNING *",
		[message]
	);

	return NextResponse.json(result.rows[0]);
}