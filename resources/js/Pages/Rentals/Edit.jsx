import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head, router } from '@inertiajs/react';

export default function add({ auth, rental }) {
    const { data, setData, put, processing, errors } = useForm({
        address: rental.address || '',
        type: rental.type || '',
        size: rental.size || '',
        bedrooms: rental.bedrooms || '',
        rent: rental.rent || '',
        available: rental.available || '',
    });

    function submit(e) {
        e.preventDefault();
        // post(route('rentals.update'));
        put(route('rentals.update', rental.id));
    }

    function destroy() {
        if (confirm('Are you sure you want to delete this property?')) {
            router.delete(route('rentals.destroy', rental.id));
        }
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit property" />

            <div className="container-xl">
                <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item mb-2 mt-8 text-3xl font-bold text-indigo-600 hover:text-indigo-700"><a href={route('rentals.index')}>Properties /</a></li>
                        <li className="breadcrumb-item active mb-2 mt-8 text-3xl font-bold" aria-current="page">{rental.address}</li>
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
                        <div className="flex items-center p-8">
                            <InputError message={errors.message} className="mt-2" />
                            <button onClick={destroy} type="button" className="btn btn-danger uppercase font-semibold text-xs">Delete</button>
                            <PrimaryButton className="ml-auto" disabled={processing}>Update</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
