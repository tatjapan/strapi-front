import React from "react";

// const post = {
//   id: 1,
//   author: {
//     id: 1,
//     username: "tatjapan",
//     email: "tatsuya.tsuri@gmail.com",
//     provider: "local",
//     confirmed: true,
//     blocked: false,
//     role: 2,
//     created_at: "2020-11-27T01:45:18.560Z",
//     updated_at: "2020-11-27T01:48:42.210Z",
//   },
//   description: "I love you Aki.",
//   likes: 4,
//   published_at: "2020-11-27T03:49:13.828Z",
//   created_at: "2020-11-27T03:47:58.663Z",
//   updated_at: "2020-11-27T03:49:13.859Z",
//   image: [
//     {
//       id: 3,
//       name: "1600760073462.jpg",
//       alternativeText: "",
//       caption: "",
//       width: 1568,
//       height: 1044,
//       formats: {
//         thumbnail: {
//           name: "thumbnail_1600760073462.jpg",
//           hash: "thumbnail_1600760073462_21e0c65b73",
//           ext: ".jpg",
//           mime: "image/jpeg",
//           width: 234,
//           height: 156,
//           size: 8.31,
//           path: null,
//           url: "/uploads/thumbnail_1600760073462_21e0c65b73.jpg",
//         },
//         large: {
//           name: "large_1600760073462.jpg",
//           hash: "large_1600760073462_21e0c65b73",
//           ext: ".jpg",
//           mime: "image/jpeg",
//           width: 1000,
//           height: 666,
//           size: 89.87,
//           path: null,
//           url: "/uploads/large_1600760073462_21e0c65b73.jpg",
//         },
//         medium: {
//           name: "medium_1600760073462.jpg",
//           hash: "medium_1600760073462_21e0c65b73",
//           ext: ".jpg",
//           mime: "image/jpeg",
//           width: 750,
//           height: 499,
//           size: 54.15,
//           path: null,
//           url: "/uploads/medium_1600760073462_21e0c65b73.jpg",
//         },
//         small: {
//           name: "small_1600760073462.jpg",
//           hash: "small_1600760073462_21e0c65b73",
//           ext: ".jpg",
//           mime: "image/jpeg",
//           width: 500,
//           height: 333,
//           size: 28.15,
//           path: null,
//           url: "/uploads/small_1600760073462_21e0c65b73.jpg",
//         },
//       },
//       hash: "1600760073462_21e0c65b73",
//       ext: ".jpg",
//       mime: "image/jpeg",
//       size: 191.4,
//       url: "/uploads/1600760073462_21e0c65b73.jpg",
//       previewUrl: null,
//       provider: "local",
//       provider_metadata: null,
//       created_at: "2020-11-27T03:47:23.109Z",
//       updated_at: "2020-11-27T03:47:23.125Z",
//     },
//   ],
// };

const API_URL = "http://localhost:1337";
const formatImageUrl = (url) => `${API_URL}${url}`;

export default function Post({ description, likes, url }) {
  return (
    <div className="Post">
      <img className="Post__Image" src={formatImageUrl(url)} />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
}
