import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurar la API Key de SendGrid utilizando la variable de entorno SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = await req.json();
    // Aquí puedes agregar validaciones de datos

    const msg = {
      to: 'contacto@metalmaf.cl', // Cambia esto por el correo electrónico al que deseas enviar el mensaje
      from: 'contacto@metalmaf.cl',
      subject: 'Contacto Web',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      // Puedes incluir más campos como html, attachments, etc., según lo necesites
    };

    try {
      await sgMail.send(msg);
      return NextResponse.json({ success: true }); // Utiliza NextResponse.json para devolver una respuesta JSON
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return NextResponse.json({ success: false, error: 'Error al enviar el correo' }); // Devuelve una respuesta JSON en caso de error
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return NextResponse.error(new Error(`Método ${req.method} no permitido`)); // Devuelve un error usando NextResponse.error
  }
}
