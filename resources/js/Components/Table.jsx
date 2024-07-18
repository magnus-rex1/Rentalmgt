import React from "react";

export function Table({ columns = [], rows }) {
    return (
        <div>
            <table className="table">
                <thead>
                    {columns.map(column => (<th>{column.label}</th>))}
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td>{column.name}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
