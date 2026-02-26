import axios from "axios";
import fs from "fs";

const FACEBOOK_PAGE_ID = "YOUR_PAGE_ID";
const ACCESS_TOKEN = "YOUR_FACEBOOK_ACCESS_TOKEN";

async function postToFacebook(message) {
  try {
    const url = `https://graph.facebook.com/${FACEBOOK_PAGE_ID}/feed`;
    const response = await axios.post(url, {
      message,
      access_token: ACCESS_TOKEN
    });

    console.log("Facebook post success:", response.data);
  } catch (error) {
    console.error("Facebook post failed:", error);
  }
}

async function autoPost() {
  const music = JSON.parse(fs.readFileSync("music.json", "utf-8"));

  const message = `
🎵 New Music Update  
${music[0]?.title} by ${music[0]?.artist}

Listen now: ${music[0]?.link}

Support African creativity ❤️
`;

  await postToFacebook(message);
}

autoPost();
