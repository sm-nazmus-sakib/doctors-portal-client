import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='mt-16'
            style={{
                background: `url(${appointment})`,
                backgroundSize:'cover',
                height:'100%',
                width:'100%',
            }}
        >

            <div className="card shadow-xl image-full">
                <div className="card-body text-center">
                    <div className=''>
                        <h3 className="text-xl text-primary">Contact Us</h3>
                        <h4 className='text-2xl'>Stay connected with us</h4>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" /> <br /> 
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /> <br /> 
                        <textarea className="textarea w-[35%] h-[40%]" placeholder="Message"></textarea> <br /> 
                        <button className="btn btn-active btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;