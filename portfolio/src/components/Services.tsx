
import TimeLineCard from '../shared_component/TimeLineCard'
import frontend from '../assets/backend.png'
import backend from '../assets/backend.jpg'
import mentor from '../assets/mentor.jpg'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='my-5'  id="services">
        <h1 style={{
          fontFamily: "Bebas Neue",
          textAlign: "center",
          fontSize: "5em",
        }}>Services</h1>
        <p className='text-center pb-4'>We offer a wide range of services to cater to your needs.</p>
        <div className="col-10 row d-flex g-3 mx-auto">
            <TimeLineCard bootstrapClass="col-sm-12 col-md-6 col-lg-4" serviceName="Web Designing" imageService={frontend} type="services" serviceDescription="Crafting modern, responsive, and aesthetic designs for websites." />
            <TimeLineCard bootstrapClass="col-sm-12 col-md-6 col-lg-4" serviceName="Backend Development" imageService={backend} type="services" serviceDescription="Building scalable, secure, and efficient backend systems that power seamless digital experiences." />
            <TimeLineCard bootstrapClass="col-sm-12 col-md-6 col-lg-4" serviceName="Mentoring" imageService={mentor} type="services" serviceDescription="Guiding aspiring developers through hands-on mentorship, fostering growth, clarity, and confidence in tech." />
        </div>
    </div>
  )
}

export default Services