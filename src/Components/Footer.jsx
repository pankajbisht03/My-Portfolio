import React from 'react'
import "../Styles/footer.css"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const open = (url) => window.open(url, '_blank')
  const sendMail = () => window.location.href = 'mailto:pankajbishtuk04@gmail.com'

  return (
    <footer className='footer-div'>
      <div className='footer-content'>
        <p>© {new Date().getFullYear()} Pankaj Bisht</p>
        <div className='footer-links'>
          <button aria-label='GitHub' onClick={() => open('https://github.com/pankajbisht03')} className='footer-icon'>
            <FaGithub />
          </button>
          <button aria-label='LinkedIn' onClick={() => open('https://www.linkedin.com/in/pankaj-bisht-6722a21bb/')} className='footer-icon'>
            <FaLinkedin />
          </button>
          {/* <button aria-label='Email' onClick={sendMail} className='footer-icon'>
            <FaEnvelope />
          </button> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer