// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"


export const AdminIncome = () => {
    const [income, setincome] = useState([])


    const getIncome = async () => {
        const res = await axios.get("/income/getincome")
        setincome(res.data.data)
    }

    useEffect(() => {
        getIncome();
    })
    return (
        <div style={{ width: "1528px" }}>
            <table className="table table-dark" >
                <thead>
                    <tr>
                        <td style={{ color: "yellow" }}><h2> Amount </h2></td>
                        <td style={{ color: "yellow" }} > <h2> Source </h2></td>
                        <td style={{ color: "yellow" }} > <h2> Period </h2></td>
                        <td style={{ color: "yellow" }}> <h2> Description </h2></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        income.map((income) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td><h6>{income.amount}</h6></td>
                                    <td> <h6>{income.source} </h6> </td>
                                    <td> <h6> {income.period} </h6> </td>
                                    <td> <h6> {income.description} </h6> </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}
