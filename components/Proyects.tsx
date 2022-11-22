import React from 'react'
import { ProyectsList } from './ProyectsList'

type Props = {}

export const Proyects = (props: Props) => {
  return (
    <section className='sections container-projects' id='proyects'>
        <h2 className='title'>Proyectos</h2>

        <ProyectsList />
    </section>
  )
}