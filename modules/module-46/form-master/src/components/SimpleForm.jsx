
const SimpleForm = () => {
    const handleOnSubmit = e =>{
        e.preventDefault()
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log(e.target.name.value);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} className="space-y-2">
                <input type="text" name="name" id="" /> <br />
                <input type="email" name="email" placeholder="email" id="" /> <br />
                <input type="text" name="phone" id="" /> <br />
               <input type="submit" className="btn" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default SimpleForm;