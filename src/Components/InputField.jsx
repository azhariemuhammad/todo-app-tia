import React, { Component } from 'react'
import { 
  Input,
  Field,
  Button,
  Control
} from 'reactbulma'

class InputField extends Component {
  constructor () {
    super ()

  }

  render () {
    return (
      <Field hasAddons>
        <Control>
          <Input type="text" placeholder="What needs to be done ?" />
        </Control>
        <Control>
          <Button>
            Add
          </Button>
        </Control>
      </Field>
    )
  }
}

export default InputField