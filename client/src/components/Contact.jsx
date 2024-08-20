import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Contact = React.forwardRef((props, ref) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const dark = props.mode

  const inputStyle = `${dark ? 'bg-[#3C3D37] text-white' : 'bg-white text-black'} p-2 md:w-[70%] w-full outline-none rounded-lg border-2 border-gray-700 focus:border-[#3A1078]`

  const handleSendMessage = async (e) => {
    e.preventDefault();

    await axios.post("https://merneventproject.onrender.com/api/v1/message/send",{
      name, email, message, subject
    }, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((res) => {
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      toast.success(res.data.message)
    }).catch((err) => {
      toast.error(err.response.data.message)
    })
  }

  return (
    <div ref={ref}  className=' max-w-[1500px] mx-auto p-8'>
      <div className='flex flex-col md:flex-row justify-center items-center border-[4px] rounded-lg border-[#3A1078]'>
        <div className={`${dark ? 'text-white' : 'text-[#3A1078]'} p-4 md:w-[50%] md:border-r-2 md:border-[#3A1078]`}>
          <h1 className='text-3xl font-bold text-center p-4'>Contact Us</h1>
          <p className='text-2xl text-center'>Feel Free to Contact Us</p>
          <p className='text-2xl text-center'>We will get back to you soon</p>
          <p className='text-center'>We are here to serve you, care you, and help you</p>
        </div>

        <form onSubmit={handleSendMessage} className='p-4 md:w-[50%] w-full flex flex-col justify-center items-center gap-4'>
          <input className={inputStyle} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" className={inputStyle} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className={inputStyle} placeholder='Enter Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea type="text" className={`${inputStyle} h-[120px]`} placeholder='Enter Message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className={`px-6 py-2 rounded-md ${dark? 'bg-white text-[#3A1078]' : 'bg-[#3A1078] text-white'}`} type='submit'>Submit</button>
        </form>

      </div>
    </div>
  )
})

export default Contact
