import React from 'react'
import PropTypes from 'prop-types'

function ContactCard(props) {
  return (
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
        <h4>Kay Garland</h4>
        <p className="text-muted">Lead Designer</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

ContactCard.propTypes = {

}

export default ContactCard

