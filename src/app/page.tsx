"use client"

import { Inter } from 'next/font/google'
import {signIn,signOut, useSession} from 'next-auth/react'
import TripSearch from "./components/TripSearch"
import QuickSearch from './components/QuickSearch'
import RecommendedTrips from './components/RecommendedTrips'

export default function Home() {
  return (<div>
    <TripSearch />
    <QuickSearch/>
    <RecommendedTrips/>
  </div>
  )
}
