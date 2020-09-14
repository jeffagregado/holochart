import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const NavTransition = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  transition: 500ms;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBarTransparent: {
    backgroundColor: "rgba(116, 207, 226, 0.5)",
  },
  appBarSolid: {
    backgroundColor: "rgba(116, 207, 226)",
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
            <Typography variant="h6">{props.siteTitle}</Typography>
          </Link>
        </Toolbar>
      </NavTransition>
    </div>
  )
}

export default HeaderTransition
