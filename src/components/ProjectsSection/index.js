import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import weatherLogo from '../../assets/images/projects/weather.jpg'
import scentualsLogo from '../../assets/images/projects/scentuals.png'
import notesLogo from '../../assets/images/projects/notes.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={weatherLogo}
            colour="#FFFFFF"
            title="Weather App"
            link="/"
            timeperiod="2018"
            subtitle="A simple app webapp that tells you the weather at your location plus supplies random qoutes using restful Apis."
          />
          <ExperienceUnit
            logo={notesLogo}
            colour="#20DC6B"
            title="Note Taker"
            link="https://dazzling-redwood-18867.herokuapp.com/"
            timeperiod="2018"
            subtitle="A simple note taking application that saves notes to FireBase DB. Built using react."
          />
          <ExperienceUnit
            logo={scentualsLogo}
            colour="#312F31"
            title="E-commerce Site"
            link="https://www.scentuals.com"
            timeperiod="2016-2017"
            subtitle="A full featured E-commerce site that has handled over $100,000 in sales. Built on the Magento platform, customized using php, JS, HTML, CSS"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
