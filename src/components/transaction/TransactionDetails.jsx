// // import React from 'react'

// import { Link } from "react-router-dom";


//  export const TransactionDetails = () => {
//      return (

//     <div style={{
//             textAlign: 'center', 
//             padding: '40px 20px', 
//             backgroundColor: 'burlywood', 
//             fontFamily: "'Poppins', sans-serif", 
//             color: '#2d3748', 
//             minHeight: '100vh' ,
//             width:"1550px"
//         }}>
//             <h1 style={{ 
//                 fontSize: '3rem', 
//                 color: '#2b6cb0', 
//                 marginBottom: '20px', 
//                 fontWeight: '700', 
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Seamless Transaction Management
//             </h1>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Easily record and manage every transaction with Budget Buddy’s intuitive transaction tracker. Whether it is a cup of coffee, a utility bill, or a large purchase, our tool makes it simple to log all your financial activities in real time. By capturing every expense and income source, you’ll gain a comprehensive view of your financial life.
//             </h4>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 <span style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.5rem' }}>Instant Recording:</span> Add your transactions quickly with just a few taps. Capture both income and expenses effortlessly.
//             </h4>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 <span style={{ color: '#38a169', fontWeight: '600', fontSize: '1.5rem' }}>Automatic Categorization:</span> Automatically sort your transactions into pre-set categories, such as groceries, rent, utilities, and entertainment, for a clearer understanding of where your money is going.
//             </h4>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 <span style={{ color: '#d69e2e', fontWeight: '600', fontSize: '1.5rem' }}>Detailed Reports:</span> Dive into detailed reports that show spending trends over time, helping you make informed decisions about your financial habits.
//             </h4>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 <span style={{ color: '#3182ce', fontWeight: '600', fontSize: '1.5rem' }}>Custom Categories:</span> Create custom categories to track unique spending types that matter most to you—giving you full control over your financial organization.
//             </h4>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 <span style={{ color: '#2b6cb0', fontWeight: '600', fontSize: '1.5rem' }}>Real-Time Syncing:</span> Your transactions update across all your devices in real-time, ensuring that you are always on top of your finances.
//             </h4>
//             <br />
//             <h3 style={{ 
//                 fontSize: '1.5rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 With Budget Buddy’s transaction tracking, you’ll always know where your money is going and have the insights you need to optimize your spending. Say goodbye to financial surprises and take charge of your money!
//             </h3>
//             <br />
//             <h1 style={{ 
//                 fontSize: '2.5rem', 
//                 color: '#2b6cb0', 
//                 marginBottom: '20px', 
//                 fontWeight: '700', 
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Ready to start managing your transactions?
//             </h1>
//             <br />
//             <h4 style={{ 
//                 fontSize: '1.25rem', 
//                 lineHeight: '1.8', 
//                 color: '#4a5568', 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 backgroundColor: '#ffffff', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Log your expenses, track your income, and get clear insights into your spending.
//             </h4>
//             <br />
//             <h4>
//                 <Link 
//                     to={"/transaction"} 
//                     style={{ 
//                         textDecoration: 'none', 
//                         color: '#fff', 
//                         backgroundColor: '#2b6cb0', 
//                         padding: '12px 24px', 
//                         borderRadius: '8px', 
//                         fontSize: '1.25rem', 
//                         fontWeight: '600', 
//                         transition: 'background-color 0.3s ease, transform 0.3s ease', 
//                         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
//                     }}
//                     onMouseOver={(e) => { 
//                         e.target.style.backgroundColor = '#1e4e8c'; 
//                         e.target.style.transform = 'scale(1.05)'; 
//                     }}
//                     onMouseOut={(e) => { 
//                         e.target.style.backgroundColor = '#2b6cb0'; 
//                         e.target.style.transform = 'scale(1)'; 
//                     }}
//                 >
//                     Start now with Budget Buddy!
//                 </Link>
//             </h4>
//         </div>
//      )

//  }












// import React from 'react'
import { Link } from "react-router-dom"

export const TransactionDetails = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#111',
            fontFamily: "'Poppins', sans-serif",
            color: '#f5f5f5',
            minHeight: '100vh',
            width: '1600px',
        }}>
            <h1 style={{
                fontSize: '3rem',
                color: '#ff6f61',
                marginBottom: '20px',
                fontWeight: '700',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
            }}>
                Seamless Transaction Management
            </h1>

            <br />

            {[
                {
                    title: '',
                    body: "Easily record and manage every transaction with Budget Buddy’s intuitive transaction tracker. Whether it is a cup of coffee, a utility bill, or a large purchase, our tool makes it simple to log all your financial activities in real time. By capturing every expense and income source, you’ll gain a comprehensive view of your financial life."
                },
                {
                    title: 'Instant Recording:',
                    color: '#ff6f61',
                    body: "Add your transactions quickly with just a few taps. Capture both income and expenses effortlessly."
                },
                {
                    title: 'Automatic Categorization:',
                    color: '#50fa7b',
                    body: "Automatically sort your transactions into pre-set categories, such as groceries, rent, utilities, and entertainment, for a clearer understanding of where your money is going."
                },
                {
                    title: 'Detailed Reports:',
                    color: '#f1fa8c',
                    body: "Dive into detailed reports that show spending trends over time, helping you make informed decisions about your financial habits."
                },
                {
                    title: 'Custom Categories:',
                    color: '#8be9fd',
                    body: "Create custom categories to track unique spending types that matter most to you—giving you full control over your financial organization."
                },
                {
                    title: 'Real-Time Syncing:',
                    color: '#ff6f61',
                    body: "Your transactions update across all your devices in real-time, ensuring that you are always on top of your finances."
                }
            ].map((section, index) => (
                <div key={index} style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.8',
                    color: '#aaa',
                    maxWidth: '800px',
                    margin: '20px auto',
                    backgroundColor: '#222',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}>
                    {section.title && (
                        <span style={{
                            color: section.color || '#ff6f61',
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            {section.title}
                        </span>
                    )}
                    {section.body}
                </div>
            ))}

            <br />

            <h3 style={{
                fontSize: '1.5rem',
                lineHeight: '1.8',
                color: '#aaa',
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: '#222',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
            }}>
                With Budget Buddy’s transaction tracking, you’ll always know where your money is going and have the insights you need to optimize your spending. Say goodbye to financial surprises and take charge of your money!
            </h3>

            <br />

            <h1 style={{
                fontSize: '2.5rem',
                color: '#ff6f61',
                marginBottom: '20px',
                fontWeight: '700',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
            }}>
                Ready to start managing your transactions?
            </h1>

            <br />

            <h4 style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: '#aaa',
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: '#222',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
            }}>
                Log your expenses, track your income, and get clear insights into your spending.
            </h4>

            <br />

            <h4>
                <Link
                    to={"/user/transaction"}
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        backgroundColor: '#ff6f61',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#e85a4f'
                        e.target.style.transform = 'scale(1.05)'
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#ff6f61'
                        e.target.style.transform = 'scale(1)'
                    }}
                >
                    Start now with Budget Buddy!
                </Link>
            </h4>
      </div>
)
}

