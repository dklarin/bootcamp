import React, { useState, useEffect } from "react"

export default () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    return setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return <span>{time.toISOString()}</span>
}
