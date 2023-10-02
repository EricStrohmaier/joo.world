import { FC } from "react";
import LayoutPage from "../components/LayoutPage";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <LayoutPage>
        <div className="m-5 flex justify-center">
          <div className="text-lg space-y-4">
            <div className="font-bold text-lg">About this stuff </div>
            <p>
              What I am creating is for myself. It serves my imagination and
              expectations.
            </p>
            <div className="font-bold">What I saw?!</div>
            <p>
              Well, I always struggled with any social media app because it
              always stole my focused attention and tried to push content I
              don't necessarily want to consume. In short, "it's about consuming
              and not producing."
            </p>
            <p>
              The part about why the mega companies want you to consume their
              product and it's all FREE and how they sell ads to you and have
              control over your data... yeah, that part I will not touch here. (
              <a href="">add some links</a>)
            </p>
            <p>
              The reason why I find Nostr so interesting is that you can build
              your own applications on top of an already existing
              infrastructure, and you get so many more benefits with it! And
              it's not complicated!
            </p>
            <div className="font-bold text-lg">
              What I see! (my imagination)
            </div>
            <p>
              It should not distract you from work with minimal, smooth design
              and no overload of options (buttons) and feeds. You will not be
              able to see your likes or how many zaps, etc., but functionality
              will be there. In the profile menu, you will not see how or who
              follows you, etc.
            </p>
            <p>
              There will be a standard WorkingFeed mode. It will be empty, and
              you can only add people you already follow, no mutes...
            </p>
            <p>
              It will have a time block schedule where you set a schedule that
              blocks your feed completely at certain times and not at others.
            </p>
            <p>
              It should be focused on creating (creating workflows; I don't know
              how that should look like yet), but creating long and short-form
              content, adding DVM options to it. For example, in the creation of
              a post, you could simply prompt an AI to create the image, etc.
            </p>
            <p>
              Creating lists, communities, creating a fanbase with less effort.
            </p>
            <p>
              Would it be possible to track your time tighter on the app or on
              Nostr?
            </p>
            <p>
              I could add a the spotlighted app as productive insight of the
              app.
            </p>
            <p>
              I will add my oneTask productivity tool where you will be able to
              answer goal/productive-oriented questions and choose if you want
              to post them or save to a private archive, where you can do a
              follow-up post with your progress of the goal and tag the post. Or
              you will have a dashboard with your weekly questions, etc. (I
              guess this would be already workflows?)
            </p>
          </div>
        </div>
      </LayoutPage>
    </>
  );
};

export default About;
