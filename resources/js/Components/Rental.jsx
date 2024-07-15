// import React from "react";

export default function Rental({ rental }) {
    return (
        <div>
            <p>this is like a table</p>
            <table className="table">
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
                    <tr>
                        <th scope="row"></th>
                        <td>{rental.address}</td>
                        <td>{rental.type}</td>
                        <td>{rental.size}</td>
                        <td>{rental.bedrooms}</td>
                        <td>{rental.rent}</td>
                        <td>{rental.available}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
