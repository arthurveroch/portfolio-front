import styled from 'styled-components';
import InputForm from '../assets/reusable-ui/InputForm';
import { useState } from 'react';
import { FaPerson } from 'react-icons/fa6';
import { IoPersonCircle } from 'react-icons/io5';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import axios from 'axios';
import TextAreaContact from '../assets/reusable-ui/TextAreaContact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        'https://strapi-server-portfolio.onrender.com/api/messages',
        {
          data: formData,
        }
      );

      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        surname: '',
        email: '',
        telephone: '',
        message: '',
      });
    } catch {
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <ContactStyled id='contact'>
      <div className='container'>
        <h1>Contact</h1>
        <div className='contact-container'>
          <h2>Contactez l'agence</h2>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='inputs'>
            <InputForm
              onChange={handleChange}
              value={formData.name}
              name={'name'}
              type={'text'}
              placeholder={'Entrez votre nom'}
              icon={<FaPerson />}
            />
            <InputForm
              onChange={handleChange}
              value={formData.surname}
              name={'surname'}
              type={'text'}
              placeholder={'Entrez votre prénom'}
              icon={<IoPersonCircle />}
            />
            <InputForm
              onChange={handleChange}
              value={formData.email}
              name={'email'}
              type={'email'}
              placeholder={'Adresse mail'}
              icon={<MdAlternateEmail />}
            />
            <InputForm
              onChange={handleChange}
              value={formData.telephone}
              name={'telephone'}
              type={'tel'}
              placeholder={'Numéro de téléphone'}
              icon={<BsFillTelephoneFill />}
            />
          </div>
          <div className='message'>
            <TextAreaContact
              value={formData.message}
              name={'message'}
              onChange={handleChange}
              placeholder={'Ecrivez votre message'}
            />
          </div>
          <button style={success ? { background: 'green' } : {}}>
            {success ? 'Message envoyé' : 'Envoyer mon message'}
            {loading ? <img src='./images/loader.svg' /> : ''}
          </button>
        </form>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  .container {
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5% 0;
    gap: 60px;
  }

  .contact-container {
    width: 100%;
  }

  .contact-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .inputs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .message {
    width: 100%;
  }

  img {
    width: 20px;
  }

  button {
    all: unset;
    padding: 15px;
    border-radius: 5px;
    background: #ff5a5a;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
