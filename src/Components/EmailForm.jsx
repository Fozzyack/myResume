import React from 'react'

const EmailForm = () => {
    return (
        <div className='text-white w-full'>
            <form className='bg-[#1f1d1d] p-10 rounded-xl flex flex-col'>
                <h5 className='font-bold text-white text-3xl'>Send me a Message</h5>
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-5' for='name'>Name</label>
                <input id='name' className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Name'></input>

                <label className='block text-gray-300 text-sm font-bold mb-2 pt-3' for='email'>Email</label>
                <input className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='example@email.com'></input>

                <label className='block text-gray-300 text-sm font-bold mb-2 pt-3' for='submatter'>Message</label>
                <textarea className='shadow border  rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-28' id='message' placeholder='Write Message here'></textarea>

                <button className='mt-3 p-1 bg-gradient-to-br from-blue-500 via-green-500  to-green-950 rounded-full font-bold max-w-[100px]'>
                    <div className='bg-[#121212] rounded-full'>
                        Send
                    </div>
                </button>
            </form>
        </div>
    )
}

export default EmailForm