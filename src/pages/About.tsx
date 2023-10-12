import { FC } from "react";
import LayoutPage from "../components/LayoutPage";
import LayoutCard from "../components/LayoutCard";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <>
      <LayoutPage>
        <LayoutCard>
          <div className="flex justify-center">
            <div className="text-lg space-y-4">
              <div className="font-bold text-lg">Discover the Vision</div>
              <div>
                Everything I'm crafting here is driven by my imagination and
                aspirations.
              </div>
              <div className="font-bold">A New Perspective</div>
              <div>
                I've always grappled with mainstream social media apps. They
                steal focus and bombard you with content you didn't ask for. In
                essence, they're all about consumption, not creation.
              </div>
              <div>
                We won't delve into the complex world of how big corporations
                profit from your data and advertising. (Check these{" "}
                <a className="underline  text-blue-500" href="#">
                  links
                </a>{" "}
                if you're curious.)
              </div>
              <div>
                What excites me about Nostr is the ability to build your own
                applications on an existing infrastructure, effortlessly. And
                it's not as complex as you might think!
              </div>
              <div className="font-bold text-lg">My Vision</div>
              <div>
                This platform is designed for minimalism and efficiency, so your
                work remains uninterrupted. No clutter, no distractions, just
                pure functionality. You won't see metrics like followers or
                likes, but the functionality is there if you need it.
              </div>
              <div className="mt-12">
                Expect a standard WorkingFeed mode with full control over your
                connections.
              </div>
              <div>
                Create lists, build communities, and grow your fanbase with
                ease.
              </div>
              <div>
                Stay in control with time-blocking schedules. Customize when
                your feed goes silent and when it's active.
              </div>
              <div>
                Our focus is on creating. Whether it's crafting short-form or
                long-form content using AI to enhance your creations.
              </div>
              <div>
                Hopefully there will be an oneTask productivity tool. Answer
                goal-oriented questions, choose to post them or keep them in a
                private archive, and track your progress. A dashboard with
                weekly insights is also in the works.
              </div>
            </div>
          </div>
        </LayoutCard>
      </LayoutPage>
    </>
  );
};
