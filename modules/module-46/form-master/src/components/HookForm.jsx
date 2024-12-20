import useInputState from "../hooks/useInputState";

const HookForm = () => {
    const nameState = useInputState('Mr. Abul Hooked');

    const handleOnSubmit = (e) => {
        console.log(nameState.value);
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} className="space-y-2">
                <input type="text" {...nameState} name="name" placeholder='name' id="1" /> <br />
                <input type="email" name="email" placeholder="email" id="2" /> <br />
                <input type="password" name="password" placeholder='pass' id="3" /> <br />
                <input type="submit" className="btn" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default HookForm;