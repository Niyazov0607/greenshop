import axios from "axios";
import React from "react";
const token = "64bebc1e2c6d3f056a8c85b7";

const Categories = async () => {
    const res = await axios.get(
        `${process.env.NEXT_API_URL}/flower/category?access_token=${token}`
    );
    const data = await res.data.data;
    console.log(data);
    return (
        <div className="w-[310px]">
            <h1 className="text-[#3D3D3D] font-[700]">Categories</h1>
            {data?.map(({ title, count }, index) => {
                return (
                    <div
                        key={index}
                        className="flex justify-between py-[12px]  hover:text-green-500"
                    >
                        <h2>{title}</h2>
                        <p className="text-[#000000] text-[18px]">({count})</p>
                    </div>
                );
            })}
            <input type="range" min="0" max="100" className="w-full mt-4" />
        </div>
    );
};

export default Categories;
