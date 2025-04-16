// import { Link } from "react-router-dom";

// export const Createudget = () => {
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
//                 Our Budget Philosophy
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
//                 We believe in providing <span style={{ color: '#e53e3e', fontWeight: '600' }}>transparent</span>, <span style={{ color: '#38a169', fontWeight: '600' }}>affordable</span>, and <span style={{ color: '#d69e2e', fontWeight: '600' }}>tailored solutions</span> to meet your unique needs. We understand that managing a budget is crucial for every project, and we are committed to delivering high-quality results within your financial parameters.
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
//                 We offer <span style={{ color: '#3182ce', fontWeight: '600' }}>flexible pricing models</span> to ensure you only pay for what you need, with no hidden fees. Whether you’re planning a small project or a larger investment, we’ll work with you to create a budget that aligns with your goals.
//             </h4>
//             <br />
//             <h2 style={{ 
//                 fontSize: '2.5rem', 
//                 color: '#2b6cb0', 
//                 marginBottom: '20px', 
//                 fontWeight: '700', 
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' 
//             }}>
//                 How Our Budgeting Works:
//             </h2>
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
//                 <span style={{ color: '#e53e3e', fontWeight: '600' }}>1. Transparent Pricing</span> – We provide upfront, clear pricing so you know exactly what to expect from the start.
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
//                 <span style={{ color: '#38a169', fontWeight: '600' }}>2. Customized Solutions</span> – Every project is different. We work with you to craft a budget that best fits your vision and requirements.
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
//                 <span style={{ color: '#d69e2e', fontWeight: '600' }}>3. No Hidden Fees</span> – What we quote is what you pay. There are no surprises along the way.
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
//                 <span style={{ color: '#3182ce', fontWeight: '600' }}>4. Flexible Payment Plans</span> – We offer various payment options to make it easier for you to manage your budget.
//             </h4>
//             <br />
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
//                 Whether you’re just getting started or need assistance with a more complex project, we are here to guide you through the budgeting process. Reach out today, and let’s bring your vision to life within your budget!
//             </h4>
//             <br />
//             <h4>
//                 <Link 
//                     to={"/home"} 
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
//                     Add Your Budget Buddy!!
//                 </Link>
//             </h4>
//         </div>
//     );
// };










import { Link } from "react-router-dom";

export const CreateBudget = () => {
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
                Our Budget Philosophy
            </h1>

            {[
                {
                    text: `We believe in providing `,
                    highlights: [
                        { word: 'transparent', color: '#ff6f61' },
                        { word: 'affordable', color: '#36A2EB' },
                        { word: 'tailored solutions', color: '#FFCE56' }
                    ],
                    suffix: ` to meet your unique needs. We understand that managing a budget is crucial for every project, and we are committed to delivering high-quality results within your financial parameters.`
                },
                {
                    text: `We offer `,
                    highlights: [
                        { word: 'flexible pricing models', color: '#36A2EB' }
                    ],
                    suffix: ` to ensure you only pay for what you need, with no hidden fees. Whether you’re planning a small project or a larger investment, we’ll work with you to create a budget that aligns with your goals.`
                },
                {
                    isTitle: true,
                    text: "How Our Budgeting Works:"
                },
                {
                    text: `1. `,
                    highlights: [{ word: 'Transparent Pricing', color: '#ff6f61' }],
                    suffix: ` – We provide upfront, clear pricing so you know exactly what to expect from the start.`
                },
                {
                    text: `2. `,
                    highlights: [{ word: 'Customized Solutions', color: '#36A2EB' }],
                    suffix: ` – Every project is different. We work with you to craft a budget that best fits your vision and requirements.`
                },
                {
                    text: `3. `,
                    highlights: [{ word: 'No Hidden Fees', color: '#FFCE56' }],
                    suffix: ` – What we quote is what you pay. There are no surprises along the way.`
                },
                {
                    text: `4. `,
                    highlights: [{ word: 'Flexible Payment Plans', color: '#36A2EB' }],
                    suffix: ` – We offer various payment options to make it easier for you to manage your budget.`
                },
                {
                    text: "Whether you are just getting started or need assistance with a more complex project, we are here to guide you through the budgeting process. Reach out today, and let’s bring your vision to life within your budget!"
                }
            ].map((block, index) => (
                <div key={index} style={{
                    fontSize: block.isTitle ? '2.5rem' : '1.25rem',
                    lineHeight: '1.8',
                    color: '#EFEBE9',
                    maxWidth: '800px',
                    margin: '0 auto 20px',
                    backgroundColor: '#222',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(255, 111, 97, 0.3)',
                    fontWeight: block.isTitle ? '700' : '400'
                }}>
                    {!block.highlights ? (
                        block.text
                    ) : (
                        <>
                            {block.text}
                            {block.highlights.map((highlight, i) => (
                                <span key={i} style={{ color: highlight.color, fontWeight: '600' }}>
                                    {highlight.word}
                                </span>
                            ))}
                            {block.suffix}
                        </>
                    )}
                </div>
            ))}

            <br />
            <Link
                to="/"
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
                Add Your Budget Buddy!!
            </Link>
        </div>
  );
};

