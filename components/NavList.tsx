import Link from "next/link"

const linkList = [
    { 
        name: "Inicio",
        url: "/"
    },
    { 
        name: "Conocimento",
        url: "#tecnologies"
    },
    { 
        name: "Proyectos",
        url: "#proyects"
    },
    { 
        name: "Mi CV",
        url: "#mi-cv"
    },
    { 
        name: "Contacto",
        url: "#contact"
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
