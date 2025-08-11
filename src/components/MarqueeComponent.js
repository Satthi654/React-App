import '../componentscss/MarqueeComponent.css';
const MarqueeComponent = () => {
    return (
        <div className="marquee-container">
            <marquee
              behavior="alternate"
              onMouseOver={e => e.target.stop()}
              onMouseOut={e => e.target.start()}
            >
              {/* Simple Secure Software Solutions */}
              Welcome to Sathish Software Solutions – Delivering Trust, Technology, and Transformation | Contact Us Now for Smart IT Solutions!

            </marquee>
        </div>
    );
};
  
export default MarqueeComponent;