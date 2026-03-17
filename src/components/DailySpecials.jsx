import '../styles/DailySpecials.css'
import { getImageUrl } from "../utils/getImageUrl.js"

function CardProduct({image, title, price, description}) {
    return (
        <div className="card-product">
            <div className="image-container">
                <img src={image} alt={title} />
            </div>
            <div className="info-product">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h3>{title}</h3>
                    <span className="price">{price}</span>
                </div>
                <p className="description-product">{description}</p>
            </div>
        </div>
    )
}

export function DailySpecials() {
    return (
        <section className="daily-specials-section" id="pastries">
            <h1>Daily Specials</h1>
            <p>Fresh from the oven. These items are available in limited <br /> quantities today.</p>
            <div className="products-container">
                <CardProduct
                    image={getImageUrl('croissant')}
                    title="Almond Croissant"
                    price="$5.50"
                    description="Twice-baked croissant filled with almond frangipane and topped with toasted almonds."
                />
                <CardProduct
                    image={getImageUrl('sourdough')}
                    title="Country Sourdough"
                    price="$9.00"
                    description="Our signature loaf. A blend of whole wheat and white flour with a thick, caramelized crust."
                />
                <CardProduct
                    image={getImageUrl('berry-tart')}
                    title="Seasonal Berry Tart"
                    price="$7.50"
                    description="Vanilla bean custard in a pate sucree shell, topped with whatever is freshest from the market."
                />
            </div>
        </section>
    )
}