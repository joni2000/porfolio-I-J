import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Link from 'next/link';

export const ContactList = () => {
    
    const contacts = [
        {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/in/ibarrola-jonathan/',
            icon: <LinkedInIcon />,
        },
        {
            title: 'Email',
            url: 'mailto: jonathandev2000@gmail.com',
            icon: <EmailOutlinedIcon />,
        },
        {
            title: 'Telefono',
            url: 'tel: +543772522756',
            icon: <LocalPhoneOutlinedIcon />,
        },
        {
            title: 'Github',
            url: 'https://github.com/joni2000',
            icon: <GitHubIcon />,
        },
    
    ]   
    
    return (
    <section className="container-contact">
            {
                contacts.map(({ title,  icon, url}) => (
                    <Link href={ url } key={title} target="_blank" className='icons-contact'>
                        { icon }
                    </Link>
                ))
            }   
          
    </section>
  )
}
