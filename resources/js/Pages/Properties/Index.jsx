import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';

export default function index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        // post(route('properties.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Properties" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                Here is supposed to be a card
            </div>
        </AuthenticatedLayout>
    );
}
