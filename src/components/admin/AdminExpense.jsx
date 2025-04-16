// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"

export const AdminExpense = () => {

    const [Expense, setExpense] = useState([])

    const getExpense = async () => {
        const res = await axios.get("/expense/getexpense")
        setExpense(res.data.data)
    };

    useEffect(() => {
        getExpense()
    })

    return (
        <div style={{ width: "1528px" }}>
            <table className="table table-dark" >
                <thead>
                    <tr>
                        <td style={{ color: "yellow" }}><h2> Category </h2></td>
                        <td style={{ color: "yellow" }} > <h2> amount </h2></td>
                        <td style={{ color: "yellow" }} > <h2> period </h2></td>
                        <td style={{ color: "yellow" }} > <h2> Description </h2></td>
                        <td style={{ color: "yellow" }}> <h2> payment_method </h2></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Expense.map((Expense) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td><h5> {Expense.Category} </h5></td>
                                    <td><h5> {Expense.amount} </h5></td>
                                    <td><h5> {Expense.period} </h5></td>
                                    <td><h5> {Expense.description}</h5></td>
                                    <td><h5> {Expense.payment_method} </h5></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
