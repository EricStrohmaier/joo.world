// const { contactEvents } = useProfileContacts();
// let profileHex;
// const followernames: string[] = [];

// if (contactEvents && contactEvents.length > 0) {
//   const sortedContactEvents = contactEvents.sort(
//     (a, b) => b.created_at - a.created_at
//   );

//   const latestContactEvent = sortedContactEvents[0];
//   const { tags } = latestContactEvent;

//   if (tags && tags.length > 0) {
//     tags.forEach((tag) => {
//       const [, tagValue] = tag;
//       profileHex = tagValue;
//       followernames.push(profileHex);
//     });
//   } else {
//     console.log("Tags array is undefined or empty");
//   }
// } else {
//   // console.log("contactEvents is undefined or empty");
// }

// // The People you follow are stored here    how to show their content?
// if (followernames.length > 0) {
//   console.log("Followernames:", followernames);
// }
// const globalFeed = useGlobalFeed();
// console.log("Global Feed:", globalFeed);
