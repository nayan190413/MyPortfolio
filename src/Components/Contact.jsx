import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        email: "",
        phone: "",
        name: "",
    });
    const InputEvent = (event) => {
        console.log("clicked")
        const { name, value } = event.target;
        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.email}  thanku for contacting us.`)
    }
    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Me</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group" >
                            Email address <span style={{ color: "red" }}>*</span><input type="email" className="form-control" name="email" defaultValue="" onChange={InputEvent} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPhone">Phone number <span style={{ color: "red" }}>*</span></label>
                            <input type="phone" className="form-control" id="exampleInputPhone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" name="name" value={data.name} onChange={InputEvent} placeholder="Enter name" />
                        </div>
                        <small id="emailHelp" className="form-text text-muted"><span style={{ color: "red" }}>*</span> is necessary to fill</small>
                        <br></br>
                        <button type="submit" className="btn btn-success ">Submit form</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
export default Contact;