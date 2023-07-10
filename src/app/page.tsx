"use client"

import { Inter } from 'next/font/google'
import {signIn,signOut, useSession} from 'next-auth/react'
import TripSearch from "./components/TripSearch"

export default function Home() {
  return (<div>
    <TripSearch />
  </div>
  )
}
