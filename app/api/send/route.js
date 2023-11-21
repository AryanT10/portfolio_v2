import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { email, subject, message } = await req.json();
	console.log(process.env.HOST)
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.USER_NAME,
			pass: process.env.PASS_KEY,
		},
	});

	try {
		const info = await transporter.sendMail({
			from: process.env.USER_NAME,
			to: [process.env.USER_NAME, email],
			subject: subject,
			html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
		});

		console.log('Message sent: %s', info.messageId);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json({ error: 'Failed to send email' });
	}
}
