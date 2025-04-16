import { useState } from 'react';


export const UserList = () => {
    // Sample data from the JSON provided
    const [transactions, setTransactions] = useState([
        {
            "_id": "67d1032616db3a58a10ce197",
            "category": "surat ticket booking",
            "type": "train ticket",
            "amount": 1000,
            "period": "2025-03-13T00:00:00.000Z",
            "userId": "67c923cbab14850b82212c54",
            "imageURL": "https://res.cloudinary.com/dtmducwcd/image/upload/v1741751078/fkotmey36zxjlfxfonwg.jpg",
        },
        {
            "_id": "67d1894b0510825da96b6dac",
            "category": "another",
            "type": "another",
            "amount": 100,
            "period": "2025-03-13T00:00:00.000Z",
            "userId": "67d186170510825da96b6d7d",
            "imageURL": "https://res.cloudinary.com/dtmducwcd/image/upload/v1741785418/jamuqqzeeogjonx2yc80.jpg",
        },
        {
            "_id": "67da4535d9be5c239cf78509",
            "category": "grocery",
            "type": "grocery",
            "amount": 3000,
            "period": "2025-03-20T00:00:00.000Z",
            "userId": "67da3f52d9be5c239cf784f1",
            "imageURL": "https://res.cloudinary.com/dtmducwcd/image/upload/v1742357814/qbgdsgav3chqfepwsghz.jpg",
        },
        {
            "_id": "67dcf12a4ce03fb6d8cbc08a",
            "category": "cash",
            "type": "trip",
            "amount": 80000,
            "period": "2025-03-22T00:00:00.000Z",
            "userId": "67dceff84ce03fb6d8cbc074",
            "imageURL": "https://res.cloudinary.com/dtmducwcd/image/upload/v1742532904/qckevpft96zyyubpx6j3.webp",
        }
    ]);

    // Handle Delete
    const handleDelete = (id) => {
        // Remove the transaction with the given ID from the state
        setTransactions(transactions.filter((transaction) => transaction._id !== id));
    };

    // Handle Edit (For simplicity, we will just log the data to console here)
    const handleEdit = (transaction) => {
        // This could be expanded to open a modal with the transaction data for editing
        console.log("Editing transaction:", transaction);
    };

    return (
        <div>
            <h2>Transaction List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Category</th>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Type</th>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Amount</th>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Period</th>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Image</th>
                        <th style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{transaction.category}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{transaction.type}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>${transaction.amount}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{new Date(transaction.period).toLocaleDateString()}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                <img
                                    src={transaction.imageURL}
                                    alt="Transaction"
                                    style={{ width: 50, height: 50 }}
                                />
                            </td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                {/* Edit Button */}
                                <button onClick={() => handleEdit(transaction)} style={{ marginRight: "10px" }}>
                                    Edit
                                </button>
                                {/* Delete Button */}
                                <button onClick={() => handleDelete(transaction._id)} style={{ backgroundColor: "red", color: "white" }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
