import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/krrishbalana')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setdata(data)
        })
    }, [])
  return (
    <div className='text-center w-full bg-zinc-700 text-5xl p-4 text-white'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="GitHub Avatar" className='w-100 mx-auto mt-4 rounded-full'/>
    </div>
  )
}

export default Github
