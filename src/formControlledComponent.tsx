import React, { useState } from 'react';

interface FormErrors {
    name?: string;
    email?: string;
}

function MyForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if(name === 'name')
            setName(value);
        else if(name === 'email')
            setEmail(value);      
    }

    const validate = () => {
        const newErrors: FormErrors = {};
        if(!name)
            newErrors.name = 'Il nome è obbligatorio';
        if(!email)
            newErrors.name = 'L\'email è obbligatria';
        else if(!/\S+@\S+\.\S+/.test(email))
            newErrors.email = 'Il formato dell\'email non è valido';
        return newErrors;
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0)
            setErrors(validationErrors);
        else
            console.log(`Name: ${name}, Email: ${email}`); // nell'else si può inserire la logica per inviare i dati a un server
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            </div>
            <div>
                <label>Email:
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>
            <button type="submit">Invia</button>
        </form>
    );
}

export default MyForm;