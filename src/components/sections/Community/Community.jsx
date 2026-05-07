import styles from './Community.module.css';

export default function Community() {

  const testimonials = [
    {
      quote:
        "Most people attend hackathons to win prizes. The best builders come to meet future co-founders, investors, and the people they'll build the next decade with.",
      name: "Srujan",
      role: "Buildathon Alumni",
    },

    {
      quote:
        "I joined with an idea and left with a team, mentors, and a product we still work on today.",
      name: "Akhil",
      role: "Founder Track",
    },

    {
      quote:
        "Buildathon felt less like a competition and more like a startup accelerator compressed into 32 hours.",
      name: "Riya",
      role: "AI Engineer",
    },

    {
      quote:
        "The energy in the room was unreal. Serious builders, serious execution, zero fluff.",
      name: "Kevin",
      role: "Product Designer",
    },

    {
      quote:
        "I met my current co-founder here. That alone made the entire experience worth it.",
      name: "Mohan",
      role: "Builder",
    },
  ];

  return (
    <section className={styles.community} id="community">

      <div className="container">

        <div className="section-head reveal">

          <span className="eyebrow">
            <span className="dot" />
            The Buildathon Network
          </span>

          <h2>
            Where builders connect.
            <br />

            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--text-dim)',
                fontWeight: 400,
              }}
            >
              And products get shipped.
            </em>

          </h2>

        </div>

        <div className={styles.testimonialWrap}>

          <div className={styles.marquee}>

            <div className={styles.marqueeTrack}>

              {[...testimonials, ...testimonials].map((item, index) => (

                <div
                  className={styles.testimonialCard}
                  key={index}
                >

                  <div className={styles.quoteMark}>
                    “
                  </div>

                  <blockquote className={styles.quote}>
                    {item.quote}
                  </blockquote>

                  <div className={styles.attr}>

                    <div className={styles.avatar}>
                      {item.name.charAt(0)}
                    </div>

                    <div>

                      <div className={styles.attrName}>
                        {item.name}
                      </div>

                      <div className={styles.attrRole}>
                        {item.role}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}