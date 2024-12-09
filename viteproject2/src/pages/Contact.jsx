import React, { useState } from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Me!</h1>
            <ContactForm />
        </div>
    )
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            formData, [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("All fields are required!")
            return;
        }
        console.log(formData);
        alert('messsage sent!')
    }

    return (
        <div className='contact-form'>
            <h1>Contact Me!</h1>
            <form onSubmit={handleChange}>
                <div className='form-fields'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                </div>

                <div className='form-fields'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>

                <div className='form-fields'>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        type="message"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )

};


export default ContactForm; 