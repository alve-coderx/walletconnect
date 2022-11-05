import React, { useState } from "react";
import Faq from "react-faq-component";

const FAQ = () => {
    const [rows, setRowsOption] = useState(null);
    const data = {
        title: "",
        rows: [
            {
                title: <p className="font-[500]">Is registering for a PREMINT list safe?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">Yes. Over 1 million list registrations have happened on PREMINT without issue. When you sign in with PREMINT, you only are validating ownership of the wallet address. PREMINT does not get any permissions to perform transactions, and does not have any way of withdrawing anything from your wallet.</p>
            },
            {
                title: <p className="font-[500]">Who else has used PREMINT?</p>,
                content:
                    <p className="bg-gray-200 border-[1px] border-gray-400 px-2">Premint has been used by some of the top artists and collections in the NFT ecosystem, including XCOPY, Coldie, DeekayMotion, Cool Cats, Known Origin, Async Art, Shaq, and over 1,000 more.</p>
            },
            {
                title: <p className="font-[500]">Why does PREMINT ask permission to “suggest transactions to approve” when logging in with MetaMask?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. </p>
            },
            {
                title: <p className="font-[500]">Why do I need to “Sign” a message in addition to connecting my wallet.</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">If I disconnect my wallet or social networks after registering, will my entry still be valid?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">If I transfer the required NFT after registering, will my registration still be valid?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">Do you record my IP address?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">I registered, but the project says my wallet isn’t on the list. What happened?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">It says my Discord or Twitter are attached to a different wallet. How do I disconnect them?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
            {
                title: <p className="font-[500]">What is an “access list”? Isn’t it called a “whitelist”?</p>,
                content: <p className="bg-gray-200 border-[1px] border-gray-400 px-2">current version is 1.2.1</p>
            },
        ]
    };
    return (
        <div className="my-10">
            <div className="text-center py-5">
                <p className="text-4xl py-3">Have questions?</p>
                <p className="text-gray-500">Here are some answers to commonly asked questions. Did we miss something? <span className="text-[#2CBBDB]">DM us on Twitter</span> to ask anything else.</p>
            </div>
            <div className="container mx-auto lg:w-[50%] px-4">
                <Faq data={data} getRowOptions={setRowsOption} />
            </div>
        </div>
    );
}

export default FAQ