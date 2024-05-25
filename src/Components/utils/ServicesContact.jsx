import {useRef} from "react";
import emailjs from '@emailjs/browser';

const ServicesContact = ({ title, paragraph }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kcusks7', 'template_xo9ah8v', form.current, {
        publicKey: 'Cy1IXaASIKpQ89Dqt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };



    return (
    <div className="w-full h-full mt-10">
      <h1 className='capitalize text-2xl sm:text-2xl font-thin  font-["open_sans"] text-zinc-900'>
        {title}
      </h1>
      <p className='font-["open_sans"] text-zinc-600 text-sm my-6 leading-6'>
        {paragraph}
      </p>



      <form ref={form} onSubmit={sendEmail} action="">

        {/* Name */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Your Name*
        </label>
        <input
        name="user_name"
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="text"
        />
        {/* Email */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Your email adresses*
        </label>
        <input
        name="user_email"
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="email"
        />
        {/* Subject */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Subject*
        </label>
        <input
        name="subject"
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          type="text"
        />
        {/* Messages */}
        <label className='font-["open_sans"] text-zinc-500  text-sm leading-6'>
          Messages*
        </label>
        <textarea
          name="message"
          className="border my-3 border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-2 w-full"
          cols="30"
          rows="5"
        ></textarea>
     
      <button type="submit" className="md:px-4 md:py-2 px-3 py-1 w-max h-min font-['open_sans'] text-white bg-orange-600 rounded hover:bg-white border border-orange-600 hover:text-orange-600 font-extrabold">
        Send Message
      </button>
      </form>
    </div>
  );
};

export default ServicesContact;
