import React from "react"
import {Image} from "../components/image"
import { LoginCard } from "../components/Login"

import "../sass/pages/login.scss"
import {Layout} from "../components/Layout"

const login = () => {
  return (
    <Layout>
    <div className="login-container">
      <Image imageName="charity.png" />
      <LoginCard />
    </div>
    </Layout>
  )
}

login.propTypes = {}

export default login
