import { NextIntlClientProvider } from 'next-intl'
import React from 'react';




export const wrapComponent = (component,locale='en')=>{
 
    return  ( <NextIntlClientProvider messages="{getMessages(locale)}" locale={locale}>
      {component}
      </NextIntlClientProvider>)
   

}
