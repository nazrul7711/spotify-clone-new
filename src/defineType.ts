export type SongType = {
  id: string;
  songImage: string;
  song: string;
  singer: string;
  title: string;
  description: string;
  userIDs: string[];
};
export const playlist = [
  {
    title: "Hip-Hop",
    color: "#D94B38",
    image: "/hiphop.jpg",
    sublist: [
      {
        id: "650ebd19d214907b8f2ea052",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/68ulmvvx4bt",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/68ulmvvx4bu",
        singer: "Sia",
        title: "unstoppable",
        description: "Alternative Indie",
      },
      {
        id: "650ec66fd819c3b6ab0a059a",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/98almvxcdn8",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/98almvxcdn9",
        singer: "Lothika",
        title: "Gehraiyaan",
        description: "Pop Indie",
      },
      {
        id: "650ec738d819c3b6ab0a059e",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/98almvxgnpg",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/98almvxgnph",
        singer: "Shilpa Vishal",
        title: "Ghungroo",
        description: "Dance Indie",
      },
    ],
  },
  {
    title: "Indie",
    color: "#D338D9",
    image: "/hiphop.jpg",
    sublist: [
      {
        id: "65151b7309abcc7c25272f94",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/37wln2set6f",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/37wln2set6g",
        singer: "Lothika",
        title: "Doobey",
        description: "Indie Pop",
      },
      {
        id: "65151db009abcc7c25272f95",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/37wln2sr1le",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/37wln2sr1lf",
        singer: "Shilpa Rao",
        title: "Besharam",
        description: "Indie Pop",
      },
      {
        id: "651523247d04300e1343646a",
        songImage:
          "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/3g9ln2tl081",
        song: "https://nextjs-project-nazrul.s3.ap-south-1.amazonaws.com/3g9ln2tl082",
        singer: "Shilpa Rao",
        title: "Closure",
        description: "Pop",
      },
    ],
  },
  { title: "Punk", color: "#1517A3", image: "/hiphop.jpg" },
  { title: "Party", color: "#B3C3C6", image: "/hiphop.jpg" },
  { title: "Latin", color: "#A17DE0", image: "/hiphop.jpg" },
  { title: "Ambient", color: "#2A7497", image: "/hiphop.jpg" },
];

