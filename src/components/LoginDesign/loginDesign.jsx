"use client";

import React, { use, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Card from "../Cards/cards";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
const token = "64bebc1e2c6d3f056a8c85b7";

export function LoginDesign() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        const res = await axios.post(
            `https://green-shop-backend.onrender.com/api/user/sign-up?access_token=${token}`,
            { name, username, password, confirmPassword, email }
        );
        Json.stringify(localStorage.setItem("user", res.data.data.token));
        Json.stringify(localStorage.setItem("user", res.data.data.user));

        router.push("/page");
    }

    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    console.log(user);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border-none cursor-pointer bg-green-0 hover:bg-transparent hover:text-white"
                >
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] h-[600px] ">
                <DialogHeader></DialogHeader>
                <div className="grid gap-4 py-4">
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList className="grid items-center w-full grid-cols-1">
                            <TabsTrigger
                                value="account"
                                className="absolute top-[50px] cursor-pointer left-[172px] text-[20px] font-[500] text-green-500 border-r-[1px] border-r-green-500 w-[80px] h-[15   px]"
                            >
                                Login
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className="absolute top-[50px] cursor-pointer right-[169px]  text-green-500 text-[20px] font-[500] mr-[-10px]"
                            >
                                Register
                            </TabsTrigger>
                        </TabsList>
                        <form action="" onSubmit={handleSubmit}>
                            <TabsContent
                                value="account"
                                className="justify-center m-auto "
                            >
                                <p className="absolute top-[120px] text-center justify-center m-auto left-[50px] right-[50px] text-[#3D3D3D] ">
                                    Enter your username and password to login.
                                </p>
                                <div className="items-center justify-center gap-4 m-auto ml-12 border-[1px] border-green-500 rounded-[9px] ">
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="col-span-3 m-auto "
                                        placeholder="almamun_uxui@outlook.com"
                                    />
                                </div>
                                <div className="items-center justify-center gap-4 m-auto ml-12 mt-[20px] border-[1px] border-green-500 rounded-[9px]">
                                    <Input
                                        id="username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        className="col-span-3"
                                        placeholder="***********"
                                    />
                                </div>
                                <p className="absolute right-[70px] mt-[10px] text-green-500">
                                    Forgot Password?
                                </p>
                            </TabsContent>
                        </form>
                        <form action="" onSubmit={handleSubmit}>
                            <TabsContent
                                value="password"
                                className="w-[500px] h-[656px]"
                            >
                                <p className="absolute top-[90px] left-[100px] text-[#3D3D3D]">
                                    Enter your email and password to register.
                                </p>
                                <div className="items-center justify-center gap-4 m-auto  border-[1px] border-green-500 rounded-[9px] absolute top-[150px]  left-[80px] w-[350px]">
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="col-span-3 m-auto "
                                        placeholder="name"
                                    />
                                </div>
                                <div className="items-center justify-center gap-4 m-auto ml-12 mt-[20px] border-[1px] border-green-500 rounded-[9px] absolute top-[175px] left-[33px] w-[350px]">
                                    <Input
                                        id="surname"
                                        value={surname}
                                        onChange={(e) =>
                                            setSurname(e.target.value)
                                        }
                                        className="col-span-3"
                                        placeholder="Surname"
                                    />
                                </div>
                                <div className="items-center justify-center gap-4 m-auto ml-12 mt-[20px] border-[1px] border-green-500 rounded-[9px] absolute top-[220px] left-[33px] w-[350px]">
                                    <Input
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="col-span-3"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="items-center justify-center gap-4 m-auto ml-12 mt-[20px] border-[1px] border-green-500 rounded-[9px] absolute top-[265px] left-[33px] w-[350px]">
                                    <Input
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="col-span-3"
                                        placeholder=" Password"
                                    />
                                </div>
                                <div className="items-center justify-center gap-4 m-auto ml-12 mt-[20px] border-[1px] border-green-500 rounded-[9px] absolute top-[310px] left-[33px] w-[350px]">
                                    <Input
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        className="col-span-3"
                                        placeholder=" Confirm Password"
                                    />
                                </div>
                                <DialogFooter className="absolute top-[460px] left-[84px]">
                                    <Button
                                        type="submit"
                                        className="font-[700]` py-[22px] px-[155px] m-auto mt-[-80px] bg-green-600 text-white hover:bg-green-600 cursor-pointer"
                                    >
                                        Login
                                    </Button>
                                    <p className="absolute right-[130px] ">
                                        {" "}
                                        Or login with
                                    </p>
                                    <div className="absolute right-[50px] mt-[35px]">
                                        <p className="py-2 border-[1px] border-[#EAEAEA] px-[50px] flex items-center justify-center gap-2">
                                            <FaGoogle />
                                            Login with Google
                                        </p>
                                        <p className="border-[1px] border-[#EAEAEA]  px-[40px] py-[8px] mt-[10px] flex items-center justify-center gap-2">
                                            <FaFacebookF />
                                            Login with Facebook
                                        </p>
                                    </div>
                                </DialogFooter>
                            </TabsContent>
                        </form>
                    </Tabs>
                </div>
                <DialogFooter className="flex">
                    <Button
                        type="submit"
                        className="font-[700]` py-[22px] px-[155px] m-auto mt-[-80px] bg-green-600 text-white hover:bg-green-600 cursor-pointer"
                    >
                        Login
                    </Button>
                    <p className="absolute right-[200px] "> Or login with</p>
                    <div className="absolute right-[80px] mt-[45px]">
                        <p className="py-2 border-[1px] border-[#EAEAEA] px-[80px] flex items-center justify-center gap-2">
                            <FaGoogle />
                            Login with Google
                        </p>
                        <p className="border-[1px] border-[#EAEAEA]  px-[80px] py-[8px] mt-[10px] flex items-center justify-center gap-2">
                            <FaFacebookF />
                            Login with Facebook
                        </p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
