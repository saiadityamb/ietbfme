import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="BFME IET NITK"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      {/* <h3>Interested in Sponsoring </h3> */}
      {/* <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{' '} */}
    </div>
  );
}

export { SponsorsHead, Sponsor, SponsorUS };

