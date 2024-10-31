import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null)
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="space-y-2">
                <input ref={nameRef} type="text" name="name" placeholder='name' id="1" /> <br />
                <input ref={emailRef} type="email" defaultValue='imran' name="email" placeholder="email" id="2" /> <br />
                <input type="password" name="password" placeholder='pass' id="3" /> <br />
                <input type="submit" className="btn" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default RefForm;