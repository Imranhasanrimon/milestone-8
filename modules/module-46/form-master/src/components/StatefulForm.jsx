import React, { useState } from 'react';

const StatefulForm = () => {
const [email,setEmail] = useState(null);

    const handleOnSubmit = e =>{
        e.preventDefault()
        // console.log(e)
    }
const handleEmailChange = e =>{
    console.log(e.target.value);
}
    return (
        <div>
             <form onSubmit={handleOnSubmit} className="space-y-2">
                <input type="text" name="name" placeholder='name' id="" /> <br />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="email" id="" /> <br />
                <input type="password" name="password" placeholder='pass' id="" /> <br />
               <input type="submit" className="btn" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default StatefulForm;