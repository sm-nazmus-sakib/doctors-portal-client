import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [].map(value => console.log(value))
        const booking ={
            appointmentDate: date,
            treatment: treatmentName,
            patient:name,
            slot,
            email,
            phone,
            price,
        }
        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },

            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                // setTreatment(null);
                toast.success('Booking confirmed');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
        // console.log(booking);
        
       
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <br />
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-px'>

                        <input type="text" value={date} disabled className="input input-bordered input-error w-full" />
                        <br />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <br />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered input-error w-full" />
                        <br />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-error w-full" />
                        <br />
                        <br />
                        <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-error w-full" />
                        <br />
                        <input type="submit" className="btn btn-accent w-full" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;