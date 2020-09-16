import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import HoloLogo from "../images/logo.webp"

const NavTransition = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  transition: 500ms;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBarTransparent: {
    backgroundColor: "rgba(0, 110, 132, 0)",
    boxShadow: "none",
  },
  appBarSolid: {
    backgroundColor: "rgb(0, 110, 132)",
  },
}))

function HeaderTransition(props) {
  const classes = useStyles()
  const [navBackground, setNavBackground] = useState("appBarTransparent")
  const [position, setPosition] = useState("static")

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 210
      if (show) {
        setNavBackground("appBarSolid")
        setPosition("fixed")
      } else {
        setNavBackground("appBarTransparent")
        setPosition("static")
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={classes.root}>
      <NavTransition position={position} className={classes[navRef.current]}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <img src={HoloLogo} alt="Hololive" style={{ width: "13rem" }} />
          </Link>
        </Toolbar>
      </NavTransition>
    </div>
  )
}

export default HeaderTransition
