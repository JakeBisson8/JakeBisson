import React from "react"
import { Helmet } from "react-helmet"

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>404 | Jake Bisson</title>
      </Helmet>
      <h1>Uh Oh...</h1>
      <p> It seems I could not find the page you were looking for </p>
    </div>
  )
}
