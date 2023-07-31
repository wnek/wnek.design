export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footnote grey">
          <p>Mariusz Wnęk</p>
          <div className="links">
            <p className="grey">Social proof</p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/mariuszwnek/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/wnek" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mariuszwnek" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <p>
            This project is freely accessible to the public on{' '}
            <a href="https://github.com/wnek/wnek.design" target="_blank">
              GitHub
            </a>
            .
          </p>
          <p>©2023 No rights reserved.</p>
        </div>
      </div>
      <div className="dots"></div>
    </footer>
  );
}
