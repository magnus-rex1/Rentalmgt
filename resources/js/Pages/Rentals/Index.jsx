import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';
import Board from "@/Components/Square";
import ImageGrid from "@/Components/ImageGrid";

const images = [
    { imageUrl: '../../../images/house1.jpg', altText: 'Image 1' },
    { imageUrl: '../../../images/house2.jpg', altText: 'Image 2' },
];

export default function index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('rentals.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Properties" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="address" name="address" placeholder="Enter property address" />
                        <label for="address">Address: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="type" name="type" placeholder="Enter property type" />
                        <label for="type">Type: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="size" name="size" placeholder="Enter property size" />
                        <label for="size">Size: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" />
                        <label for="bedrooms">Bedrooms: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="rent" name="rent" placeholder="Enter rent amount" />
                        <label for="rent">Rent: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="available" name="available" placeholder="(yes/no)" />
                        <label for="available">Available: </label>
                    </div>

                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
