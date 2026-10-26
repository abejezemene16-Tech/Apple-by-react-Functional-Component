
import '.Footer2/Footer2.css'
const Footer2 = () => {
  return (
    <div>
      <div className="paragraph-2">
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
      </div>

      <hr />

         <p style={{ paddingRight: "25px", paddingLeft: "25px", fontSize: "12px" }}>
            © 2026 Abeje Zemene. Developed strictly for educational and
            portfolio presentation purposes. Apple, iPhone, and related
            trademarks are the property of Apple Inc. This site has no
            official affiliation with Apple.
          </p>

      <div className="thelast">
       

        <div className="last-links">
          <ul className="ul-Linkss">
            <li><a href="#">Privacy Policy &nbsp; |</a></li>
            <li><a href="#">Terms of Use &nbsp; |</a></li>
            <li><a href="#">Sales and Refunds &nbsp; |</a></li>
            <li><a href="#">Legal &nbsp; |</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;