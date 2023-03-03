import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = ()=>{
        setDeletingDoctor(null);
    }

   

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDoctor = doctor =>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){

                refetch();
                toast.success(`Doctor ${doctor.name} Deleted Successfully`)
            }
        })
    }

    if (isLoading) {
        return <isLoading></isLoading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors?.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (doctors).map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`if you delete ${deletingDoctor.name}. It can't be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName = "Delete"
                    modalData = {deletingDoctor}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;