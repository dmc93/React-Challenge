import itemsData from "../itemsData.json";
import PlantCard from '../components/PlantCard';

const ShopPage = () => {
    return(
        <div className="body">
            <h1 className="shopHeader">Our Plants</h1>
            <div className="shopItems">
                {itemsData.map((item) => (
                        <PlantCard
                        name = {item.name}
                        price = {item.price}
                        imageUrl = {item.imageUrl}
                        />
                    ))}
            </div>
        </div>
    )
};

export default ShopPage;