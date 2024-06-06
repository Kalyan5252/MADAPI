import startDb from '../lib/db';
import { NextResponse } from 'next/server';
import Requests from '@/models/requestModel';

await startDb();

export async function GET(req) {
  try {
    // const data = await Requests.find({ active: true });
    const data = await Requests.find();

    if (!data) throw new Error('Cannot get Data');
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // let active = true;
    const body = await req.json();
    const { type, userName } = body;

    const active = body.active ?? true;
    const subject = body.subject ?? '';
    const message = body.message ?? '';

    const request = await Requests.create({
      type,
      userName,
      active,
      subject,
      message,
    });
    return NextResponse.json(
      { message: 'Request Submitted Successfully', request },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error Occured', message: error.message },
      { status: 500 }
    );
  }
}
