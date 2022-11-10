import Link from "next/link"

const linkList = [
    { 
        name: "Inicio",
        url: "/aboutme"
    },
    { 
        name: "Tecnologías",
        url: "/tecnologies"
    },
    { 
        name: "Proyectos",
        url: "/proyects"
    },
    { 
        name: "Contacto",
        url: "/contact"
    },
    { 
        name: "Mi CV",
        url: "/curriculum"
    },
]
export const NavList:React.FC = () => {
  return (
    <ul className="navlist-container">
        {linkList.map(({ name, url }, index) => (
            <li key={index}>
                <Link href={ url }>
                    { name }
                </Link>
            </li>
        ))}
    </ul>
  )
}
