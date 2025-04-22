import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] font-mono border-l-transparent border-right-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/images/s3.png" className="bg-slate-100 rounded-full" alt="alt" width={35}
            height={35} />
        </span>
        <p className="text-slate-600">
        Made with ❤️ by Aryan | © 2025
        </p>
      </div>
    </footer>
  )
}

export default Footer