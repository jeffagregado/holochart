import { useState } from "react"

const [user, setUser] = useState(null)

export const isBrowser = () => typeof window !== "undefined"
