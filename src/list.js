import React from 'react'

const List = ({people}) => {
    return (
        <>
        {people.map((person) => {
            const {image, id, name, age} = person;
            return (
                <section key = {id} className = 'flex justify-normal pb-4'>
                    <img src = {image} className = 'w-20 h-20 rounded-full ' alt = {image} />
                    <div className = 'pl-6'>
                        <h4 className = 'font-bold text-xl'>{name}</h4>
                        <p>{age} years</p>
                    </div>

                </section>
            )
        })}
        
        
        </>
    )
}

export default List