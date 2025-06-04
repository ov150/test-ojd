// import { useEffect, useState } from 'react';

import { useState } from "react";

// const Tab = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [street, setStreet] = useState('');
//     const [city, setCity] = useState('');
//     const [agree, setAgree] = useState(false);
//     const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);

//     const tabs = [
//         {
//             id: 0,
//             title: 'Personal Info',
//             content: (
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">First Name</label>
//                         <input
//                             type="text"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                         <input
//                             type="text"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             id: 1,
//             title: 'Contact Info',
//             content: (
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Phone</label>
//                         <input
//                             type="tel"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             id: 2,
//             title: 'Address',
//             content: (
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Street</label>
//                         <input
//                             type="text"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={street}
//                             onChange={(e) => setStreet(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">City</label>
//                         <input
//                             type="text"
//                             className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             id: 3,
//             title: 'Confirmation',
//             content: (
//                 <div className="space-y-4">
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//                             checked={agree}
//                             onChange={(e) => setAgree(e.target.checked)}
//                             required
//                         />
//                         <label className="ml-2 text-sm font-medium text-gray-700">
//                             I agree to the terms and conditions
//                         </label>
//                     </div>
//                 </div>
//             ),
//         },
//     ];

//     const isTabComplete = (tabId) => {
//         switch (tabId) {
//             case 0:
//                 return firstName.trim() !== '' && lastName.trim() !== '';
//             case 1:
//                 return email.trim() !== '' && phone.trim() !== '';
//             case 2:
//                 return street.trim() !== '' && city.trim() !== '';
//             case 3:
//                 return agree;
//             default:
//                 return false;
//         }
//     };

//     // const handleNextTab = () => {
//     //     if (isTabComplete(activeTab)) {
//     //         const newCompletedSteps = [...completedSteps];
//     //         newCompletedSteps[activeTab] = true;
//     //         setCompletedSteps(newCompletedSteps);
//     //         if (activeTab < tabs.length - 1) {
//     //             setActiveTab(activeTab + 1);
//     //         }
//     //     }
//     // };

//     useEffect(() => {
//         const newCompletedSteps = tabs.map((_, index) => isTabComplete(index));
//         setCompletedSteps(newCompletedSteps);
//     }, [firstName, lastName, email, phone, street, city, agree]);


//     const handleNextTab = () => {
//         if (isTabComplete(activeTab)) {
//             const newCompletedSteps = [...completedSteps];
//             newCompletedSteps[activeTab] = true;
//             setCompletedSteps(newCompletedSteps);
//             if (activeTab < tabs.length - 1) {
//                 setActiveTab(activeTab + 1);
//             }
//         }
//     };

//     const handleTabClick = (tabId) => {
//         for (let i = 0; i < tabId; i++) {
//             if (!completedSteps[i]) {
//                 return;
//             }
//         }
//         setActiveTab(tabId);
//     };

//     const isNextDisabled = !isTabComplete(activeTab);
//     //   const isSubmitDisabled = !completedSteps.every((step) => step);
//     const isSubmitDisabled = !completedSteps.every((step) => step);

//     const handleSubmit = () => {
//         if (completedSteps.every((step) => step)) {
//             const formData = {
//                 firstName,
//                 lastName,
//                 email,
//                 phone,
//                 street,
//                 city,
//                 agree,
//             };
//             console.log('Form submitted:', formData);
//             // Here you can handle the form submission, e.g., send data to an API
//             //   alert('Form submitted successfully!');
//         } else {
//             alert('Please complete all steps before submitting.');
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//                 <div className="flex justify-between mb-4">
//                     {tabs.map((tab) => (
//                         <div
//                             key={tab.id}
//                             className={`flex-1 text-center py-2 text-sm font-medium ${completedSteps[tab.id]
//                                 ? 'bg-green-100 text-green-600'
//                                 : activeTab === tab.id
//                                     ? 'border-b-2 border-blue-500 text-blue-600'
//                                     : 'text-gray-500 hover:text-gray-700'
//                                 } ${completedSteps.slice(0, tab.id).every((step) => step) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
//                             onClick={() => handleTabClick(tab.id)}
//                         >
//                             {tab.title}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-md">{tabs[activeTab].content}</div>
//                 <div className="mt-4 flex space-x-2">
//                     {activeTab < tabs.length - 1 ? (
//                         <button
//                             className={`w-full py-2 px-4 rounded transition ${isNextDisabled
//                                 ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
//                                 : 'bg-blue-500 text-white hover:bg-blue-600'
//                                 }`}
//                             onClick={handleNextTab}
//                             disabled={isNextDisabled}
//                         >
//                             Next
//                         </button>
//                     ) : (
//                         <button
//                             className={`w-full py-2 px-4 rounded transition ${isSubmitDisabled
//                                 ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
//                                 : 'bg-green-500 text-white hover:bg-green-600'
//                                 }`}
//                             onClick={handleSubmit}
//                             disabled={isSubmitDisabled}
//                         >
//                             Submit
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tab;



const Tab = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    //0
    //1

    const tabs = [
        {
            id: 0,
            title: 'Personal Info',
            content: (
                <div className="space-y-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 capitalize">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 capitalize">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: 'Contact Info',
            content: (
                <div className="space-y-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 capitalize">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 capitalize">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: 'Address',
            content: (
                <div className="space-y-6">
                    <div>
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700 capitalize">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 capitalize">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                </div>
            )
        }
    ];

    const handleNext = () => {
        // 0 < 4
        if (activeTab < tabs.length - 1) {
            setActiveTab(activeTab + 1);
        } else {
            setActiveTab(0)
        }
    }


    const handlePrev = () => {
        if (activeTab === 0) {
            return
        } else {
            setActiveTab(activeTab - 1)
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between mb-6 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 text-sm font-medium capitalize transition-colors duration-200 ${activeTab === tab.id
                                    ? 'border-b-2 border-blue-500 text-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="transition-opacity duration-300">
                    {tabs.map((tab) => (
                        tab.id === activeTab && (
                            <div key={tab.id}>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">{tab.title}</h2>
                                {tab.content}
                            </div>
                        )
                    ))}
                </div>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrev}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeTab === 0
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            }`}
                    >
                        {activeTab === 0 ? 'Prev' : 'Prev'}
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                        {activeTab === tabs.length - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tab;