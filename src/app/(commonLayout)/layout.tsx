import Footer from "@/shared/Footer"
import Navbar from "@/shared/Navbar"

 

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>  
      {children}
      <Footer/>
    </div>
  )
}

export default CommonLayout
