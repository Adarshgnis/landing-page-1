import React, { useState } from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2';

const ContactForm = ({prop}) => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        number: '',
        company: '',
        state: '',
        describe: '',
        // distributor: '',
        // add: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();

    // Perform form validation
    const {
      fname,
      lname,
      email,
      number,
      company,
      state,
      describe,
    //   distributor,
      
      
    } = formData;

    if (!fname || !lname || !email || !number || !company || !state || !describe ) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all the required fields',
      });
      return;
    }

    // Submit the form if validation passes
    // You can implement your form submission logic here
    console.log('Form submitted!');
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully',
            showConfirmButton: false,
            timer: 1500,
        });
        prop()
    };
    return (
        <div className='contact' >
            <div>
                <h2>Connect with us</h2>
                <h5 style={{ fontFamily: "Aktifoa-light" }}>for outstanding protective overlaminates</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name='fname' value={formData.fname} onChange={handleChange}/>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name='lname' value={formData.lname} onChange={handleChange}/>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'  value={formData.email} onChange={handleChange}/>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="number">Contact Number</label>
                    <input type="number" name='number' value={formData.number} onChange={handleChange}/>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="company">Company</label>
                    <input type="text" name='company' value={formData.company} onChange={handleChange}/>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="lname">State</label>
                    <select name="state" value={formData.state} onChange={handleChange}>
                        <option value="">Default</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="describe">How would you describe yourself?</label>
                <select name="describe" className='select' value={formData.describe} onChange={handleChange}>
                    <option value="">Default</option>
                    <option value="UI UX Designer">UI UX Designer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full stack Developer">MERN Stack</option>
                </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="Distributor">Preferred Distributor:</label>
                <select name="Distributor" className='select' value={formData.distributor} onChange={handleChange}>
                    <option value="">Default</option>
                    <option value="Adarsh">Adarsh</option>
                    <option value="Bittu">Bittu</option>
                    <option value="Pooja">Pooja</option>
                </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="describe">Additional Information</label>
                <textarea name="additional" cols="20" rows="5" value={formData.additional} onChange={handleChange}></textarea>
            </div>
            <div>
                <input type="checkbox" style={{ all: "revert" }} name="add" id="check" checked={formData.add} onChange={handleChange} />
                <label htmlFor="check">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
            </div>
            <div style={{ "textAlign": "center" }}>
                <button className='btn' onClick={submitHandler}>
                    Submit
                    <i className="fa-solid fa-arrow-right btnarrow"></i>
                </button>
            </div>

        </div>
    )
}

export default ContactForm