import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const AboutMe = () => {
  return (
    <Layout title="About me" pathName="/aboutme">
      <p>
        I’m a self-taught software engineer and a lifelong learner. With regard
        to software, I think most apps will take a web-first approach in the
        future. That’s good news for javascript developers.
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
          A college education is unnecessary in most cases. A combination of
          directly reading textbooks, using online resources (including tutors),
          and a focus on real-world experience may be a more cost-effective and
          efficient approach to figuring out and furthering one’s career
          aspirations.
        </li>
      </ol>
      <p>
        Some of my interests include energy (nuclear, oil <span>&amp;</span>{' '}
        gas, geothermal, rare earth elements), religion, and entrepreneurship.
        Generally speaking, I’m an optimist - I think we can build a world that
        supports more prosperity, more energy consumption, more people, more
        natural beauty, and more aesthetic and affordable cities.
      </p>
      <p>
        While I’m technologically progressive, I’m biased towards time-tested
        ideals. I don’t like the way we’ve built buildings since WWII, I think
        multigenerational families are underrated, and I think we do a
        disservice to ourselves to discount the wisdom of past generations. I
        believe being comfortable isn't correlated with being content and that
        both hard work and rest are necessities that we can improve at. I also
        think entrepreneurship is appealing to a large degree because the
        world’s oldest profession (farming) is a form of entrepreneurship. When
        it comes to improving well-being, I think some of the highest ROI
        approaches simply cut out aspects of our modern lives that do us harm.
      </p>
      <p>
        That’s a little bit about me. If you have any questions, or just want to
        connect, please don't hesitate to get in{' '}
        <Link to="/connect">contact</Link> with me.
      </p>
    </Layout>
  );
};

export default AboutMe;
