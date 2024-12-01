import { Container } from "./Container";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap p-0">
        {/* Left Column */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Share Your Stories with Blog Bloom
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Blog Bloom is your creative space to write, connect, and inspire.
              Start your blogging journey today with our easy-to-use platform
              designed for writers of all levels.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/start-writing"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                Start Writing
              </a>
              <a
                href="/explore"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <span>Explore Posts</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img
              src="/img/hero.png"
              className="object-cover"
              alt="Hero Illustration"
              width="616"
              height="617"
            />
          </div>
        </div>
      </Container>

      {/* Brands Section */}
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Join our community of{" "}
            <span className="text-indigo-600">10,000+</span> writers and readers
          </div>

          {/* You can either remove the brand logos section or replace with relevant blog/publishing platforms */}
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <BrandIcon Icon={MediumLogo} className="pt-2" />
            <BrandIcon Icon={SubstackLogo} />
            <BrandIcon Icon={WordPressLogo} />
            <BrandIcon Icon={GhostLogo} className="pt-1" />
            <BrandIcon Icon={HashnodeLogo} className="pt-2" />
          </div>
        </div>
      </Container>
    </>
  );
};

interface BrandIconProps {
  Icon: React.FC;
  className?: string;
}

const BrandIcon = ({ Icon, className = "" }: BrandIconProps) => (
  <div
    className={`text-gray-400 dark:text-gray-400 transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-200 hover:scale-110 ${className}`}
  >
    <Icon />
  </div>
);

const SubstackLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const MediumLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const WordPressLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5M2.315 12c0 2.377.832 4.562 2.213 6.293L3.34 12.53c-.466-1.23-.73-2.52-.73-3.882 0-.663.085-1.305.228-1.924.683 2.093 2.41 3.867 4.602 4.803l.765.23c-.043.117-.085.235-.12.355-.228.772-.29 1.596-.29 2.425 0 .247.014.494.043.74-.013 0-.026-.004-.038-.004-1.743 0-3.265-.917-4.13-2.29l-.566.028c-1.03.057-1.965.334-2.79.786m7.44 8.263c1.016.388 2.114.612 3.265.612 1.345 0 2.614-.327 3.738-.89-.038.004-.075.004-.113.004-1.743 0-3.265-.917-4.13-2.29-.566.028-1.102.142-1.63.327l-1.13 2.237m8.804-1.703c1.77-1.64 2.89-3.988 2.89-6.598l.002-.15c.446 1.01.7 2.124.7 3.298 0 1.953-.694 3.737-1.833 5.15l-1.76-1.7m-5.783-6.092c-.085.297-.208.58-.37.85l-3.626 7.25c-.247.494-.778.813-1.357.813-.494 0-.945-.228-1.242-.61l.084-.17 3.64-7.278c.29-.58.875-.946 1.51-.946.778 0 1.428.522 1.647 1.23.247-.08.48-.185.713-.14m-2.47-3.264c0-.876-.446-1.65-1.13-2.128.48-.142.978-.223 1.5-.223.353 0 .694.038 1.026.104-.883.85-1.396 2.033-1.396 3.307v.446c-.72-.874-1.173-1.962-1.173-3.156 0-1.153.403-2.213 1.073-3.057-2.05.577-3.682 2.166-4.287 4.173.66-.34 1.414-.536 2.213-.536 2.62 0 4.746 2.128 4.746 4.746 0 .327-.038.64-.104.945l.764.23c.344-.353.627-.757.85-1.2l.565.028c1.102.057 2.094.374 2.966.902C20.648 7.992 16.743 4.5 12 4.5c-.565 0-1.115.057-1.65.156.344.41.55.934.55 1.51 0 1.312-1.064 2.376-2.377 2.376-.185 0-.36-.023-.532-.065.023.256.038.512.038.774 0 .692-.095 1.358-.256 1.998l1.357.41c.716-.734 1.172-1.725 1.172-2.83" />
  </svg>
);

const GhostLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm.937 18.844v2.156H10.97v-2.156h1.968zm3.094-10.78c0 2.485-1.454 4.021-3.488 4.021v.001h-.093c-2.063 0-3.532-1.536-3.532-4.021V8.062h1.876v.001c0 1.455.778 2.17 1.656 2.17.85 0 1.705-.715 1.705-2.17V8.062h1.876v.002z" />
  </svg>
);

const HashnodeLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
  </svg>
);
