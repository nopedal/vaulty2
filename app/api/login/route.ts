import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // For demonstration, let's just hardcode valid credentials:
    if (email === 'test@example.com' && password === 'password123') {
      // Create a response with JSON
      const response = NextResponse.json({ success: true });

      // Set a simple token cookie (in production, use secure, httpOnly, etc.)
      response.cookies.set('token', 'example-token-value', {
        httpOnly: true,
        path: '/',
        // Set 'secure: true' if you're using HTTPS
      });

      return response;
    }

    // Invalid credentials
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 });
  }
}
