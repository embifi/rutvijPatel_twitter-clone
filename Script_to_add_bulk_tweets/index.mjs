// var fetchUrl = require("fetch").fetchUrl;

// var tweetApi = require("./tweet");

// var rootUrl = "http://localhost:5000";
// var addTweetUrl = "/tweet/add-tweet";
// // source file is iso-8859-15 but it is converted to utf-8 automatically
// var successfull_count = 0;
// const tweets = tweetApi.tweet;
// let data = {
//   userId: "09662f3b-7223-4708-9168-5546618fc8a6",
//   text: "dummy",
// };
// console.log(`${rootUrl}${addTweetUrl}`);
// let tempData = { ...data };
// function addTweet(content) {
//   let tempData = { ...data };

//   tempData.text = content;
//   console.log(tempData);

//   fetchUrl(
//     `${rootUrl}${addTweetUrl}`,

//     {
//       method: "POST",
//       body: tempData,
//       headers: { "Content-Type": "application/json" },
//     },
//     function (error, meta, body) {
//       if (error) {
//         console.log("error", error);
//         return;
//       }
//       successfull_count++;
//       console.log("success", body.toString(), successfull_count);
//     }
//   );
// }

// // tweets.forEach((data, index) => {
// //   let content = data.tweet.full_text;
// //   if (content) {
// //     addTweet(content);
// //   }
// // });

// let data1 = tweets[0].tweet.full_text;
// addTweet(data1);
import fetch from 'node-fetch';

import tweets from "./tweet.mjs";

var rootUrl = "http://localhost:5000/tweet/add-tweet";
var addTweetUrl = "/tweet/add-tweet";
// source file is iso-8859-15 but it is converted to utf-8 automatically
var successfull_count = 0;
;
let data = {
  userId: "09662f3b-7223-4708-9168-5546618fc8a6",
  text: "dummy",
};

async function addTweet(content) {
  try {
    let tempData = { ...data };
    tempData.text = content;
    var resp = await fetch(`${rootUrl}`, {
      method: "POST",
      body: JSON.stringify(tempData),
      headers: { "Content-Type": "application/json" },
    });

    var resp2 = await resp.json();

    console.log("resp2", resp2);
    console.log("succes", successfull_count++);
  } catch (error) {
    console.log("error", error);
  }
}
var index = 0;
setInterval(async () => {
  let content = tweets[index].tweet.full_text;
  console.log(content);
  if (content) {
    await addTweet(content);
    index++;
  }
}, 100);

// tweets.forEach(async (data, index) => {
//   let content = data.tweet.full_text;
//   await addTweet(content);
// });