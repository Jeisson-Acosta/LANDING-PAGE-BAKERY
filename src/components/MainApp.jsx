import '../styles/MainApp.css'
import { ClockIcon, SeedlingIcon, HeartIcon, FlameIcon } from "./Icons.jsx"
import { getImageUrl } from "../utils/getImageUrl.js"

function CardAbout({icon, title, description, additionClassName, bgColor}) {
    return (
        <div className="item-description" style={{backgroundColor: bgColor}}>
            <div className={`icon-container ${additionClassName}`}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export function MainApp() {
    return (
        <main className="main-app">
            <section className="welcome-section" id='our-bread'>
                <div className="content-left">
                    <div className="widget-daily">
                        <ClockIcon />
                        <p>Fresh batches daily at 7:00 AM</p>
                    </div>
                    <h1 className="title-section">
                        <span style={{ color: "#3d2b1f" }}>Artisanal <br />
                        Sourdough</span> <br />
                        <span style={{ color: "#e99b63" }}>Baked with soul.</span>
                    </h1>
                    <p className="description">
                        Handcrafted daily using organic, locally sourced ingredients. Experience the taste of slow fermentation and traditional techniques in every bite.
                    </p>
                </div>
                <div className="content-right">
                    <div className="first-image">
                        <img src={getImageUrl('principal-bread')} alt="principal-bread" />
                    </div>
                    <div className="second-image">
                        <img src={getImageUrl('second-image')} alt="second-image" />
                    </div>
                </div>
            </section>
            <section className="about-section" id='our-philosophy'>
                <div className="content-left-about">
                    <h5 style={{color: '#e99b63'}}>OUR PHILOSOPHY</h5>
                    <h2 style={{color: '#3d2b1f', fontSize: '2rem', lineHeight: '1', marginBottom: '1rem'}}>
                        Simple ingredients, <br />
                        extraordinary flavor.
                    </h2>
                    <p>
                        Founded in 2024,, Crumb & Crust began with a simple belief: that bread should be honest. We stripped awaiy the additives and preservatives to return to the basics-flour, water, salt and time.
                    </p>
                    <p>
                        Our asymmetrical approach to baking combines rigorous French techniques with a modern Californian spirit. We don´t just bake bread; we cultivate culture, one loaf at a time.
                    </p>
                    <div className="info-numbers">
                        <div className="item">
                            <h2>48h</h2>
                            <p>Fermentation</p>
                        </div>
                        <div className="item">
                            <h2>100%</h2>
                            <p>Organic</p>
                        </div>
                        <div className="item">
                            <h2>0</h2>
                            <p>Additives</p>
                        </div>
                    </div>
                </div>
                <div className="content-right-about">
                    <CardAbout
                        icon={<SeedlingIcon />}
                        title="Organic Sourcing"
                        description="We work directly with local farmers to source heritage grains."
                        additionClassName="seedling"
                        bgColor="#fdfaf0"
                    />
                    <CardAbout
                        icon={<ClockIcon />}
                        title="Slow Fermentation"
                        description="Allowing dough to rest for 48 hours for complex flavors."
                        additionClassName="clock"
                        bgColor="#f5f7ef"
                    />
                    <CardAbout
                        icon={<HeartIcon />}
                        title="Handcrafted"
                        description="Every single loaf is shaped by hand by our passionate team."
                        additionClassName="heart"
                        bgColor="#f5f7ef"
                    />
                    <CardAbout
                        icon={<FlameIcon />}
                        title="Stone Baked"
                        description="Baked on hot stones for that perfect crispy crust."
                        additionClassName="flame"
                        bgColor="#fdfbf7"
                    />

                </div>
            </section>      
        </main>

    )
}