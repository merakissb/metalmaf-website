"use client"

import { useState } from 'react';
import axios from 'axios';
import NewsLatterBox from './NewsLatterBox';
import SectionTitle from '../Common/SectionTitle';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formFilled, setFormFilled] = useState(false);
  const [submitting, setSubmitting] = useState(false); // Nuevo estado para controlar si se está enviando el formulario

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Verificar si todos los campos están llenos
    const filled = Object.values(formData).every(value => value.trim() !== '');
    setFormFilled(filled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true); // Establecer submitting a true al comenzar el envío del formulario

      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setSuccessMessage('Gracias por escribirnos, te responderemos lo antes posible.');
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setFormFilled(false); // Establecer formFilled a false después de limpiar los campos
        setTimeout(() => {
          setMessageSent(false);
          setSuccessMessage('');
        }, 5000); // Limpiar el mensaje después de 5 segundos
      } else {
        console.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    } finally {
      setSubmitting(false); // Establecer submitting a false después de que se haya completado el envío del formulario
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Contacto"
          paragraph=''
          center
          mb='30px'
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Necesitas cotizar o quieres saber más al respecto?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Dejanos un mensaje y nos pondremos en contacto contigo, a la brevedad.
              </p>
              {messageSent && <p className="text-green-500">{successMessage}</p>}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ingresa tu nombre"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingresa tu correo"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Escribe tu mensaje"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" disabled={!formFilled || submitting} className={`rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 ${formFilled && !submitting ? 'hover:bg-primary/90' : 'opacity-50 cursor-not-allowed'}`}>
                      {submitting ? 'Enviando...' : 'Enviar'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;