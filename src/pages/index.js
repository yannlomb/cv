import React from 'react'
import Link from 'gatsby-link'
import '../css/normalize.css'
import '../css/main.css'

const IndexPage = () => (
  <div>
    <div className="cvwrapper even">
      <div className="cv">
        <div className="description">
          <div className="title">
            <h3>Personalia</h3>
            <div className="spacer" />
          </div>
          <div className="item">
            <p className="left">Naam</p>
            <p className="right">Yannick Lombart</p>
          </div>
          <div className="item">
            <p className="left">Adres</p>
            <p className="right">Pladijsstraat 24, 8540 Deerlijk</p>
          </div>
          <div className="item">
            <p className="left">Email</p>
            <p className="right">
              <a href="mailto:yannick.lombart@gmail.com">
                yannick.lombart@gmail.com
              </a>
            </p>
          </div>
          <div className="item">
            <p className="left">Telefoon</p>
            <p className="right">0493 77 77 37</p>
          </div>
          <div className="item">
            <p className="left">Geboortedatum</p>
            <p className="right">22 april 1984</p>
          </div>
          <div className="item">
            <p className="left">Rijbewijs</p>
            <p className="right">Type B</p>
          </div>
        </div>
      </div>
    </div>
    <div className="cvwrapper">
      <div className="cv">
        <div className="description">
          <div className="title">
            <h3>Opleiding</h3>
            <div className="spacer" />
          </div>
          <div className="item">
            <p className="left">2006-2010</p>
            <p className="right">Grafische en digitale Media (AHS)</p>
          </div>
          <div className="item">
            <p className="left">2004-2006</p>
            <p className="right">Topsport (Basketbal)</p>
          </div>
          <div className="item">
            <p className="left">2003-2004</p>
            <p className="right">
              Bedrijfsbeheer | Marketing (Hogeschool Gent)
            </p>
          </div>
          <div className="item">
            <p className="left">2002-2003</p>
            <p className="right">Communicatiebeheer (AHS)</p>
          </div>
          <div className="item">
            <p className="left">2001-2002</p>
            <p className="right">
              Moderne talen wiskunde (Afgestudeerd | St-Lievenscollege)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="cvwrapper even">
      <div className="cv">
        <div className="description">
          <div className="title">
            <h3>Ervaring</h3>
            <div className="spacer" />
          </div>
          <div className="item">
            <p className="left">Jan 2019 - heden</p>
            <p className="right">
              Nayan
              <span className="jobDescription">
                Salesforce Commerce Cloud Developer
              </span>
            </p>
          </div>
          <div className="item">
            <p className="left">Apr 2014 - Jan 2019</p>
            <p className="right">
              Sax Sanitair NV
              <span className="jobDescription">
                Webdesign & UX / Full Stack & Mobile Development / Project
                Management / Application Architecture
              </span>
            </p>
          </div>
          <div className="item">
            <p className="left">Nov 2013 - Apr 2014</p>
            <p className="right">
              JM Bruneau Benelux
              <span className="jobDescription">Front-end development</span>
            </p>
          </div>
          <div className="item">
            <p className="left">Jul 2011 - Okt 2013</p>
            <p className="right">
              B2Bict{' '}
              <span className="jobDescription">
                Design / Webdesign / Front-end development
              </span>
            </p>
          </div>
          <div className="item">
            <p className="left">Jul 2010 - Jul 2011</p>
            <p className="right">
              KMOSites{' '}
              <span className="jobDescription">Design / Webdesign</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="cvwrapper">
      <div className="cv">
        <div className="description">
          <div className="title">
            <h3>My skillset </h3>
            <div className="spacer" />
          </div>
          <div className="item">
            <p className="left">Hard skills</p>
            <p className="right">
              ES2015+, ReactJS, VueJS, ApolloJS, MobX, Micro Services,
              Application Architecture, UX/UI, CSS, HTML, NodeJS, GraphQL,
              RESTful API's, MySQL, RethinkDB, Linux, Git, Cypress.io, Jest,
              Storybook
            </p>
          </div>
          <div className="item">
            <p className="left">Soft Skills</p>
            <p className="right">
              Team player / Communicatief / Eerlijk / Gepassioneerd /
              Probleemoplossend denkvermogen / Georganiseerd / <br />Aanvaardbaar
              perfectionistisch
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
