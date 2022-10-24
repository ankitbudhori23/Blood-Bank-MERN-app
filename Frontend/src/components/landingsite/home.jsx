import "./home.css";
import Carousel from "react-bootstrap/Carousel";
const heading = {
  color: "red"
};
function Home() {
  return (
    <div>
      <div className="Marquee">
        <marquee>
          <a href="/contact" className="div-9">
            + EMERGENCY (In case of no Blood is Available in Blood Banks)
          </a>
        </marquee>
      </div>
      <br />
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://indiancc.mygov.in/wp-content/uploads/2021/08/mygov-9999999992095197695.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://cdn.quotesgram.com/img/20/58/674564043-blood_what_is.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://www.gyanipandit.com/wp-content/uploads/2015/05/Blood-Donation-Status-in-Hindi.gif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <h1 className="div-2"> Blood Bank Mini Project</h1>
      <h2 style={heading}>Universal Donors and Recipients</h2>
      <p>
        The most common blood type is O, followed by type A. Type O individuals
        are often called "universal donors" since their blood can be transfused
        into personswithany blood type. Those with type AB blood are called
        "universal recipients" because they can receivebloodofany type. However,
        since approximately twice as many people in the general population have
        O and A blood types, abloodbank's need for this type of blood increases
        exponentially.
      </p>
      <h3 style={heading}>
        DO donate blood, only if you satisfy all of the following conditions
      </h3>
      <p>
        You are between age group of 18-60 years. Your weight is 45 kgs or more.
        Your hemoglobin is 12.5 gm% minimum. Your last blood donation was 3 or
        more months earlier. You are healthy and have not suffered from malaria,
        typhoid or other transmissibledisease in the recent past.
      </p>
      <h4 style={heading}>
        DO NOT donate blood, if you have any of the following conditions
      </h4>
      <p>
        Cold / fever in the past 1 week. Under treatment with antibiotics or any
        other medication. Cardiac problems, hypertension, epilepsy, diabetes (on
        insulin therapy), history ofcancer, chronic kidney or liver disease,
        bleeding tendencies, venereal disease etc. Major surgery in the last 6
        months. Vaccination in the last 24 hours. Had a miscarriage in the last
        6 months or have been pregnant / lactating in thelastoneyear. Had
        fainting attacks during last donation. Have regularly received treatment
        with blood products. Shared a needle to inject drugs/ have history of
        drug addiction. Had sexual relations with different partners or with a
        high risk individual. Been tested positive for antibodies to HIV.
      </p>
      <h5 style={heading}>Blood Bank</h5>
      A blood bank is a place designed especially for the storage of blood and
      blood products. Large coolersholdthese products at a constant temperature
      and they are available at a moment's notice.
      <br />
      <br />
      <h6 style={heading}>About Blood Donation</h6>
      Donating blood is a life saving measure especially when you have a rare
      blood type. Blood donation issafeand simple. It takes only about 10
      minutes to donate blood - less than the time of an average
      telephonecall.We can save upto 3 to 4 precious lives by donating blood.
      <br />
      <br />
      <h7 style={heading}>World Blood Donor Day</h7>
      <br />
      The day is celebrated to raise awareness globally about the need for
      regular and voluntary blooddonation.
      <br />
      After donating blood, the body works to replenish the blood loss. This
      stimulates the production of new blood cells and in turn, helps in
      maintaining good health.
      <div className="">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://www.happylife.guru/wp-content/uploads/2021/06/world-blood-donor-day-quotes-in-english-1024x682.jpg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h1 style={heading}>Blood Compatibility</h1>
                <img
                  src="https://www.hema-quebec.qc.ca/userfiles/image/photos/sang/anglais/Compatibilite-ang.jpg"
                  className="div-7"
                  alt="Phone image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
