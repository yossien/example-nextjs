import { Fragment } from 'react'

export const nl2br = (text: string) => {
  const ts = text.split('\n')
  return ts.map((t, index) => {
    return (
      <Fragment key={index}>
        {t}
        {index < ts.length - 1 && <br />}
      </Fragment>
    )
  })
}
