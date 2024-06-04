
// app/api/submitForm/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const { firstName, lastName, company, email, message } = data;

  // Add your Node.js backend logic here, e.g., saving to a database or forwarding the data
  // For now, let's just return the received data

  return NextResponse.json({ message: 'Form submitted successfully', data: { firstName, lastName, company, email, message } });
}
