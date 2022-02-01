import React, {useState} from 'react';

const Form = () => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    return (
        <div>
            <form>
                <label>Name: </label><input type="text" name="name" value={form.name}/>
                <label>Username:</label><input type="text" name="username" value={form.username}/>
                <label>E-mail: </label><input type="text" name="email" value={form.email}/>
            </form>
        </div>
    );
};

export default Form;