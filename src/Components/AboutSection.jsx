import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img src="/IMG_7862.jpeg" alt="" className={styles.profilePic} />
          </div>
          <div>
            <h2>
              I am <span>Ketan Mangidkar</span>{" "}
            </h2>
            <p>
              Experienced full-stack web developer with one year focused on
              frontend development. Proven track record in delivering quality
              work within deadlines. A disciplined and adaptable team player
              with strong communication skills. Eager to contribute expertise to
              challenging projects in a growth-oriented environment.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
