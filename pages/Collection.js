import React, { useState, useEffect } from 'react'
import Token from '../components/Token';
import { dappClient } from '../utils/walletconnect';

const Collection = () => {
    const [showToken, setShowToken] = useState(false);
    const [collectionName, setCollectionName] = useState("");
    const [collectionAdmin, setCollectionAdmin] = useState("");
    const [collectionDescription, setCollectionDescription] = useState("");

    useEffect(() => {
        (async () => {
            // TODO 5.b - Get the active account
            const accounts = await dappClient().getAccount();
            console.log(accounts.account);
            if (accounts.account != null) {
                setCollectionAdmin(accounts.account.address);
            }
        })();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-green-700 to-yellow-700 min-h-screen overflow-y-auto">
                <form className="flex flex-col p-8" onSubmit={(e) => { e.preventDefault(); setShowToken(true) }}>
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white text-center text-strong">Create "SAT" Token here</h1>
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center">Step 1: Create Your Collection</h2>
                    <input
                        type="text"
                        placeholder="Enter Collection Name"
                        className="p-2 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center"
                        value={collectionName}
                        onChange={
                            (event) => {
                                setCollectionName(event.target.value)
                            }
                        }
                    />
                    <input
                        type="text"
                        placeholder="Enter Admin Address"
                        className="p-2 border-4 border-gray-300 rounded bg-white bg-opacity-50 border border-white rounded space-y-4 mb-4 placeholder-gray-500 text-black text-center"
                        // defaultValue={async () => {
                        //     const accounts = await dappClient().getAccount();
                        //     console.log(accounts);
                        //     if (accounts == null) {
                        //         setCollectionAdmin(accounts.account.address);
                        //     }
                        // }}
                        value={collectionAdmin}
                        onChange={
                            (event) => {
                                setCollectionAdmin(event.target.value)
                            }
                        }
                    />
                    <textarea
                        placeholder="Description of your Collection and SAT Token ..."
                        className="p-2 border-4 border-gray-300 rounded h-24 bg-white bg-opacity-50 border border-white rounded space-y-4 mb-10 placeholder-gray-500 text-black"
                        value={collectionDescription}
                        onChange={
                            (event) => {
                                setCollectionDescription(event.target.value)
                            }
                        }
                    ></textarea>
                    <button
                        type="submit"
                        className="p-2 text-white bg-black rounded flex text-center justify-center">
                        {"Next"} &nbsp; <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </form>
                {showToken && <Token collectionName={collectionName} collectionAdmin={collectionAdmin} collectionDescription={collectionDescription} setShowToken={setShowToken} />}
            </div>
        </>
    )
}

export default Collection;
