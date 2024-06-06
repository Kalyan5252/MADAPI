import Users from '@/models/userModel';
import jwt from 'jsonwebtoken';
import startDb from '../lib/db';
import { NextResponse } from 'next/server';

await startDb();

export async function GET(req) {
  try {
    const user = await Users.findOne();
    if (!user) throw new Error('User Not Found');
    // if (user.password !== password) throw new Error('Incorrect Credentials');
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  }
}

export async function POST(req) {
  //   const body = await req.json();
  //   const newUser = await Users.create(body);
  //   if (!newUser)
  //     return NextResponse.json(
  //       { message: 'Failed to add User' },
  //       { status: 500 }
  //     );
  //   return NextResponse.json(
  //     { message: 'User created Successfully' },
  //     { status: 200 }
  //   );

  try {
    const body = await req.json();
    const { userName, password } = body;
    console.log(body);
    console.log(userName, password);
    const user = await Users.findOne({ userName });
    if (!user) throw new Error('User Not Found');
    if (user.password !== password) throw new Error('Incorrect Credentials');
    return NextResponse.json({ message: 'Login Successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  }

  // try {
  //   // const body = await req.json();

  //   // console.log(body);
  //   console.log('got the req');
  //   return NextResponse.json({ message: 'Received ' }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ message: error.message }, { status: 404 });
  // }
}
