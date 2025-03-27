import Link from "next/link";
import Image from "next/image";
import { DrawerDialogDemo, LoginDesign } from "../LoginDesign/loginDesign";
import { DialogTrigger } from "@radix-ui/react-dialog";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between w-full py-4 m-auto">
                <div>
                    <Image src="/logo.png" alt="Logo" width={150} height={34} />
                </div>
                <div className="flex gap-[50px] items-center cursor-pointer">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard/blog">Shop</Link>
                </div>
                <div className="flex items-center gap-[30px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <p className="flex items-center gap-[5px] bg-[#46A358] py-[8px] px-[17px] rounded-[6px] text-white cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-log-in "
                        >
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" x2="3" y1="12" y2="12" />
                        </svg>
                        <LoginDesign />
                    </p>
                </div>
            </div>
            <hr className="text-[#46A35880]" />
        </>
    );
}
