"use client";
import React, { useState } from 'react'

const Token = ({ collectionName, collectionAdmin, collectionDescription }) => {
    const [isTransaction, setIsTransaction] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [tokenName, setTokenName] = useState("")
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenSupply, setTokenSupply] = useState("")
    const [tokenUrl, setTokenUrl] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")


    return (
        <div className="flex flex-col items-center sm:justify-center md:jstify-center absolute inset-y-12 left-0 z-10 w-full h-full bg-gradient-to-r from-sky-700 to-yellow-700 min-h-screen overflow-y-auto">
            <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center mb-10 mt-8">Step 2: Create "SAT" Token</h2>
            <form className="flex flex-col pl-8 pr-8 lg:w-3/6" onSubmit={(e) => { e.preventDefault(); }}>
                <div className="flex flex-col pl-6 pr-6">

                    <p className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl text-left">
                        <span className="text-gray-200 font-extrabold">Collection Name:</span>
                        <span className="text-white-200 font-semibold"> &nbsp; {collectionName}</span></p>
                    <p className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl text-left">
                        <span className="text-gray-200 font-extrabold">Collection Admin:</span>
                        <span className="text-white-200 font-semibold"> &nbsp; {collectionAdmin}</span></p>
                    <p className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl text-left">
                        <span className="text-gray-200 font-extrabold">Collection Description:</span>
                        <span className="text-white-200 font-semibold"> &nbsp; {collectionDescription}</span></p>
                </div>

                <div className="flex flex-wrap">
                    <input
                        type="text"
                        placeholder="Enter Token Name"
                        className="p-2 m-4 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center flex-grow"
                        value={tokenName}
                        onChange={(event) => { setTokenName(event.target.value) }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Token Symbol"
                        className="p-2 m-4 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center flex-grow"
                        value={tokenSymbol}
                        onChange={(event) => { setTokenSymbol(event.target.value) }}
                    />
                </div>

                <div className="flex flex-wrap">
                    <input
                        type="text"
                        placeholder="Enter Token Supply"
                        className="p-2 m-4 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center flex-grow"
                        value={tokenSupply}
                        onChange={(event) => { setTokenSupply(event.target.value) }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Token Metadata URL"
                        className="p-2 m-4 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center flex-grow"
                        value={tokenUrl}
                        onChange={(event) => { setTokenUrl(event.target.value) }}
                    />
                </div>

                <div className="flex flex-wrap p-4">
                    <textarea
                        placeholder="Description of your Token Description ..."
                        className="p-2 border-4 border-gray-300 rounded h-24 bg-white bg-opacity-50 border border-white rounded space-y-4 mb-8 placeholder-gray-500 text-black flex-grow"
                        value={tokenDescription}
                        onChange={(event) => { setTokenDescription(event.target.value) }}
                    ></textarea>
                </div>

                {isTransaction ? <button className="p-2 text-black bg-white rounded mb-5 " disabled>
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="ml-2">Processing Your Request</span>
                    </div>
                </button> : <button className="p-2 text-white bg-black rounded mb-5"
                    onClick={() => {
                        setIsTransaction(true);
                        setIsSuccess(true);
                    }}>
                    Create your SAT Token
                </button>
                }
            </form>
            {isError ? <ErrorToast setIsError={setIsError} setIsTransaction={setIsTransaction} /> : <></>}
            {isSuccess ? <SuccessToast setIsSuccess={setIsSuccess} setIsTransaction={setIsTransaction} /> : <></>}
        </div>
    )
}

export default Token;


const SuccessToast = ({ setIsSuccess, setIsTransaction }) => {
    return (
        <div id="toast-success"
            className="fixed bottom-0 right-0 flex items-center w-4/5 md:w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 mr-4"
            role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">Transaction Successful.</div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={() => {
                setIsSuccess(false);
                setIsTransaction(false);
            }}>
                <span class="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    );
}

const ErrorToast = ({ setIsError, setIsTransaction }) => {
    return (
        <div id="toast-danger" className="fixed bottom-0 right-0 flex items-center w-4/5 md:w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 mr-4" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <span class="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">An Error Occured. Try Again.</div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close" onClick={() => {
                setIsError(false);
                setIsTransaction(false);
            }}>
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    );
}
