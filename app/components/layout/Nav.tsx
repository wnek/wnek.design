export default function Nav() {
  return (
    <nav>
      <p>Mariusz Wnęk</p>
      <ul>
        <li>About</li>
        <li className="disabled">Blog</li>
        <li className="disabled">Resources</li>
        <li className="disabled">Lab</li>
        <li className="disabled">Mentoring</li>
      </ul>
      <a className="button" href="mailto:hi@wnek.design">
        Contact
      </a>
    </nav>
  );
}
