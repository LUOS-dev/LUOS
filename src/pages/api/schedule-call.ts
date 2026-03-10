import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {

  const data = await request.json();

  const {
    name,
    email,
    phone,
    description,
    date,
    timezone,
    guests
  } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_APP_PASSWORD
    }
  });

  const recipients = [email, ...(guests || []), "luos@gmail.com"];

  try {

    await transporter.sendMail({
      from: `"LUOS Booking" <${import.meta.env.GMAIL_USER}>`,
      to: recipients,
      subject: "Confirmación de llamada - LUOS",
      html: `
        <h2>Nueva llamada agendada</h2>

        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>

        <p><b>Fecha:</b> ${new Date(date).toLocaleString()}</p>
        <p><b>Zona horaria:</b> ${timezone}</p>

        <p><b>Invitados:</b></p>
        <ul>
            ${(guests || []).map((g: string) => `<li>${g}</li>`).join("")}
        </ul>

        <p><b>Descripción:</b></p>
        <p>${description}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });

  } catch (error) {

    return new Response(JSON.stringify({ success: false }), {
      status: 500
    });

  }
};