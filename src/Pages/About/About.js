import React from 'react';
import doc from '../../../src/assets/images/doc.jpg';

const About = () => {
    return (
        <div>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={doc} className="rounded-lg lg:w-1/2 shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-3xl font-bold">Doctors are here for you</h1>
                    <p className="py-6">Experienced and certified to practice medicine to help maintain or restore physical and mental health.
                        General Dentist. Pedodontist or Pediatric Dentist. Orthodontist. Periodontist or Gum Specialist. Endodontist or Root Canal Specialist.
                        Oral Pathologist or Oral Surgeon.Prosthodontist.
                    </p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;