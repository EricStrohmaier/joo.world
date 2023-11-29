// import ProfileCard from "../../../components/CommonUI/ProfileCard";
import WorkflowCard from "../../Workflow/components/WorkflowCard";

function PersonalFeed() {

  // const sortedData = personalFeedData?.sort(
  //   (a, b) => Number(b.createdAt) - Number(a.createdAt)
  // );

  return (
    <div className="lg:w-full w-[95%] ">
      <div className="items-center  flex flex-col h-full lg:w-full w-[96%]">
        <WorkflowCard>
          <div className="flex items-center justify-center h-96 "></div>
          {/* <div className="flex flex-col items-center">
            {sortedData?.map((item, index) => {
              return (
                <>
                  <div>
                    <ProfileCard
                      index={index}
                      username={item.pubkey}
                      postContent={item.content}
                    />
                  </div>
                </>
              );
            })}
          </div> */}
        </WorkflowCard>
      </div>{" "}
    </div>
  );
}

export default PersonalFeed;
