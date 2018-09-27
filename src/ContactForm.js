import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import unsavedPrompt from './unsavedChangesPrompt'
import { compose } from 'recompose'
import { connect } from 'react-redux'

export const NAME = 'contact'

let ContactForm = props => {
  const { handleSubmit } = props
  console.log(props)
  return (
    <form onSubmit={handleSubmit} className={props.dirty ? 'dirty' : ''}>
      <h2>{props.name}</h2>
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

const fieldSelector = formValueSelector(NAME)

const mapStateToProps = state => ({
  initialValues: {
    firstName: 'John',
    lastName: 'Snow'
  },
  name: fieldSelector(state, 'firstName') + ' ' + fieldSelector(state, 'lastName')
})

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({form: NAME}),
  unsavedPrompt(NAME, 'Some message here!')
)

export default enhance(ContactForm)
