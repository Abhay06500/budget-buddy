// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"

export const AdminBudget = () => {

    const [Budget, setBudget] = useState([])

    const getBudget = async () => {
        const res = await axios.get("/budget/getbudget");
        setBudget(res.data.data)
    };

    useEffect(() => {
        getBudget();
    })

    return (
        <div style={{ width: "1528px" }}>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <td style={{ color: "yellow" }}><h2> Category </h2></td>
                        <td style={{ color: "yellow" }} > <h2> amount </h2></td>
                        <td style={{ color: "yellow" }} > <h2> period </h2></td>
                        <td style={{ color: "yellow" }}> <h2> Description </h2></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Budget.map((Budget) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td><h5> {Budget.Category} </h5></td>
                                    <td><h5> {Budget.amount} </h5></td>
                                    <td><h5> {Budget.period} </h5></td>
                                    <td><h5> {Budget.description} </h5> </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
