import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import torontoLogo from '../../assets/images/experience/toronto.jpg'
import scentualsLogo from '../../assets/images/experience/scentuals.jpg'
import burnabyLogo from '../../assets/images/experience/burnaby.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={torontoLogo}
            colour='#FFFFFF'
            title='Toronto Water'
            link='https://www.toronto.ca/services-payments/water-environment/'
            timeperiod='January 2018 - May 2018'
            subtitle='Worked in Capital Works Delivery, helping to manage multi-million dollar projects on Water treatment or delivery infrastructure.'
          />
          <ExperienceUnit
            logo={scentualsLogo}
            colour='#FFFFFF'
            title='Scentuals'
            link='https://www.scentuals.com/'
            timeperiod='June 2016- September 2017'
            subtitle='Developed E-commerce websites as well as work on production line optimizing efficiency and commissioning automated machinery '
          />
          <ExperienceUnit
            logo={burnabyLogo}
            colour='#403949'
            title='City of Burnaby'
            link='https://www.burnaby.ca/'
            timeperiod='July 2016 - July 2017'
            subtitle='Taught children and adults of all ages how to skate using leadership skills. Developed teaching plans and marking schemes.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
