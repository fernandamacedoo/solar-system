import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="grid place-items-center mt-4">
        <div className="grid grid-flow-col">
            <section className="m-5">
                <a href="https://www.linkedin.com/in/fernandamacedodev/">
                    <img className="w-8 opacity-70" 
                    src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-a7sf08js.png" alt="Linkedin Icon"/>
                </a>
            </section>
            <section className="m-5">
                <a href="https://github.com/fernandamacedoo/">
                    <img className="w-8 opacity-70"
                    src="https://static-00.iconduck.com/assets.00/github-icon-512x499-ziwq0a1i.png" alt="Github Icon"/>
                </a>
            </section>
        </div>
            <h2>Fernanda Macêdo</h2>
      </footer>
    )
  }
}
