import React from 'react'

const people = [
    {
      id:1,  
      name: 'Nithi',
      place:'chennai',
      reviews:'It Was Really Good To Taste Your Yummy Food 😋',
      pic:'/av-3.png'
    },
    {
        id:2,  
        name: 'Jiji',
        place:'chennai',
        reviews:'Absolutely Delicious!! Good Work!!👏',
        pic:'/av-2.png'
      },
    {
        id:3,  
        name: 'Sneha',
        place:'chennai',
        reviews:'Best Pizza Ever Tasted!!Loved It ❤️',
        pic:'/av-1.png'
    },  
 ]
function Reviews() {
    return ( 
        <div id="reviews">
        <p className="font-Poppins pt-4 text-center text-3xl font-bold text-gray-800">
    Reviews
    </p>    
  <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8 bg-base-200">
       {people.map((person) =>(
       <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4" key={person.id}>
       <p className="text-gray-600">
           <span className="font-bold text-error text-lg">
               “
           </span>
           {person.reviews}
           <span className="font-bold text-error text-lg">
               ”
           </span>
       </p>
       <div className="flex items-center mt-4">
           <a href="#" className="block relative">
               <img alt="profil" src={person.pic} className="mx-auto object-cover rounded-full h-10 w-10 "/>
           </a>
           <div className="flex flex-col ml-2 justify-between">
               <span className="font-semibold text-error text-sm">
               {person.name}
               </span>
               <span className="dark:text-gray-400 text-xs flex items-center">
               {person.place}
               </span>
           </div>
       </div>
       </div>
       ))}
  </div>
  </div>
    )
}

export default Reviews
