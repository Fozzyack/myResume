import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const EmailForm = () => {

    const form = useRef(null)
    const [errorMSG, setErrorMSG] = useState('');
    const [errorMSG2, setErrorMSG2] = useState('');
    const [emailSent, setEmailSent] = useState('not_sent');


    const validateEmail = (email) => {
        const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;;
        return regex.test(email);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setEmailSent('loading');
        const emailInput = document.getElementById('email_for_contact');
        console.log(emailInput.value)
        if (validateEmail(emailInput.value)) {
            emailjs.sendForm('resume_service_email', 'template_qg03z8u', form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
                .then((result) => {
                    console.log('Email Success');
                }, (error) => {
                    console.log(error.text);
                    setErrorMSG2('There was an Error Sending Your Email')
                    return setEmailSent('not_sent');
                });

            setTimeout(() => {
                setErrorMSG('');
                setEmailSent('sent');
            }, 3000);


        } else {
            setErrorMSG('Please enter a Valid Email')
            setEmailSent('not_sent');
        }


    }


    if (emailSent === 'not_sent') {
        return (
            <div className='text-white w-full'>
                <form ref={form} className='bg-[#1f1d1d] p-10 rounded-xl flex flex-col' onSubmit={sendEmail}>
                    <h5 className='font-bold text-white text-3xl'>Send me a Message</h5>

                    <label className='block text-gray-300 text-sm font-bold mb-2 mt-5' for='name'>Name</label>
                    <input type='text' name='name' id='name' className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Name'></input>

                    <label className='block text-gray-300 text-sm font-bold mb-2 pt-3' for='email_for_contact'>Email</label>
                    <input type='email' name='email' id='email_for_contact' className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='example@email.com'></input>
                    <p className='font-bold text-red-600 text-md'>{errorMSG}</p>

                    <label className='block text-gray-300 text-sm font-bold mb-2 pt-3' for='submatter'>Message</label>
                    <textarea type='text' name='submatter' className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-28' id='message' placeholder='Write Message here'></textarea>

                    <button className='mt-3 p-1 bg-gradient-to-br from-blue-500 via-green-500  to-green-950 rounded-full font-bold max-w-[100px]'>
                        <div className='bg-[#121212] rounded-full'>
                            Send
                        </div>
                    </button>
                    <p className='font-bold text-red-600 text-md'>{errorMSG2}</p>
                </form>
            </div>
        )
    }

    else if (emailSent === 'loading') {
        return (
            <div
            >
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{type: 'spring', stiffness: 200, damping: 20}}
                className='bg-[#1f1d1d] p-10 rounded-xl flex flex-col items-center gap-10 text-white'>
                    <p className='font-bold text-xl'>Sending Email</p>
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </motion.div>

            </div>
        )

    }

    return (
        <div className='w-full'>
            <div className='bg-[#1f1d1d] p-10 rounded-xl  text-white' >
                <motion.div
                    className='flex flex-col items-center gap-1'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }} >
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-br from-[#31CB00] to-[#1766b5] md:text-5xl sm:text-4xl text-3xl font-extrabold mb-8'>Nice!</h3>
                    <p className='font-bold text-lg'>Your Email has been sent!</p>
                    <p className='text-base text-[#ADB7BE]'>Thankyou for reaching out to me.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default EmailForm