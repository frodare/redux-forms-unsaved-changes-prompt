import React from 'react'
import ContactForm from './ContactForm'

export default class ContactPage extends React.Component {
  submit (values) {
    console.log(values)
  }

  render () {
    return <ContactForm onSubmit={this.submit} />
  }
}
