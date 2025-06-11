import React from 'react'
import '../style/Timeline.css'
import TimeLineCard from '../shared_component/TimeLineCard';

type Props = {}

const Timeline = (props: Props) => {

  const educationData = [
  {
    degree: "Matriculation",
    school: "St. Mary's HS, Arakulam",
    year: "2017–18",
    description:
      "Successfully completed 10th standard under the Kerala State Board with 93.5% marks.",
  },
  {
    degree: "Intermediate",
    school: "Holy Cross HSS, Cherpunkal",
    year: "2018–20",
    description:
      "Successfully completed 12th standard under the Kerala State Board with 83.91% marks.",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Bishop Vayalil Memorial Holy Cross College, Cherpunkal",
    year: "2020–23",
    description:
      "Successfully completed Bachelor of Computer Applications (BCA) with a CGPA of 8.22.",
  },
  {
    degree: "Master of Computer Applications",
    school: "Federal Institute of Science and Technology, Angamaly",
    year: "2020–23",
    description:
      "Successfully completed Master of Computer Applications (MCA) with a CGPA of 8.18.",
  },
];

  return (
    <div className='my-5 col-10 mx-auto' id='educations'>
      <h1 style={{
          fontFamily: "Bebas Neue",
          textAlign: "center",
          fontSize: "5em",
        }}>Education</h1>
      <div className="timeline">
        {educationData.map((item, index) => (
        <div className={`timeline-container ${ index % 2 === 0 ? "left" : "right" }`} key={index}>
          <TimeLineCard degree={item.degree} institute={item.school} year={item.year} description={item.description} type="education" />
        </div>
      ))}
</div>

    </div>
  )
}

export default Timeline