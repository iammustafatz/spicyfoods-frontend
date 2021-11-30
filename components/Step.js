import React from 'react'

const procs = [
    {
      id:1,  
      name: 'Choose Your Favorite Dish',
      pic:'/1.svg'
    },
    {
        id:2,  
        name: 'Fast Delivery',
        pic:'/7.svg'
    },
    {
        id:3,  
        name: 'Easy Payments Methods',
        pic:'/8.svg'
    },  
    {
        id:4,  
        name: 'And Finally, Enjoy Your Food',
        pic:'/9.svg'
    },
 ]

function Step() {
    return (
        <div id="procedure">
            <div className="pt-8 rounded-lg">
    <p className="font-Poppins text-center text-3xl font-bold text-gray-800">
    PROCEDURE
    </p>
    <p className="font-Poppins text-center text-xl font-normal text-gray-500">
    FOR ORDERING
    </p>
    <div className="flex items-center flex-col md:flex-row justify md:justify-center">
    {procs.map((procedure) =>(
        <div className="p-4 lg:p-12 " key={procedure.id}>
            <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                    <img alt="steps" src={procedure.pic} className="mx-auto h-40 w-40 "/>
                </a>
            </div>
            <div className="text-center font-Poppins">
                <p className="text-2xl text-gray-800">
                    {procedure.name}
                </p>
            </div>
        </div>
        ))}
      </div>
      </div>      
        </div>
    )
}

export default Step
