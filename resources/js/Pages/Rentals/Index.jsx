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
                    <label for="address">Address: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="address" name="address" placeholder="Enter property address" />
                    <br />
                    <label for="type">Type: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="type" name="type" placeholder="Enter property type" />
                    <br />
                    <label for="size">Size: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="size" name="size" placeholder="Enter property size" />
                    <br />
                    <label for="bedrooms">Bedrooms: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" />
                    <br />
                    <label for="rent">Rent: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="rent" name="rent" placeholder="Enter rent amount" />
                    <br />
                    <label for="available">Available: </label>
                    <input className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" id="available" name="available" placeholder="(yes/no)" />

                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
