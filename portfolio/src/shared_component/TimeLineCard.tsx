import React from 'react'
import Button from './Button';
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import location from '../assets/location.png'

type Props = {
    // styling props
    bootstrapClass?: string;
    style?: React.CSSProperties;

    //education props
    degree?: string;
    institute?: string;
    year?: string;
    description?: string;
    
    // services props
    serviceName?: string;
    imageService?: string;
    type?: string;
    serviceDescription?: string;
    
    //project props
    projectName?: string;
    projectDescription?: string;
    technologies?: {
        [key: string]: string[] | undefined;
    };

    formFields?: Object | undefined

    //contact props

}

const TimeLineCard = (props: Props) => {
    console.log(props.formFields)
    let content
    if(props.type === 'services'){
        content = (
            <div className='d-flex align-items-center flex-column col-12'>
                <img src={props.imageService} style={{width: "50%"}} />
                <h3>{props.serviceName}</h3>
                <p>{props.serviceDescription}   </p>
            </div>
        )
    } else if(props.type === "about") {
        content = (
            <div>
                <h2>Contact Information</h2>
                <p>Fill up the form and I will get back to you within 24 hours.</p>
                <div className="d-flex flex-column">
                    <span className='d-flex' ><img src={phone} style={{width: "10%", paddingBottom: "15px", marginRight: "10px"}} alt=""  /> <label htmlFor="">+91 6238798042</label></span>
                    <span><img src={mail} style={{width: "10%", paddingBottom: "15px", marginRight: "10px"}} alt=""  /><label>abinjos307@gmail.com</label></span>
                    <span><img src={location} style={{width: "10%", paddingBottom: "15px", marginRight: "10px"}} alt=""  /><label>Pala, Kottayam, Kerala</label></span>
                </div>
            </div>
        )
    } else if(props.type === "education") {
        content = (
            <div>
                <h2>{props.degree}</h2>
                <h4>{props.institute}</h4>
                <small>{props.year}</small>
                <p>{props.description}</p>
            </div>
        )
    } else if(props.type === "contact") {
//         {Object.entries(props.formFields).map(([sectionKey, sectionValue]) => {
//             console.log(typeof sectionValue)
//   if (sectionKey === 'inputField') {
//     return Object.entries(sectionValue).map(([inputType, inputValues]) => {
//       if (Array.isArray(inputValues)) {
//         return inputValues.map((label, index) => (
//           <div className="input-container" key={`${inputType}-${index}`}>
//             <input type={inputType} required />
//             <label>{label}</label>
//             <span className="underline"></span>
//           </div>
//         ));
//       } else if (typeof inputValues === 'object') {
//         // For nested objects like radio: { type: [...] }
//         return Object.entries(inputValues).map(([nestedType, options]) => (
//           <div className="input-container" key={`${inputType}-${nestedType}`}>
//             <label>{nestedType}</label>
//             <div>
//               {options.map((option, i) => (
//                 <label key={i} style={{ marginRight: "10px" }}>
//                   <input type="radio" name={nestedType} value={option} />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>
//         ));
//       }
//       return null;
//     });
//   } else if (sectionKey === 'textarea') {
//     return sectionValue.map((label, index) => (
//       <div className="input-container" key={`textarea-${index}`}>
//         <textarea required></textarea>
//         <label>{label}</label>
//         <span className="underline"></span>
//       </div>
//     ));
//   }
//   return null;
// })}   ------------------form fields by props---------------------

        content = (
            <div>
                <div className='p-4 d-flex flex-wrap justify-content-between'>
                    
                    <div className="input-container">
                        <input type="text" required />
                        <label>First Name</label>
                        <span className="underline"></span>
                    </div>
                    <div className="input-container">
                        <input type="text" required />
                        <label>Last Name</label>
                        <span className="underline"></span>
                    </div>
                    <div className="input-container">
                        <input type="mail" required />
                        <label>Mail</label>
                        <span className="underline"></span>
                    </div>
                    <div className="input-container">
                        <input type="phone" required />
                        <label>Phone</label>
                        <span className="underline"></span>
                    </div>
                    <p><b>What type of enquiry you need to send?</b></p>
                    <div className="d-flex flex-wrap">
                        <input type="radio" name="type" className='mx-2' />Project Inquiry
                        <input type="radio" name="type" className='mx-2' />Collaboration
                        <input type="radio" name="type" className='mx-2' />Feedback
                        <input type="radio" name="type" className='mx-2' />Mentoring
                    </div>
                    <div className="input-container">
                        <textarea style={{width: "100%"}}></textarea>
                        <label>Message</label>
                        <span className="underline"></span>
                    </div><br />    
            </div>
                    <Button value='Send Message' classname="button-54" style={{width: "100%"}} />
            </div>
        )
    } else {
        content = (
            <div className={props.bootstrapClass} style={props.style}>
                <h3>{props.projectName}</h3>
                {props.technologies &&
                    Object.entries(props.technologies).map(([key, values], idx) => values ? (
                    <p key={idx}>
                        <strong>{key}:</strong> {values.join(", ")}
                    </p>
                    ) : null)}
                <p>{props.projectDescription}</p>
            </div>
        )
    }

    return (
            <div className={`${props.bootstrapClass} timeline-content`} style={props.style}>
                {content}
            </div>
    )
}

export default TimeLineCard