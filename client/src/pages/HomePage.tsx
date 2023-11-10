import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { PageContainer } from "../layout";
import { membersQuery } from "../lib/queries";

type Relationship =
  | "Mom"
  | "Dad"
  | "Brother"
  | "Sister"
  | "Wife"
  | "Son"
  | "Daughter";

interface FamilyMemberProps {
  relationship?: Relationship;
  name: string;
  memberId: string;
}

const FamilyMember: FC<FamilyMemberProps> = ({ name, memberId }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/member/${memberId}`);
  };
  return (
    <div className="family-member-container" onClick={handleClick}>
      {/* <div className='relationship'>{relationship}</div> */}
      <div className="name">{name}</div>
    </div>
  );
};

export const HomePage = () => {
  // useEffect(() => {
  //   membersQuery().then(console.log);
  // }, []);

  return (
    <PageContainer>
      <h2 style={{ textAlign: "center" }}>My Family</h2>
      <div className="group-container">
        <div className="group-title">Parents</div>
        <div className="members-container">
          <FamilyMember relationship="Mom" name="Shelli Auger" memberId={"1"} />
          <FamilyMember
            relationship="Dad"
            name="Carl Reichardt"
            memberId={"1"}
          />
        </div>
      </div>
      <div className="group-container">
        <div className="group-title">Siblings</div>
        <div className="members-container">
          <FamilyMember
            relationship="Brother"
            name="Josh Reichardt"
            memberId={"1"}
          />
          <FamilyMember
            relationship="Sister"
            name="Krista Fischer"
            memberId={"1"}
          />
        </div>
      </div>
      <div className="group-container">
        <div className="group-title">Spouse</div>
        <div className="members-container">
          <FamilyMember
            relationship="Wife"
            name="Chandler Reichardt"
            memberId={"2"}
          />
        </div>
      </div>
      <div className="group-container">
        <div className="group-title">Children</div>
        <div className="members-container">
          <FamilyMember
            relationship="Daughter"
            name="Holland Reichardt"
            memberId={"4"}
          />
          <FamilyMember
            relationship="Son"
            name="Clayton Reichardt"
            memberId={"3"}
          />
        </div>
      </div>
    </PageContainer>
  );
};
