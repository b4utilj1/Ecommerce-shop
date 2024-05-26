import React from 'react'
import { Hero } from '../components/Hero.jsx'
import { Popular } from './Popular.jsx'
import {Offer} from '../components/Offer.jsx'
import { NewCollections } from '../components/NewCollections.jsx'
import { NewsLetter } from './NewsLetter.jsx'

export const Home = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    </>
  )
}
