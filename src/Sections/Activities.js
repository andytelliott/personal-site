import React from "react";
import Activity from '../components/Activity';

const Activities = () => {
  const myActivities = [
    {
      title: "The Impact Movement",
      description:
        "A passion on mine is to reach the Black community on campus. The Impact Movement is about engaging with Black students and leading them into a realtionship with Jesus Christ ",
      image: "Impact.png",
    },
    {
      title: "Chi Alpha Ministries",
      description:
        "Join Chi Alpha! It is a great way to find life-long friends and know more about Jesus! I have been apart of Chi Alpha for 3 years.",
      image: "ChiAlpha.png",
    },
  ];

  return (
    <section id="FaithActivities">
      <div className="containerX">
        <div className="row">
          <h2 className="col-xs-12 sectionTitle">Faith and Activities</h2>
        </div>
      </div>
      <ul className="containerX">
        {myActivities.map((myActivity) => (
          <Activity
            key={myActivity.title}
            image={myActivity.image}
            title={myActivity.title}
            description={myActivity.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default Activities;
