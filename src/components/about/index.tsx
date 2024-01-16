import {
  CalendarIcon,
  CardStackPlusIcon,
  CheckIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import BentoGridSection from "./bento-grid";

const features = [
  {
    name: "100% qualified product",
    description:
      "We test most of our products. We also buy products from trusted manufacturers only.",
    icon: CheckIcon,
  },
  {
    name: "Trustworthy and immediate service",
    description: `We trust people. They trust us back. So till now, services didn't take long for any customers.`,
    icon: CardStackPlusIcon,
  },
  {
    name: "All brand your looking for is here",
    description: `We have a wide variety of branded collections, and also we're partnering with many more leading brands to give you more choice.`,
    icon: GlobeIcon,
  },
  {
    name: "More than 11 years of experiance",
    description: `It's been a decade, we survived a lot worse which made us grow stronger and smarter.`,
    icon: CalendarIcon,
  },
];

const About = () => {
  return (
    <section id="about" className="w-full container">
      <div className="flex flex-col items-center gap-8 mb-12">
        <h2 className="text-xl xl:text-2xl pb-4 font-bold border-b-2 border-primary">
          About Us
        </h2>
        <p className="text-center text-lg">
          Since our beginning in 2010, we&apos;ve grown to understand your needs
          better, constantly strengthening our commitment to bring you
          authentic, high-quality products. At our core, we believe in value,
          quality, and the power of brands. That&apos;s why we offer a wide
          range of trusted brands, and we&apos;re always adding more of your
          favorites. Our dedication to providing only the best never wavers.
          Welcome to a shopping experience where quality meets trust.
        </p>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-neutral-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <BentoGridSection />
    </section>
  );
};

export default About;
