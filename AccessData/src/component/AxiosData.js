
import React, { useEffect, useState } from 'react'
import Api from '../store/Data';

export default function AxiosData() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        Api.get("users/").then(respons => {
            console.log(respons.data);
            setUser(respons.data)
        })
    }, [])
    return (
        <>
            {
                user.map((data) => {
                    if (data.id < 5) {
                        return (<>
                            <p className='p'><span> Nume:</span> {data.name}</p>
                            <p className='p'> <span> Username :</span>{data.username} </p>
                            <p className='p'> <span> Email :</span>{data.email}</p>
                            <p className='p'> <span> City: </span>{data.address.city}</p>
                            <p className='p'> <span> Street: </span> {data.address.street}</p>
                            <p className='p'> <span> Phone Number : </span> {data.phone}</p>
                            <hr />
                        </>)
                    }
                })
            }

        </>
    )
}
