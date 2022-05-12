import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiReact } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "anthropologie.com clone",
    img: "/antrhopologie.png",
    link: "https://anthropologie-clone.vercel.app/",
    git: "https://github.com/Aniketkushwaha80/anthropologie-clone.git",
    about:
      "This is e-commerce website used for womens clothing, beauty products and home furniture and decore. This was a team project where I with my teammates had created. ",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Revv.co.in clone",
    img: "/Revv.png",
    link: "https://revv-io.vercel.app/",
    git: "https://github.com/KetanMangidkar/Revv.io.git",
    about:
      "This is e-commerce website used for getting cars on rent. This was a team project where I with my teammates had created. ",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
    ],
  },
  // {
  //   name: "Frazzo.com clone",
  //   img: "/Frazzo.png",
  //   link: "https://fraazo.netlify.app/",
  //   git: "https://github.com/venkat0086/fraazo",
  //   about:
  //     " This is e-commerce application for fruits and vegetables. This was a team project where I with my teammates had created.",
  //   stacks: [
  //     // <SiReact className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  
  // {
  //   name: "Sportsjam.com clone",
  //   img: "Sportsjam.png",
  //   link: "sportsjam-github-io.vercel.app",
  //   git: "https://github.com/KetanMangidkar/sportsjam.github.io.git",
  //   about:
  //   "This is e-commerce application for sports equipments. This was a solo project where I had created.",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // }
  
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
