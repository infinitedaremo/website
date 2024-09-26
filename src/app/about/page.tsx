import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import portraitImage from '@/images/avatar.png';
import moment from 'moment';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Gavin Woods. I live in New York City, where I design the future.',
};

export default function About() {
  const years = moment().diff(moment('2009-06-01'), 'years');
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Gavin Woods. A software engineer for {years} years
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My career began in games development, where I co-founded a game
              studio with three others. During this time, we created several
              games, including small titles for iOS, and developed a range of
              native applications through contract work.
            </p>
            <p>
              After a year of gathering experience of the industry we decided to
              disband and joined a small mobile applications startup developing
              facial recognition software as well as games and applications
              officially licensed by the FIGC.
            </p>
            <p>
              After about a year, I successfully entered the gaming industry at
              an independent studio called Laughing Jackal. There, I gained
              valuable experience working with Sony hardware, including the PSP,
              PlayStation Vita, PS3, and PS4. We also ported several games to
              Steam. One of my proudest achievements was solely developing Flame
              Over, a roguelike firefighting game with procedurally generated
              levels. Players navigate through burning buildings, rescuing
              people along the way. Flame Over was one of the most technically
              challenging projects I worked on, but after weeks of optimization,
              we achieved a locked 30fps on the PS Vita. You can check out the
              game on Steam{' '}
              <a
                className="hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                href="https://store.steampowered.com/app/345080/Flame_Over/"
              >
                here.
              </a>
            </p>
            <p>
              As the studio shifted its focus to porting Japanese games to
              Steam, I realized this wasn’t the direction I wanted for my
              career. Around that time, I discovered a fintech startup in my
              area that was building its mobile app using the Unity game engine.
              This opportunity marked my transition into the fintech industry.
              Initially, I worked on their mobile app, but I soon moved to the
              middleware team as the company decided to bring that development
              in-house. Over the years, I became the team lead, overseeing
              integrations with other banks and the Faster Payments scheme.
            </p>
            <p>
              After my time at Atom Bank, I decided to pursue contracting
              opportunities and founded my own company once again. This allowed
              me to explore various types of projects, including a year-long
              contract with HSBC. I also developed several visualization apps
              that utilized Kinect and other camera-based software for
              interactive user experiences. Some of this work can be viewed{' '}
              <a
                className="hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                href="https://www.seeper.com/work"
              >
                here.
              </a>
            </p>
            <p>
              I began contracting for Blockdaemon in 2019 and transitioned to a
              full-time role in 2020. Over the years, I’ve developed software
              utilized by some of the largest institutions in both Web2 and
              Web3. My work has involved building systems capable of handling up
              to 30,000 transactions per second with 99.9% uptime, often
              surpassing that guarantee. During my time at Blockdaemon, the
              company grew from 5 employees to over 300, becoming a prominent
              name in the crypto industry. I have developed software, led teams,
              and managed entire departments, gaining invaluable knowledge from
              my colleagues along the way.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/infinitedaremo"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/gavin-woods-fsd/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:gavinwoods.id@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              gavinwoods.id@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
