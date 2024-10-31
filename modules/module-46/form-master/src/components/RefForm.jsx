import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);

    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }

    useEffect(()=>{
nameRef.current.focus()
    },[])
    
    return (
        <div>
            <form onSubmit={handleOnSubmit} className="space-y-2">
                <input ref={nameRef} type="text" name="name" placeholder='name' id="" /> <br />
                <input type="email" name="email" placeholder="email" id="" /> <br />
                <input type="password" name="password" placeholder='pass' id="" /> <br />
               <input type="submit" className="btn" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default RefForm;