import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import styled from "styled-components"

const Nav = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Header = ({ siteTitle }) => (
  <Nav position="static">
    <Toolbar>
      <Link to="/">
        <Typography>{siteTitle}</Typography>
      </Link>
    </Toolbar>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
