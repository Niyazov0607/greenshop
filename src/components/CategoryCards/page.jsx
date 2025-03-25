import Card from "../Cards/cards";
import Categories from "../Categories/page";

export default function CategoryCard() {
    return (
        <div className="flex gap-[50px]">
            <Categories />
            <Card />
        </div>
    );
}
