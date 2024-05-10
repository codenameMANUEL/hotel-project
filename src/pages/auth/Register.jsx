import { useState } from 'react';
import '../auth/auth.css'

const Register = () => {
 
    
    const [record, setRecord] = useState({
        first_nanme:"",
        last_nanme:"",
        email:"",
        phone_number:"",
    })


    const handleRegisterEvent = (e) => {
        let {value,name} = e.target;
        console.log(name)
        setRecord({...record,[name]:value});
    }


    return (
        <div>
            <div className="center w70">
                <div className="section">
                    <div className="flex space-btwn">
                        <div>Logo</div>
                        <div className="text-uppercase fs_7 b">Project</div>
                    </div>

                    <div>
                        <span className="fs9 w7 mt4 ml4 text-uppercase ">Vous avez un project, une question?</span>
                    </div>
                    <div className="mt4 flex space-between p4">
                        <div className="w50">
                            <div className="flex">

                                <div className="w50">
                                    <div>
                                        <label className="label-text">FIRST NAME</label>
                                    </div>
                                    <input className="input-box"
                                        name="first_name"
                                        value={record.first_name}
                                        onChange={handleRegisterEvent}
                                    />
                                </div>
                                <div className="w50 space">
                                    <div>
                                        <label className="label-text">LAST NAME</label>
                                    </div>
                                    <input className="input-box"
                                        name="last_name"
                                        value={record.last_name}
                                        onChange={handleRegisterEvent}
                                    />
                                </div>

                            </div>
                            <div className="mt4">
                                <div>
                                    <label className="label-text">Email</label>
                                </div>
                                <input className="input-box"
                                    name="email"
                                    value={record.email}
                                    onChange={handleRegisterEvent}
                                />
                            </div>
                            <div className="mt4">
                                <div>
                                    <label className="label-text">PHONE NUMBER</label>
                                </div>
                                <input className="number"
                                    name="phone_number"
                                    value={record.phone_number}
                                    onChange={handleRegisterEvent}
                                />
                            </div>
                            <div className="mt4">
                                <button className='btn_register'>REGISTER</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;