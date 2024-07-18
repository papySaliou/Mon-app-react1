import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Detailsrv = () => {
  return (
    <div id="root" className='h-screen'>
      <div>
        <div className="flex  items-center py-3">
            <FaUserFriends className="text-xl  text-sky-600 bg-sky-200 mx-auto  p-2 w-36 h-36 rounded-full" width="" alt="Float UI logo" />
         </div>

         <div className=' w-3/5  mx-auto justify-between items-center py-2 border rounded-md border-slate-500'>

        
<div className="my-2 px-5 py-5 flex w-3/4 mx-auto justify-between items-center  ">
  <p>
    <span className='font-semibold '>Titre :</span>
    <span className='mx-2'>Réunion de travail</span>
  </p>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    <path d="m15 5 3 3"></path>
  </svg>
</div>

<div className="my-2 px-5 py-5 flex w-3/4 mx-auto justify-between items-center  ">
  <p>
    <span className='font-semibold '>Avec :</span>
    <span className='mx-2'>Equipe de Xarala</span>
  </p>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    <path d="m15 5 3 3"></path>
  </svg>
</div>

<div className="my-2 px-5 py-5 flex w-3/4 mx-auto justify-between items-center  ">
  <p>
    <span className='font-semibold '>Date :</span>
    <span className='mx-2'>18 / 06/ 2024</span>
  </p>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    <path d="m15 5 3 3"></path>
  </svg>
</div>

<div className="my-2 px-5 py-5 flex w-3/4 mx-auto justify-between items-center  ">
  <p>
    <span className='font-semibold '>Heure :</span>
    <span className='mx-2'>08H : 00</span>
  </p>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    <path d="m15 5 3 3"></path>
  </svg>
</div>
<div className="my-2 px-5 py-5 flex w-3/4 mx-auto justify-between items-center  ">
  <p>
    <span className='font-semibold '>Lieu :</span>
    <span className='mx-2'>Nord Foire</span>
  </p>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    <path d="m15 5 3 3"></path>
  </svg>
</div>

</div>

<div className="flex justify-center py-6">
  <button className="w-2/5 py-3 text-white duration-150 bg-sky-500 
  rounded-lg hover:bg-sky-900 active:shadow-lg">
    <Link to="/dashbord/rv">Enregistrer</Link></button>
</div>
        </div>
    </div>
  )
}
