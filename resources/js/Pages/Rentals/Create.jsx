import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';

export default function add({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        address: '',
        type: '',
        size: '',
        bedrooms: '',
        rent: '',
        available: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('rentals.store'), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add property" />

            <div className="container-xl">
                <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item mb-2 mt-8 text-3xl font-bold text-indigo-600 hover:text-indigo-700"><a href={route('rentals.index')}>Properties /</a></li>
                        <li className="breadcrumb-item active mb-2 mt-8 text-3xl font-bold" aria-current="page">Add property</li>
                    </ol>
                </nav>
                <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                    <form onSubmit={submit}>
                        <div className="grid gap-2 p-8 lg:grid-cols-2 mb-0">
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="address"
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                    name="address"
                                    placeholder="Enter property address" />
                                <InputError message={errors.address} className="mt-2" />
                                <label for="address">Address: </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="type"
                                    value={data.type}
                                    onChange={e => setData('type', e.target.value)}
                                    name="type"
                                    placeholder="Enter property type" />
                                <InputError message={errors.type} className="mt-2" />
                                <label for="type">Type: </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="size"
                                    value={data.size}
                                    onChange={e => setData('size', e.target.value)}
                                    name="size"
                                    placeholder="Enter property size" />
                                <InputError message={errors.size} className="mt-2" />
                                <label for="size">Size: </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="bedrooms"
                                    value={data.bedrooms}
                                    onChange={e => setData('bedrooms', e.target.value)}
                                    name="bedrooms"
                                    placeholder="Enter number of bedrooms" />
                                <InputError message={errors.bedrooms} className="mt-2" />
                                <label for="bedrooms">Bedrooms: </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="rent"
                                    value={data.rent}
                                    onChange={e => setData('rent', e.target.value)}
                                    name="rent"
                                    placeholder="Enter rent amount" />
                                <InputError message={errors.rent} className="mt-2" />
                                <label for="rent">Rent: </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    type="text"
                                    id="available"
                                    value={data.available}
                                    onChange={e => setData('available', e.target.value)}
                                    name="available"
                                    placeholder="(yes/no)" />
                                <InputError message={errors.available} className="mt-2" />
                                <label for="available">Available: </label>
                            </div>
                        </div>
                        <div className="flex justify-end p-8">
                            <InputError message={errors.message} className="mt-2" />
                            <PrimaryButton className="mt-0" disabled={processing}>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
