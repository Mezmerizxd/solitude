import React from 'react';
import { Link } from 'react-scroll';
import { Section } from '../components/Section';
import { Button } from '../../../components/Elements';
import Accordion from '../../../components/Elements/Accordion/Accordion';
import { home_hero_quotes } from '../../../constants';

const HomeLayout = React.lazy(() => import('../../../components/Layout/HomeLayout'));

export const Landing = () => {
  const random_quote = home_hero_quotes[Math.floor(Math.random() * home_hero_quotes.length)];

  return (
    <HomeLayout title="Home">
      <Section id="1" className="flex flex-col justify-center items-center">
        <h1 className="p-5 italic text-1xl sm:text-2xl md:text-3xl lg:text-4xl">"{random_quote.quote}"</h1>
        <h2 className="font-semibold lg:text-2xl">- {random_quote.author}</h2>
        <Link className="mt-5" to="2" spy={true} smooth={true} duration={1000}>
          <Button>Start</Button>
        </Link>
      </Section>
      <Section id="2" className="flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl">Courses I have completed</h1>
        <div className="w-full mt-5">
          <Accordion
            accordions={[
              {
                title: 'Google - Crash Course on Python',
                content: 'https://coursera.org/verify/QH8B9E622SH5',
              },
              {
                title: 'IBM - Introduction to Cloud Computing',
                content: 'https://coursera.org/verify/PFUGN5HJVZDR',
              },
              {
                title: 'IBM - Python for Data Science and AI',
                content: 'https://coursera.org/verify/8AM37WB23UDD',
              },
              {
                title: 'Meta - Introduction to Front-End Development',
                content: 'https://coursera.org/verify/6T4E4D48QBF9',
              },
            ]}
          />
        </div>
        <Button className="mt-5" onClick={() => (window.location.href = 'courses')}>
          See More
        </Button>
      </Section>
    </HomeLayout>
  );
};
