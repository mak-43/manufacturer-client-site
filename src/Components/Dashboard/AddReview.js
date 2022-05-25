import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm()
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        const url = `http://localhost:5000/reviews`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(addReview => {
                console.log(addReview, user.email)
                toast("Review Added Successfully...");
                reset();
            })
    }
    return (
        <div>
            <h2 className="py-3  fs-1 pb-5  text-center fw-bold">
                Add Your Review
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex flex-column w-75 mx-auto"
            >
                {console.log(user)}
                <input   // readOnly
                    value={user?.email}
                    className="border p-2 mb-2"
                    {...register("email")}
                />
                <input
                    // readOnly
                    value={user?.uid}
                    className="border p-2 mb-2"
                    {...register("uid")}
                />
                <input
                    // readOnly
                    value={user?.displayName}
                    className="border p-2 mb-2"
                    {...register("displayName")}
                />
                <input
                    // readOnly
                    value={user?.photoURL}
                    className="border p-2 mb-2"
                    {...register("photoURL")}
                />
                <textarea
                    required
                    className="border p-2 mb-2"
                    placeholder="Add Review"
                    {...register("reviewdes")}
                />

                <input
                    required className="border p-2 mb-2"
                    placeholder="Enter review 1 to 5"
                    {...register("review")}
                />

                <input
                    className="btn btn-warning mb-3 py-2 fw-bold"
                    type="submit"
                    value="Add A Review"
                />
            </form>
        </div>

    );
};

export default AddReview;