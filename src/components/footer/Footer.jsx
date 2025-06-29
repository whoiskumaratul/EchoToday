import React from 'react'

function Footer() {
  return (
    <div>
    
    <div className="w-full  py-6 text-white text-xs">
  <div className="max-w-[1280px] mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-4">
      <p className="hover:underline cursor-pointer hover:text-yellow-400">About Us</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Blog</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Tools</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Publisher</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Help</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Terms</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Privacy Policy</p>
      <p className="hover:underline cursor-pointer hover:text-yellow-400">Sitemap</p>
    </div>
    <div className='py-4'>
      <p className='flex flex-wrap justify-center'>&copy; 2025 EchoToday 
      <span className="cursor-pointer text-blue-700">&nbsp; <a href="https://blog.hackingtruth.org" target="_blank" >( HackingTruth.org )</a></span></p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer