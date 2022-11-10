
export const TecnologiesList:React.FC = () => {

    const tecnologies = [
        {
            icon: "html5",
            title: "HTML",
            type: "plain colored "
        },
        {
            icon: "css3",
            title: "CSS",
            type: "plain colored "
        },
        {
            icon: "javascript",
            title: "Javascript",
            type: "plain colored"
        },
        {
            icon: "react",
            title: "React",
            type: "plain colored"
        },
        {
            icon: "nodejs",
            title: "Node",
            type: "plain colored"
        },
        {
            icon: "nextjs",
            title: "Next",
            type: "original"
        },
        {
            icon: "mysql",
            title: "MySQL",
            type: "plain colored"
        },
        {
            icon: "materialui",
            title: "Material UI",
            type: "plain colored"
        },
        {
            icon: "typescript",
            title: "Typescript",
            type: "plain colored"
        },
        {
            icon: "express",
            title: "Express",
            type: "original"
        },
        {
            icon: "bootstrap",
            title: "Bootstrap",
            type: "plain colored"
        },
        {
            icon: "sequelize",
            title: "Sequelize",
            type: "plain colored"
        },

    ]

  return (
    <section className="container-tec">
            {
                tecnologies.map(({ icon, title, type }) => (
                    <div key={icon}>
                        <i className={`devicon-${icon}-${type} icon-t`}></i>
                        <p>{title}</p>
                    </div>
                ))
            }   
          
    </section>
  )
}
