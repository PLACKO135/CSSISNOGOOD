import { Link } from "react-router-dom"
import { ROUTES } from "../App"
import styles from "./navbar.module.css"
import { useState } from "react"


const Navbar = () => {
    const [ismobile,setmobile]= useState(window.innerWidth<800)
    
    window.addEventListener("resize",()=>{
        setmobile(window.innerWidth<800)
    })
    
    return (
        <>
    {ismobile? <MobileNavbar/>:<DesktopNavbar/>}
    </>
  )
}

const DesktopNavbar = () => {
    return (
      <nav className={styles.desktop}>
          <div>
          <Link to={ROUTES.homepage.path}><strong>00</strong>{ROUTES.homepage.title}</Link>
          <Link to={ROUTES.crew.path}><strong>01</strong>{ROUTES.crew.title}</Link>
          <Link to={ROUTES.destination.path}><strong>02</strong>{ROUTES.destination.title}</Link>
          <Link to={ROUTES.technology.path}><strong>03</strong>{ROUTES.technology.title}</Link>
          </div>
      </nav>
    )
  }
  const MobileNavbar = () => {
    return (
        <nav className={styles.mobile}>
        <div className={styles.hambi}>
            <div className={styles.links}>
            <Link to={ROUTES.homepage.path}><strong>00</strong>{ROUTES.homepage.title}</Link>
            <Link to={ROUTES.crew.path}><strong>01</strong>{ROUTES.crew.title}</Link>
            <Link to={ROUTES.destination.path}><strong>02</strong>{ROUTES.destination.title}</Link>
            <Link to={ROUTES.technology.path}><strong>03</strong>{ROUTES.technology.title}</Link>
            </div>
        </div>
    </nav>
    )
  }


export default Navbar