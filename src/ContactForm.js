import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

export const NAME = 'contact'

let ContactForm = props => {
  const { handleSubmit } = props
  console.log(props)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <Field name='firstName' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <Field name='lastName' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='text' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

ContactForm = withRouter(ContactForm)

ContactForm = reduxForm({
  form: NAME
})(ContactForm)

export default ContactForm
