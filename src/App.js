import React from 'react'
import { FormProvider } from 'react-advanced-form'
import rules from './validation-rules'
import messages from './validation-messages'
import SyncValidation from './SyncValidation'

const App = () => (
  <FormProvider rules={rules} messages={messages}>
    <SyncValidation />
  </FormProvider>
)

export default App