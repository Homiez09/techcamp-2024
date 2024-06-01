import React from 'react'

import MainLayout from '@/components/Layouts/MainLayout'
import Ranking from '@/components/scoreboard/ranking'
type Props = {}

export default function page({}: Props) {
  return (
    <MainLayout>
      <section className="min-h-screen bg-secondary-texture bg-center">
        <Ranking/>
      </section>
    </MainLayout>
  )
}