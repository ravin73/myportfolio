import Link from 'next/link'
import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa'

const socials=[
    {icon:<FaGithub/>,path:"https://github.com/ravin73"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/ravin-yadav-188a201a8/"},
    {icon:<FaTwitter/>,path:"https://x.com/Ravin_72"}
]
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })
      }
    </div>
  )
}

export default Social
