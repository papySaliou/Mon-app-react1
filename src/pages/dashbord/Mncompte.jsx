import React from 'react';
import user from "../../assets/user.png"

export const Mncompte = () => {
  return (
    
    <div id="root"><div><h1 class="text-4xl text-center text-sky-600">Rendez-vous</h1>
    <div class="flex items-center">
    <img src={user} class="bg-sky-600 p-3 ms-20 translate-x-8 rounded-full" 
              width="150" alt="Float UI logo"/>
        <h4 class="bg-sky-600 font-bold ps-11 text-2xl h-16 w-full flex items-center text-white">
          Mon Compte
        </h4>
    </div>
    <div class="p-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p class="flex flex-col">
            <span class="text-2xl font-semibold text-sky-600">Dr DIOUF</span>
            <span> Cardiologue</span></p>
            <svg stroke="currentColor" fill="currentColor" 
            stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-sky-600" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

              <path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path></svg>
              </div>
              <div class="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between
               items-center border rounded-xl border-slate-400">
                <p><span>Adresse :</span><span>Diamniadio, Rufisque</span></p>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                stroke-linecap="round" stroke-linejoin="round" height="1em" 
                width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                <path d="m15 5 3 3"></path></svg></div><div class="my-5 px-5 py-3 
                flex w-2/5 mx-auto justify-between items-center border rounded-xl
                 border-slate-400">
                  <p><span>Telephone :</span><span>+221 78 569 99 21</span></p>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" 
                  xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  <path d="m15 5 3 3"></path></svg></div><div class="my-5 px-5 py-3 
                  flex w-2/5 mx-auto justify-between items-center border rounded-xl
                   border-slate-400"><p><span>Adression e-mail :</span>
                   <span>papydiouf@gmail.sn</span></p>
                   <svg stroke="currentColor" fill="none" stroke-width="2" 
                   viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                    <path d="m15 5 3 3"></path></svg></div>
                    <div class="my-5 px-5 py-3 flex w-2/5 mx-auto 
                    justify-between items-center border rounded-xl
                     border-slate-400"><p>
                      <span>Mot de passe :</span><span>..........</span></p>
                      <svg stroke="currentColor" fill="none" stroke-width="2"
                       viewBox="0 0 24 24" stroke-linecap="round" 
                       stroke-linejoin="round" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                        <path d="m15 5 3 3"></path></svg></div>
                        <div class="flex justify-center ">
                          
                          <button class="w-2/5 py-3 text-white duration-150 bg-sky-500 
                          rounded-lg hover:bg-sky-900 active:shadow-lg">Enregistrer</button>
                          </div></div></div>
  );
};