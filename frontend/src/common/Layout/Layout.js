import { NavBar, Footer } from "./index"


export const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}