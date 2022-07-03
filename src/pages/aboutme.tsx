import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const AboutMe = () => {
  return (
    <Layout title="About me" pathName="/aboutme">
      <p>
        I'm a software engineer interested in continually improving my reasoning
        skills. With regard to software, I think that most apps will take a
        web-first approach in the future. That would be good news for javascript
        developers.
      </p>
      <p>
        My educational background is in math and geology. I have two big
        takeaways from school:
      </p>
      <ol>
        <li>
          Thinking clearly and developing expertise are much more difficult than
          most people think.
        </li>
        <li>
          A college education is not the best approach in most cases. A
          combination of directly reading textbooks, using online resources
          (including tutors), and a focus on real-world experience may be a more
          cost-effective and efficient approach for defining and advancing one's
          career aspirations.
        </li>
      </ol>
      <p>
        Some of my interests include energy (nuclear, oil <span>&amp;</span>{' '}
        gas, geothermal, rare earth elements), religion, and entrepreneurship.
        Generally speaking, I'm optimistic. I think we can build a more
        prosperous, energy-abundant society while becoming better stewards of
        the land, water, and wildlife we rely on for our physical and
        psychological well-being.
      </p>
      <p>
        While I'm optimistic that we can build a better future, I'm biased
        towards time-tested ideals. I think we've forgotten how to make
        buildings{' '}
        <a
          href="/static/659f19169897ab0a8000433c73ab9a72/94970/buildings-that-last.jpg"
          target="_blank"
        >
          that last
        </a>
        , I think multigenerational families are underrated, and I think we
        handicap ourselves by discounting the wisdom of past generations. I
        believe that being comfortable isn't correlated with being content and
        that both hard work and rest are necessities that we can improve at. I
        also think that entrepreneurship is appealing to a large degree because
        farming, the most common job in the world for thousands of years, is a
        form of entrepreneurship. When it comes to improving well-being, I think
        some of the best approaches simply cut out harmful aspects of our modern
        lives.
      </p>
      <p>
        That's a little bit about me. If you have any questions, or just want to
        connect, please don't hesitate to <Link to="/connect">reach out</Link>.
      </p>
    </Layout>
  );
};

export default AboutMe;
