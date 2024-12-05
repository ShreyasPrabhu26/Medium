import { Container } from "./Container";

import userOneImg from "../img/user1.jpg";
import userTwoImg from "../img/user2.jpg";
import userThreeImg from "../img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-blue-100 px-14 rounded-2xl py-14 dark:bg-blue-800">
            <p className="text-2xl leading-normal ">
              Discover insightful <Mark>stories</Mark> and experiences from our
              top bloggers.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="Lifestyle Blogger"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-blue-100 px-14 rounded-2xl py-14 dark:bg-blue-800">
            <p className="text-2xl leading-normal ">
              Get inspired by the <Mark>creative</Mark> journeys of our writers.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Travel Blogger"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-blue-100 px-14 rounded-2xl py-14 dark:bg-blue-800">
            <p className="text-2xl leading-normal ">
              Explore the <Mark>unique</Mark> perspectives shared by our
              community.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Food Blogger"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props: any) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img src={props.image} width="40" height="40" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: any) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
