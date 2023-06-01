import { SVGProps } from 'react';

type SocialIconProps = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const socialIcons: SocialIconProps[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        {/*...rest of svg here*/}
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        {/*...rest of svg here*/}
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        {/*...rest of svg here*/}
      </svg>
    ),
  },
];

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Careers', href: '/career' },
    { name: 'Terms of Use', href: '/terms-of-use' },
    { name: 'Privacy Policy', href: '/privacy-policy'}
  ],
  social: socialIcons,
};

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900">
      <hr className="border-t border-gray-700 mb-6"></hr>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-6 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-lg leading-6 text-gray-200 hover:text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 ComputerScience.Careers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
