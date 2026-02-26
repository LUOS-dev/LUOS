import React, { useState } from 'react';
import './Form.css';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      descripcion: formData.get("descripcion"),
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    setSuccess(res.ok);
  };
  return (
    <div className="cf-card">
      <h3 className="cf-title">Cotiza tu Proyecto</h3>
      <p className="cf-description">
        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
      </p>
      
      <form className="cf-form-group" onSubmit={handleSubmit}>
      {/*<form className="cf-form-group" onSubmit={(e) => e.preventDefault()}>*/}
        <input 
          name="nombre"
          type="text" 
          placeholder="Nombre completo" 
          className="cf-input" 
          required
        />
        <input
          name="email"
          type="email" 
          placeholder="Email" 
          className="cf-input" 
          required
        />
        <input
          name="empresa"
          type="text" 
          placeholder="Empresa" 
          className="cf-input"
          required 
        />
        <textarea
          name='descripcion' 
          placeholder="Describe tu proyecto..." 
          className="cf-textarea"
          required
        ></textarea>
        
        <button type="submit" className="cf-button" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </button>
        {success && <p> Mensaje Enviando</p>}
      </form>
    </div>
  );
};

export default ContactForm;