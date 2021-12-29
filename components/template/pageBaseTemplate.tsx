import { NextPage } from 'next'
import TopMenu from '../organisms/topMenu'
import Footer from '../organisms/footer'

const PageBaseTemplate: NextPage = ({ children }) => {
  return (
    <>
      <header>
        <TopMenu />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageBaseTemplate
