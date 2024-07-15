import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';
import Rental from "@/Components/Rental";
import Board from "@/Components/Square";
import ImageGrid from "@/Components/ImageGrid";

export default function index({ auth, rentals }) {
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
        // post(route('rentals.store'), { onSuccess: () => reset() });
        post(route('rentals.store'), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Properties" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Properties</h5>
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <table className="table table-striped table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Bedrooms</th>
                                        <th scope="col">Rent</th>
                                        <th scope="col">Available</th>
                                    </tr>
                                </thead>
                                {rentals.map(rental => (
                                    <tbody>
                                        <tr>
                                            <td>{rental.id}</td>
                                            <td>{rental.address}</td>
                                            <td>{rental.type}</td>
                                            <td>{rental.size}</td>
                                            <td>{rental.bedrooms}</td>
                                            <td>{rental.rent}</td>
                                            <td>{rental.available}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Add property</h5>
                        <form onSubmit={submit}>
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

                            <InputError message={errors.message} className="mt-2" />
                            <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
