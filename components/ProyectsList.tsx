import Image from 'next/image'
import React from 'react'

type Props = {}


export const ProyectsList = (props: Props) => {

    const proyects = [
        {
            title: "Proyecto 1",
            github: "",
            Tecnologies: ["React", "TypeScript", "Sass"],
            linkDeploy: "",
            image: "img"      
        },
        {
            title: "Proyecto 1",
            github: "",
            Tecnologies: ["React", "TypeScript", "Sass"],
            linkDeploy: "",
            image: "img"      
        }
    ]

    return (
        <>
            {
                    proyects.map(proyect => (
                        <article className='proyect' key={proyect.title}>
                            <h3>{proyect.title}</h3>
                            <Image src={`/img/${proyect.image}.jpg`} alt={proyect.title} width={300} height={200} />
                        </article>
                    ))
            }
        </>
  )
}