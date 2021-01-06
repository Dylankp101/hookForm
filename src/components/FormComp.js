import React from "react";

const FormComp = props => {
    const { inputs, setInputs} = props;

        const onChange = e => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        };

        return(
            <div className="styles">
                <form className>
                    <div>
                        <label>First Name: </label> 
                        <input name="firstName" type="text" onChange={onChange} />
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input name="lastName" type="text" onChange={onChange} />
                    </div>
                    <div>
                        <label>Email Address: </label> 
                        <input name="email" type="text" onChange={onChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input name="password" type="password" onChange={onChange} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input name="cPassword" type="password" onChange={onChange} />
                    </div>
                </form>
            </div>
        );
    }

    export default FormComp;