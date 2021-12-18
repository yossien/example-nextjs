import { NextPage } from 'next'

const Container: NextPage = ({ children }) => {
  return <div className="container mx-auto px=5">{children}</div>
}

export default Container
