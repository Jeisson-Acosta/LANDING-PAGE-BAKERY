import { HeaderApp } from "./components/HeaderApp.jsx"

import { ClockIcon, SeedlingIcon, HeartIcon, FlameIcon } from "./components/Icons.jsx"
import { getImageUrl } from "./utils/getImageUrl.js"

import './App.css'
function App() {

  return (
    <>
      <HeaderApp />
      <main className="main-app">
        <section className="welcome-section">
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
        <section className="about-section">
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

            <div className="item-description" style={{backgroundColor: '#fdfaf0'}}>
              <div className="icon-container seedling">
                <SeedlingIcon />
              </div>
              <h3>Organic Sourcing</h3>
              <p>We work directly with local farmers to source heritage grains.</p>
            </div>

            <div className="item-description" style={{backgroundColor: '#f5f7ef'}}>
              <div className="icon-container clock">
                <ClockIcon />
              </div>
              <h3>Slow Fermentation</h3>
              <p>Allowing dough to rest for 48 hours for complex flavors.</p>
            </div>

            <div className="item-description" style={{backgroundColor: '#f5f7ef'}}>
              <div className="icon-container heart">
                <HeartIcon />
              </div>
              <h3>Handcrafted</h3>
              <p>Every single loaf is shaped by hand by our passionate team.</p>
            </div>

            <div className="item-description" style={{backgroundColor: '#fdfbf7'}}>
              <div className="icon-container flame">
                <FlameIcon />
              </div>
              <h3>Stone Baked</h3>
              <p>Baked on hot stones for that perfect crispy crust.</p>
            </div>


          </div>
        </section>      
      </main>
    </>
  )
}

export default App
