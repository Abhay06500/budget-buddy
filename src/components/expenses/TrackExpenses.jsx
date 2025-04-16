// import { Link } from "react-router-dom";

// export const TrackExpenses = () => {
//     return (
//         <div style={{ 
//             textAlign: 'center', 
//             padding: '40px 20px', 
//             width:"1550px",
//             backgroundColor: 'burlywood', 
//             fontFamily: "'Poppins', sans-serif", 
//             color: '#2d3748', 
//             minHeight: '100vh' 
//         }}>
//             <h1 style={{ 
//                 fontSize: '3rem', 
//                 color: '#2b6cb0', 
//                 marginBottom: '20px', 
//                 fontWeight: '700', 
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Track Your Expenses with Ease
//             </h1>
//             <br />
//             <h5 style={{ 
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
//                 Stay in control of your spending with Budget Buddy’s Expense Tracker. Our simple and intuitive tool allows you to easily log and categorize every transaction, giving you a clear overview of where your money is going. Whether it is daily purchases, monthly bills, or unexpected expenses, you can track it all in real-time.
//             </h5>
//             <br />
//             <h5 style={{ 
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
//                 <span style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.5rem' }}>Categorize Your Spending:</span> Group your expenses into categories like groceries, transportation, entertainment, and more to see where you can cut back.
//             </h5>
//             <br />
//             <h5 style={{ 
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
//                 <span style={{ color: '#38a169', fontWeight: '600', fontSize: '1.5rem' }}>Instant Insights:</span> View your spending patterns with visual reports that help you identify trends, overspending areas, and opportunities for saving.
//             </h5>
//             <br />
//             <h5 style={{ 
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
//                 <span style={{ color: '#d69e2e', fontWeight: '600', fontSize: '1.5rem' }}>Set Limits:</span> Set budget limits for each category and get notified when you are nearing or exceeding them, helping you stay within your financial goals.
//             </h5>
//             <br />
//             <h5 style={{ 
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
//                 <span style={{ color: '#3182ce', fontWeight: '600', fontSize: '1.5rem' }}>Secure and Simple:</span> Add your transactions with just a few taps, knowing your data is safe with us.
//             </h5>
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
//                 Start tracking your expenses today to take control of your finances and make smarter spending decisions.
//             </h4>
//             <br />
//             <h1 style={{ 
//                 fontSize: '2.5rem', 
//                 color: '#2b6cb0', 
//                 marginBottom: '20px', 
//                 fontWeight: '700', 
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 Ready to track your expenses?
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
//                 Start adding your transactions and see exactly where your money is going.
//             </h4>
//             <br />
//             <h4>
//                 <Link 
//                     to={"/expense"} 
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
//                     Get started now Budget Buddy!
//                 </Link>
//             </h4>
//         </div>
//     );
// };












import { Link } from "react-router-dom";

export const TrackExpenses = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#111',
            fontFamily: "'Poppins', sans-serif",
            color: '#EFEBE9',
            minHeight: '100vh',
            width: '1600px',
        }}>
            <h1 style={{
                fontSize: '3rem',
                color: '#ff6f61',
                marginBottom: '20px',
                fontWeight: '700',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)'
            }}>
                Track Your Expenses with Ease
            </h1>

            {[
                {
                    title: 'Stay in control of your spending with Budget Buddy’s Expense Tracker.',
                    content: 'Our simple and intuitive tool allows you to easily log and categorize every transaction, giving you a clear overview of where your money is going. Whether it is daily purchases, monthly bills, or unexpected expenses, you can track it all in real-time.'
                },
                {
                    title: 'Categorize Your Spending:',
                    content: 'Group your expenses into categories like groceries, transportation, entertainment, and more to see where you can cut back.',
                    color: '#ff6f61'
                },
                {
                    title: 'Instant Insights:',
                    content: 'View your spending patterns with visual reports that help you identify trends, overspending areas, and opportunities for saving.',
                    color: '#36A2EB'
                },
                {
                    title: 'Set Limits:',
                    content: 'Set budget limits for each category and get notified when you are nearing or exceeding them, helping you stay within your financial goals.',
                    color: '#FFCE56'
                },
                {
                    title: 'Secure and Simple:',
                    content: 'Add your transactions with just a few taps, knowing your data is safe with us.',
                    color: '#36A2EB'
                },
                {
                    title: 'Start tracking your expenses today to take control of your finances and make smarter spending decisions.'
                }
            ].map((section, index) => (
                <div key={index} style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.8',
                    color: '#EFEBE9',
                    maxWidth: '800px',
                    margin: '0 auto 20px',
                    backgroundColor: '#222',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(255, 111, 97, 0.3)'
                }}>
                    {section.color ? (
                        <span style={{ color: section.color, fontWeight: '600', fontSize: '1.5rem' }}>
                            {section.title}
                        </span>
                    ) : (
                        <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '10px' }}>
                            {section.title}
                        </strong>
                    )}
                    <div>{section.content}</div>
                </div>
            ))}

            <h1 style={{
                fontSize: '2.5rem',
                color: '#ff6f61',
                marginBottom: '20px',
                fontWeight: '700',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)'
            }}>
                Ready to track your expenses?
            </h1>

            <div style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: '#EFEBE9',
                maxWidth: '800px',
                margin: '0 auto 20px',
                backgroundColor: '#222',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(255, 111, 97, 0.3)'
            }}>
                Start adding your transactions and see exactly where your money is going.
            </div>

            <Link
                to="/user/expense"
                style={{
                    textDecoration: 'none',
                    color: '#111',
                    backgroundColor: '#ff6f61',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(255, 111, 97, 0.6)'
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ff3f3f';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ff6f61';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                Get started now Budget Buddy!
            </Link>
        </div>
  );
};
