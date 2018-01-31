import React from 'react'
import { Field, reduxForm } from 'redux-form'
import unsavedPrompt from './unsavedChangesPrompt'
import { compose } from 'recompose'

export const NAME = 'contact'

let ContactForm = props => {
  const { handleSubmit } = props
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

const enhance = compose(
  reduxForm({form: NAME}),
  unsavedPrompt(NAME, 'Some message here!')
)

export default enhance(ContactForm)
