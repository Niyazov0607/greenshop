import Card from "@/components/Cards/cards";
import Categories from "@/components/Categories/page";
import CategoryCard from "@/components/CategoryCards/page";
import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
    return (
        <div className="w-[1210px] m-auto font-[family-name:var(--font-geist-sans)] bg-white text-black">
            <Navbar />
            <Hero />
            <CategoryCard />
        </div>
    );
}
