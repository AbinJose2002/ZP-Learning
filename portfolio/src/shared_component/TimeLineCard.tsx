import React from 'react'

type Props = {
    degree?: string;
    institute?: string;
    year?: string;
    description?: string;
    bootstrapClass?: string;
    serviceName?: string;
    imageService?: string;
    type?: string;
    serviceDescription?: string;
    style?: React.CSSProperties;
    projectName?: string;
    projectDescription?: string;
    technologies?: {
        [key: string]: string[];
    };
}

const TimeLineCard = (props: Props) => {
    let content
    if(props.type === 'services'){
        content = (
            <div className='d-flex align-items-center flex-column col-12'>
                <img src={props.imageService} style={{width: "50%"}} />
                <h3>{props.serviceName}</h3>
                <p>{props.serviceDescription}   </p>
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
    } else {
        content = (
            <div className={props.bootstrapClass} style={props.style}>
      <h3>{props.projectName}</h3>
      {props.technologies &&
        Object.entries(props.technologies).map(([key, values], idx) => (
          <p key={idx}>
            <strong>{key}:</strong> {values.join(", ")}
          </p>
        ))}
      <p>{props.projectDescription}</p>
    </div>
        )
    }

    return (
            <div className={`${props.bootstrapClass} timeline-content`} >
                {content}
            </div>
    )
}

export default TimeLineCard