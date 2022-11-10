import React from 'react'
import { TecnologiesList } from './TecnologiesList'

export const Tecnologies:React.FC = () => {
  return (
    <section className='sections' id='tecnologies'>
        <h2 className='title'>Conocimiento</h2>
        <TecnologiesList />
    </section>
  )
}
