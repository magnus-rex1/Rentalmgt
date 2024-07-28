import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head, Link } from '@inertiajs/react';

export default function index({ auth, rentals }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Properties" />

            <div className="container-xl">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="mb-2 mt-8 text-3xl font-bold">Properties</h1>
                    <a href={route('rentals.create')} className="btn btn-primary mt-8 mb-2 justify-end" role="button">Add property</a>
                </div>
                <table className="table table-striped table-bordered border-s-zinc-50 table-hover">
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
                    <tbody>
                        {rentals.map(rental => (
                            <tr>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.id}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.address}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.type}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.size}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.bedrooms}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.rent}</Link>
                                </td>
                                <td>
                                <Link href={route('rentals.edit', rental.id)} className="flex">{rental.available}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
