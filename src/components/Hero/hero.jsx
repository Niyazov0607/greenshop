import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-[14px] font-[500] text-[#3D3D3D]">
                    Welcome to GreenShop
                </p>
                <h1 className="font-[900] text-[70px]">
                    Let’s Make a <br />
                    Better <span className="text-green-700">Planet</span>
                </h1>
                <p className="text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use <br />
                    our plants to create an unique Urban Jungle. Order your
                    favorite plants!
                </p>
                <button className="mt-[55px] py-[10px] px-[25px] bg-[#46A358] text-white rounded-[6px]">
                    SHOP NOW
                </button>
            </div>
            <div>
                <Image src="/heroImg.png" alt="Logo" width={518} height={518} />
            </div>
        </div>
    );
}
