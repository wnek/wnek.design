export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <div className="manifesto_header">
          <p className="label yellow">Manifesto</p>
          <h2>
            <span className="grey">
              According to Harvard Business Review, 75% of startups
              unfortunately don't succeed. I know the frustration of working
              hard and not seeing results.
            </span>{' '}
            I also know the solution.
          </h2>
        </div>
        <p className="manifesto_p1">
          Every new concept appears promising. It's easy to simply follow in the
          footsteps of competitors, trust your instincts, or optimistically hope
          for the best. However, our judgment is often clouded by subtle biases,
          leading to less than rational decision-making.
        </p>
        <p className="manifesto_p2">
          Impactful design goes beyond just aesthetic appeal. It must directly
          contribute to business performance. My approach incorporates design,
          psychology, and technology, with a specific focus on driving product
          growth.
        </p>
        <div className="manifesto_vows">
          <p className="label">To that end, I vow to:</p>
          <ol>
            <li>
              <span>01</span>Focus on the most critical performance metrics.
            </li>
            <li>
              <span>02</span>Identify and prioritize customer needs and
              expectations.
            </li>
            <li>
              <span>03</span>Create user experiences that drive conversions and
              growth.
            </li>
            <li>
              <span>04</span>Tell dad jokes on every occasion.
            </li>
          </ol>
        </div>
        <div className="manifesto_cta">
          <h2>
            Uncover what works for your business and how to grow your products
            by design.
          </h2>
          <p className="label">
            <span className="yellow">―</span> Mariusz Wnęk
          </p>
        </div>
      </div>
    </section>
  );
}
