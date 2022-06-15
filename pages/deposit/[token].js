import React from 'react'
import { useRouter } from 'next/router'

export default function token() {
  const router = useRouter()
  
  return (
    <div>{router.query.token}</div>
  )
}
