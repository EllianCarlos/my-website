'use client'

import { Disclosure } from '@headlessui/react'

export interface CardOptions {
  title: string
  paragraph: string
  buttonText?: string
  buttonAction?: any
}

export function Card(options: CardOptions) {
  const hasButton =
    options.buttonText &&
    options.buttonText != '' &&
    options.buttonText != undefined &&
    options.buttonText != null

  const button = hasButton ? (
    <div className="mt-8 ml-auto">
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent btn-primary px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none"
        onClick={options.buttonAction}
      >
        {options.buttonText}
      </button>
    </div>
  ) : (
    <></>
  )
  return (
    <Disclosure
      as="div"
      className="bg-secondary flex flex-col items-left justify-between max-w-xl p-6  rounded-xl box-border"
    >
      <h1 className="text-left text-2xl">{options.title}</h1>
      <div className="h-10"></div>
      <p
        dangerouslySetInnerHTML={{
          __html: options.paragraph.replaceAll('\n\n', '\n<br /><br />'),
        }}
      ></p>
      {button}
    </Disclosure>
  )
}
