import { MountReturn, mount } from 'cypress/react18';
import  React from 'react'
import { createTheme } from '@mui/material/styles';
import {CustomThemeProvider} from "../../src/app/theme"


import './commands';

// add component testing only related command here, such as mount
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {

    interface Chainable<Subject> {
      mount(
        component: React.ReactNode
       
      ): Cypress.Chainable<MountReturn>
    }
  }
}




Cypress.Commands.add('mount', (component) => {
  const theme = createTheme();

  const wrapped = <CustomThemeProvider> {component}</ CustomThemeProvider>
    return mount(wrapped)

  
 })






