import type { JobCardProps } from "../../types/component.types";
import jobImage from "../../assets/logos/client logo.svg";
import { Bookmark, Calendar, Circle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = (props: JobCardProps) => {
  if (props.isGrid) {
    return (
      <Link to={`/job/${props.job.id}`}>
        <div>
          <div>
            <img src={jobImage} alt="job-image" />
            <Bookmark />
          </div>
          <div>
            <h5>{props.job.company}</h5>
            <h2>{props.job.title}</h2>
          </div>
          <div>
            <div>
              <Circle strokeWidth={3} />
              <h5>{props.job.job_type}</h5>
            </div>
            <div>
              <MapPin />
              <h5>{props.job.location}</h5>
            </div>
            <div>
              <Calendar />
              <h5>Posted: {props.job.posted_date}</h5>
            </div>
          </div>
          <div>
            <h3>Job Description</h3>
            <h5>{props.job.description}</h5>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div key={props.job.id} className="grid grid-cols-[1fr_5fr]">
      <div>
        <img src={jobImage} alt="job-image" />
      </div>
      <div>
        <div>
            <h5>{props.job.company}</h5>
            <h2>{props.job.title}</h2>
        </div>
        <div>
            <div>
              <Circle strokeWidth={3} />
              <h5>{props.job.job_type}</h5>
            </div>
            <div>
              <MapPin />
              <h5>{props.job.location}</h5>
            </div>
            <div>
              <Calendar />
              <h5>Posted: {props.job.posted_date}</h5>
            </div>
          </div>
          <div>
            <h3>Job Description</h3>
            <h5>{props.job.description}</h5>
          </div>
      </div>
    </div>
  );
};

export default JobCard;
