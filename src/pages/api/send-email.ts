import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { email, nombre, empresa, descripcion } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${import.meta.env.GMAIL_USER}>`,
      to: "luos@gmail.com",
      subject: "Nuevo mensaje desde el formulario",
      html: `
        <h3>Nuevo mensaje</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Descripción:</strong><br/>${descripcion}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error }),
      { status: 500 }
    );
  }
};
