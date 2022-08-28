import React, { useLayoutEffect } from 'react'


interface Props {
    name: string;
    age : number;
    email : string;
    isStudent ?: boolean;
    friends ?: Props[];
    country ?: Country;
}

export enum Country {
    India = "India",
    USA = "USA",
    China = "China",
    Japan = "Japan",
    Russia = "Russia",
}



export function Person(props: Props) {
  return (
    <div>
        <h2>Your Name is {props.name}</h2>
        <h2>Your Age is {props.age}</h2>
        <h3>Email: {props.email}</h3>
        <h3>Your are {props.isStudent ? ' a ' : ' not a '} Student</h3>
        <h1>Friends List: </h1>
        {
            props.friends?.map((friend: Props) => (
                <h3>Name: {friend.name}  Age: {friend.age}</h3>
            ))
        }
        <h1>Country : {props.country}</h1>
    </div>
  )
}

