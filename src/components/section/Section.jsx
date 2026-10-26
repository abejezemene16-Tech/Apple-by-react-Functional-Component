// import React from 'react'
import './Section.css'
import macLaptop from '../../assets/images-used/home/mac-laptop.jpg'
import appleLogo from '../../assets/images-used/icons/logo.png'


import apple_card_logo from '../../assets/images-used/icons/apple-card-logo.png'
import Logo from '../../assets/images-used/icons/logo.png'




const Section = () => {
  return (
    <>
    <div>


      <section className="all-part-section">
      {/* <!-- This is First Section --> */}

      <section className="first-section">
        <div className="internal-1">
          <div className="text">
            <h5 className="model" style={{ color: 'red' }}>
              The Latest Model
            </h5>
            <h1 className="product-title">MacBook Pro</h1>
            <h4 className="brief-description">The best for the brightest</h4>
          </div>

          <div className="links-wrapper">
            <a href="#">Learn more Here</a>
          </div>

          <div className="mac-laptop">
            <img
              src={macLaptop}
              alt=" The first mac-laptop"
            />
          </div>
        </div>
      </section>

      {/* <!-- This is Second Section --> */}

      <section className="second-section">
        <div className="back-background">
          <h1 className="Pro11" style={{ color: 'white' }}>
            iPhone 11 Pro
          </h1>
          <h4 className="pro">Pro Cameras Pro display Pro performance</h4>
        </div>

        <div className="back">
          <a href="#">Learn more&gt;  Buy &gt; </a>
        </div>
      </section>

      {/* <!-- This is Third Section  --> */}

      <section className="third-section">
        <div className="third">
          <h1>iPhone 11</h1>
          <h5>Just the right amount of everything</h5>
        </div>

        <div className="buy">
          <a href="#"> Learn more&gt;  Buy&gt; </a>
        </div>
      </section>

      {/* <!-- This is Fourth Section --> */}

      <section className="appleWatch-card">
        {/* <!-- Three Apple's  Watch --> */}

        <section className="two-1">
          <div className="watch3">
            <div className="icon">
              <img
                src={appleLogo}
                alt=" apple icon"
              />
              <h2>WATCH</h2>
            </div>

            <div className="watch">
              <p>With the new Always Retina display</p>

              <p>You've never seen a watch like this.</p>
            </div>

            <div className="Watchs">
              <a href="#"> Learn more&gt; Buy &gt;</a>
            </div>
          </div>
        </section>

        {/* <!-- Single Phone --> */}

        <section className="applecards">
          <div className="phone">
            <div className="card">
              <img
                src={apple_card_logo}
                alt=" Apple's card"
              />
            </div>

            <p>Cash 3% Daily Cash on Purchaces From</p>
            <p>Apple Using Apple Card</p>

            <div className="carda">
              <a href="#"> Learn more&gt;  Buy&gt; </a>
            </div>
          </div>
        </section>
      </section>

      {/* <!-- Fivth section --> */}

      <section className="child-pod">
        {/* <!-- የግራ ጎን ካርድ: አፕል ቲቪ (ህጻኗ) --> */}

        <div className="child">
          <div className="tv">
            <img
              src={Logo}
              alt="apple tv+"
            />
            <h3>tv+</h3>
          </div>

          <div className="TEXT">
            <h5>FROM APPLE NIGHT SELAM</h5>
            <h2>SERVANT</h2>
          </div>
        </div>

        {/* <!-- የቀኝ ጎን ካርድ: ኤርፖድስ ፕሮ (AirPods Pro) --> */}

        <div className="pod">
          <div className="texts">
            <h1>AirPads Pro</h1>
            <h5>Magic her You've never heard</h5>
          </div>

          <div className="Linkss">
            <a href="#">Learn More&gt;  Buy&gt; </a>
          </div>
        </div>
      </section>

      {/* <!-- Six section --> */}

      <section className="Mac-Pad">
        {/* <!-- የግራ ጎን ካርድ: mac-book --> */}

        <div className="mac-book">
          <div className="texting">
            <h1>MacBook Pro</h1>
            <h4>The best for the brightest</h4>
          </div>

          <div className="Link-more">
            <a href="#">Learn more &gt;  Buy&gt; </a>
          </div>
        </div>

        {/* <!-- የቀኝ ጎን ካርድ: ኤርፖድስ (AirPads) --> */}

        <div className="ipad">
          <div className="TEXTING">
            <h1>iPad</h1>
            <h4>Life of Computer, Unlike any Computer,</h4>
          </div>

          <div className="pad-link">
            <a href="#">Learn more &gt;  Buy&gt; </a>
          </div>
        </div>
      </section>





     <div class="paragraph-1">
      <p>
        1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. <a href="#">Full terms apply.</a> 
      </p>
    </div>


    </section>



    </div>
    </>
  )
}

export default Section
