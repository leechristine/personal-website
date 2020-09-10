import React from 'react';

import RoundButton from 'components/Button/RoundButton';
import './Profile.scss';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sampleResume from 'assets/docs/sample_resume.pdf';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-name">Christine Lee</div>
        <div className="profile-title">Computer Science Student</div>
        <div className="profile-links-container">
          <a className="profile-link" href="https://github.com/leechristine" target="_blank">
            <RoundButton color="accent" style="outlined" hover="glow"
              text={ <FontAwesomeIcon icon={ faGithub } /> }
            />
          </a>
          <a className="profile-link" href={ sampleResume } target="_blank">
            <RoundButton color="accent" style="outlined" hover="glow"
              text={ <FontAwesomeIcon icon={ faFile } /> }
            />
          </a>
          <a className="profile-link" href="https://www.linkedin.com/in/lee-christine/" target="_blank">
            <RoundButton color="accent" style="outlined" hover="glow"
              text={ <FontAwesomeIcon icon={ faLinkedinIn } /> }
            />
          </a>
          <a className="profile-link" href="mailto:chrstn.lee@mail.utoronto.ca">
            <RoundButton color="accent" style="outlined" hover="glow"
              text={ <FontAwesomeIcon icon={ faEnvelope } /> }
            />
          </a>
        </div>
      </div>
    );
  }
}
export default Profile;