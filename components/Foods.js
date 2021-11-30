import React from 'react'

const fav = [
    {
      id:1,  
      name:'TASTY BURGER',
      badge:'specials',
      discription:'The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch',
      option1:'Veg  Rs.60',
      option2:'Non-Veg  Rs.90',
      option3:'Tasty  Rs.120',
      pic:'/1.svg'
    },
    {
        id:2,  
        name:'TASTY PIZZA',
        badge:'specials',
        discription:'It tastes like bread tomato and cheese, chewy, moist, slightly acidic, and sharp. Then once you apply toppings, that changes it',
        option1:'Veg  Rs.60',
        option2:'Non-Veg  Rs.90',
        option3:'Tasty  Rs.120',
        pic:'/2.svg'
    },
    {
        id:3,  
        name:'COLD ICE CREAM',
        badge:'chills',
        discription:'Cream from milk is collected, flavored and frozen',
        option1:'Flavour Sticks  Rs.60',
        option2:'Flavour Balls  Rs.60',
        option3:'Tasty Casata  Rs.120',
        pic:'/3.svg'
    },  
    {
        id:4,  
        name:'COLD DRINKS',
        badge:'chills',
        discription:'A soft drink is a drink that usually contains water (often carbonated), a sweetener, and a natural and/or artificial flavoring',
        option1:'Lemon Juice  Rs.20',
        option2:'Soda  Rs.60',
        option3:'Fruit Juice  Rs.60',
        pic:'/4.svg'
    },
    {
          id:5,  
          name:'TASTY SWEETS',
          badge:'sweety',
          discription:'Most sweet-tasting foods contain sugar. The top of the tongue has special sensors called “taste buds” that detect sugar and other things in foods',
          option1:'Ulwa  Rs.60',
          option2:'Mysoore-Pak  Rs.60',
          option3:'Ladoo Rs.120',
          pic:'/5.svg'
    },
    {
          id:6,  
          name:'HEALTHY BREAKFAST',
          badge:'hot',
          discription:'Breakfast is often called the most important meal of the day, and for good reason. As the name suggests, breakfast breaks the overnight fasting period',
          option1:'Dosa  Rs.60',
          option2:'Sandwich(Egg/Veg)  Rs.60',
          option3:'Coffee Rs.20',
          pic:'/6.svg'
    },  
]

function Foods() {
    return (
<div id="foods">
        <p className="font-Poppins pt-4 text-center text-3xl font-bold text-gray-800">Foods</p>
 <div className="hero min-h-screen">
  <div className="grid flex-col hero-content lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3">
  {fav.map((favs) =>(
    <div className="max-w-xs grid-col-auto">
     <div key={favs.id} className="card text-center shadow-2xl">
       <figure className="px-5 pt-10">
        <img alt="specials" src={favs.pic} className="h-20 w-20"/>
       </figure> 
       <div className="card-body">
         <div className="card-title font-Poppins"><h2>{favs.name}</h2><p><div class="badge badge-outline">{favs.badge}</div></p></div> 
         <p>{favs.discription}</p> 
         <div class="justify-center card-actions">
           <select class="select select-bordered select-error rounded-full w-full max-w-xs">
            <option disabled="disabled" selected="selected">View Prices</option> 
             <option>{favs.option1}</option> 
             <option>{favs.option2}</option> 
             <option>{favs.option3}</option>
           </select>
          </div>
       </div>
     </div>
    </div>
  ))}
  </div>
 </div>
</div>
    )
}

export default Foods
