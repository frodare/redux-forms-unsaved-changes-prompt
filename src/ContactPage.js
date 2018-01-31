import React from 'react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'

export default class ContactPage extends React.Component {
  submit (values) {
    console.log(values)
  }

  render () {
    return <div>
      <ContactForm onSubmit={this.submit} />
      <Link to='/test'>Test Link</Link>
    </div>
  }
}
