import Button from "react-bootstrap/esm/Button";


export default function SectionSix () {

    return (
      <div className="section-six-main" style={{backgroundImage:"url(./hesed/hero2.jpg)"}}>
        <div className="section-six">
          <div className="section-six-left">
            <h2> Donate Towards A Worthy Course</h2>
            <h3>What Your Donation Will Do</h3>
            <p>
              Any contribution will bring an impact in the lives of those
              intended. The project managers will provide regular updates on
              sponsored projects.
            </p>
            <p>
              Your donation of 1.2 USD will buy a bar of washing soap to promote
              hand washing to prevent diarrheal diseases.
            </p>
            <p>
              Your donation of 2.5 USD can buy seeds to reduce food insecurity.
            </p>
            <p>
              Your donation of 6.5 USD can buy a blankets to prevent disease.
            </p>
          </div>
          <div className="section-six-right">
            <Button style={{borderRadius:'2rem'}}>Make a Donation</Button>
          </div>
        </div>
      </div>
    );
}