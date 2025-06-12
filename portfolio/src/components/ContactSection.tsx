import TimeLineCard from "../shared_component/TimeLineCard"
import '../style/Contact.css'

type formData = {
    inputField: {
        [key: string]: string[] | { [key: string]: string[] } | undefined;
    },
    textarea: string[]
}

const ContactSection = () => { 

    const formFields:formData = {
         inputField: {
            text: ["First Name", "Last Name"],
            email: ["Email Address"],
            phone: ["Mobile Number"],
            radio: {
                type: ["Project Inquiry", "Collaboration", "Feedback", "Mentoring"]
            }
         },
         textarea: ["Message"]
    }

  return (
    <div className="pb-5">
        <h1
        style={{
          fontFamily: "Bebas Neue",
          textAlign: "center",
          fontSize: "5em"
        }}
      >
        Contact Me
      </h1>

        <div className="col-10 mx-auto row d-flex justify-content-between">
            <div className="col-md-7 col-sm-12">
                <TimeLineCard type="contact" style={{border: "2px solid black"}} formFields={formFields} />
            </div>
            <div className="col-md-4 col-sm-12">
                <TimeLineCard type="about" degree="dgff" style={{border: "2px solid black"}} />
            </div>
        </div>

    </div>
  )
}

export default ContactSection