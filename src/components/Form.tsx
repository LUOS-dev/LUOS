import React, { useState } from 'react';
import './Form.css';
import { formtexts } from "../i18n/home-translations";
import { useLanguage } from '../i18n/utils';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { lang } = useLanguage();
  const texts = formtexts[lang];

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
      <h3 className="cf-title">{texts.tittle}</h3>
      <p className="cf-description">
        {texts.info}
      </p>
      
      <form className="cf-form-group" onSubmit={handleSubmit}>
      {/*<form className="cf-form-group" onSubmit={(e) => e.preventDefault()}>*/}
        <input 
          name="nombre"
          type="text" 
          placeholder={texts.name} 
          className="cf-input" 
          required
        />
        <input
          name="email"
          type="email" 
          placeholder={texts.email} 
          className="cf-input" 
          required
        />
        <input
          name="empresa"
          type="text" 
          placeholder={texts.empresa} 
          className="cf-input"
          required 
        />
        <textarea
          name='descripcion' 
          placeholder={texts.descripcion} 
          className="cf-textarea"
          required
        ></textarea>
        
        <button type="submit" className="cf-button" disabled={loading}>
          {loading ? texts.sending : texts.btn}
        </button>
        {success && <p> {texts.message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;