export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me_container">
        <p className="about-me-label label yellow">About Me</p>
        <img src="./img/mariusz-wnek.jpg" alt="Photo of Mariusz Wnęk" />

        <div className="about-me_text">
          <h3>
            I'm a designer with a unique background in psychology. I bridge the
            gap between business, people, and technology. Unlike an artist, I
            focus on studying and measuring the impact of design on various
            business models.
          </h3>
          <div className="about-me_paragraphs">
            <p>
              One of my secret skills is cleaning up any mess I come across. I
              excel in piecing together fragments and setting things in motion.
              I'm always curious and will never hesitate to ask 'why' to uncover
              the truth.
            </p>
            <p>
              In my free time, you can find me immersed in gaming and enjoying
              classic anime from the '90s.
            </p>
          </div>
        </div>

        <div className="list-of-skills">
          <p>Skills</p>
          <div className="skills_one-skill">
            <p className="white">User Psychology Expertise</p>
            <p>
              Designing products that appeal to users on a deeper emotional
              level, driving engagement and adoption to generate higher revenue
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">Product-Led Growth Strategies</p>
            <p>
              Designing products that appeal to users on a deeper emotional
              level, driving engagement and adoption to generate higher revenue
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">No-Code Development</p>
            <p>
              Leveraging no-code solutions for quick prototyping and feature
              building, enabling fast-paced experimentation and reducing the
              product's time-to-market.
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">UX/UI Design Skills</p>
            <p>
              Creating engaging and visually stunning user experiences,
              effectively transforming initial concepts into intuitive,
              user-friendly interfaces that amplify user satisfaction and
              product adoption.
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">Rapid Prototyping</p>
            <p>
              Building interactive prototypes swiftly using no-code tools,
              facilitating immediate user feedback, validation of design ideas,
              and efficient iterations.
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">Data-Driven Iteration</p>
            <p>
              Using data analytics from user interactions to inform design
              decisions, promoting continuous improvement of the product's user
              experience over time.
            </p>
          </div>
          <div className="skills_one-skill">
            <p className="white">Cross-Functional Collaboration</p>
            <p>
              Working in sync with product managers, developers, marketers, and
              other stakeholders to align product design strategies with
              business goals, ensuring a cohesive product-led growth approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
