import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, company, email, message } = data;
    console.log('Attempting to connect to database...');

    const formSubmission = await prisma.formSubmission.create({
      data: {
        firstName,
        lastName,
        company,
        email,
        message,
      },
    });
    console.log('Form submitted successfully:', formSubmission);

    return NextResponse.json({ message: 'Form submitted successfully', data: formSubmission });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return NextResponse.json({ error: 'Error saving form submission' }, { status: 500 });
  }
}
