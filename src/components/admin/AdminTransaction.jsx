// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"

export const AdminTransaction = () => {

    const [Transaction, setTransaction] = useState([])


    const gettransaction = async () => {
        const res = await axios.get("/transaction/gettransaction")
        setTransaction(res.data.data)
    }

    useEffect(() => {
        gettransaction()
    })

    return (
        <div style={{ width: "1528px" }}>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <td style={{ color: "yellow" }}><h2> Category </h2></td>
                        <td style={{ color: "yellow" }} > <h2> amount </h2></td>
                        <td style={{ color: "yellow" }} > <h2> period </h2></td>
                        <td style={{ color: "yellow" }}> <h2> Type </h2></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Transaction.map((Transaction) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td><h5> {Transaction.category} </h5></td>
                                    <td><h5> {Transaction.amount} </h5></td>
                                    <td><h5> {Transaction.period} </h5></td>
                                    <td><h5> {Transaction.type} </h5> </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
