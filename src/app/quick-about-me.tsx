'use client'

import { Disclosure } from '@headlessui/react'
import { Card } from './components/card'

export function QuickAboutMe() {
  const title = '// About me'
  const text = `My name is Ellian Carlos, I'm a Software Engineer, math's student, graduated in Systems Information and currently pursuing  a master's degree in Computational Modeling. My name is Ellian  Carlos, I'm a Software Engineer, math's student, graduated in Systems Information and currently pursuing a master's degree in Computational Modeling.

  My name is Ellian Carlos, I'm a Software Engineer, math's student, graduated in Systems information and currently pursuing  a master's degree in Computational Modeling. My name is Ellian Carlos, I'm a Software Engineer, math's student, graduated in  Systems Information and currently pursuing a master's degree in  Computational Modeling.

  My name is Ellian Carlos, I'm a Software Engineer, math's  student, graduated in Systems information and currently pursuing  a master's degree in Computational Modeling.......`
  const buttonText = 'more...'

  return <Card title={title} paragraph={text} buttonText={buttonText}></Card>
}
