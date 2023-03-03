import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div className='lg:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
                </div>
        </header>
    );
};

export default AppointmentBanner;