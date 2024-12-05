import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../img/benefit-one.png";
import benefitTwoImg from "../img/benefit-two.png";

const benefitOne = {
  title: "Create Engaging Content",
  desc: "Our blogging platform provides all the tools you need to create, manage, and share your stories with the world. With a clean interface and powerful features, you can focus on what matters most - your writing.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Rich Text Editor",
      desc: "Write and format your content with our intuitive Markdown-supported editor.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "SEO Optimization",
      desc: "Built-in tools to help your content rank better in search engines.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Analytics Dashboard",
      desc: "Track your audience engagement and content performance in real-time.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Expand Your Reach",
  desc: "Utilize our platform's advanced features to grow your blog's audience and engage with readers. Share your insights and connect with a community of passionate individuals.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Responsive Design",
      desc: "Ensure your blog is accessible and visually appealing on any device.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Cutting-Edge Technology",
      desc: "Leverage the power of Next.js & TailwindCSS for a seamless blogging experience.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Theme Customization",
      desc: "Personalize your blog with light and dark modes, plus additional theme options.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
