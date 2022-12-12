import styled from "styled-components";
import BadgeComponent from "./BadgeComponent/BadgeComponent";

const BadgeContainer = styled.section`
  height: 100%;
  width: auto;

  padding-right: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 25px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr ;
  }
`;

const BadgeSection = () => {
  return (
    <BadgeContainer>
      <BadgeComponent
        badgeName={"Sales Superstar"}
        badgeSrc={"assets/badge-bg/badge-1.svg"}
        badgeAlt={"red badge icon"}
        iconSrc={"assets/badge-icons/podium.svg"}
        iconAlt={"podium"}
        value={true}
      />
      <BadgeComponent
        badgeName={"Customer Champion"}
        badgeSrc={"assets/badge-bg/badge-2.svg"}
        badgeAlt={"yellow badge icon"}
        iconSrc={"assets/badge-icons/target.svg"}
        iconAlt={"target"}
        value={false}
      />
      <BadgeComponent
        badgeName={"Creative Thinker"}
        badgeSrc={"assets/badge-bg/badge-3.svg"}
        badgeAlt={"blue badge icon"}
        iconSrc={"assets/badge-icons/flag.svg"}
        iconAlt={"flag"}
        value={false}
      />
      <BadgeComponent
        badgeName={"Content Crafter"}
        badgeSrc={"assets/badge-bg/badge-4.svg"}
        badgeAlt={"light blue badge icon"}
        iconSrc={"assets/badge-icons/medal-1.svg"}
        iconAlt={"medal"}
        value={false}
      />
      <BadgeComponent
        badgeName={"Tech Trailblazer"}
        badgeSrc={"assets/badge-bg/badge-5.svg"}
        badgeAlt={"green badge icon"}
        iconSrc={"assets/badge-icons/medal-2.svg"}
        iconAlt={"medal"}
        value={false}
      />
    </BadgeContainer>
  );
};

export default BadgeSection;
