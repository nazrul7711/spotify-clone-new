"use client";
import React from "react";
import styles from "@/styles/mainpage.module.scss";
import SongCard from "../components/SongCard";
import { useSession } from "next-auth/react";
import useGetSongs from "@/hooks/useGetSongs";
import { SongType } from "@/defineType";

const Main = () => {
  let { data: session } = useSession();
  let user = session?.user;
  const { data: songs } = useGetSongs();

  return (
    <div className={styles.wrapper}>
      {user && <h1>Good Morning</h1>}
      {user && <h3>Made for {user.name}</h3>}
      <ul className={styles.playlist}>
        {songs?.map((song: SongType) => (
          <li key={song.id}>
            <SongCard
              songImage={song.songImage}
              title={song.title}
              description={song.description}
              id={song.id}
              song={song.song}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

/*
npx prisma generate will not add model to atlas 

let res = await axios.post("/api/register", {
         name: data?.name,
         email: data?.email,
         password: data?.password,
         dob: `${data?.year}-${data?.month}-${data?.day}`,
         gender: data?.gender,
       });
       console.log(res.status);
why console.log(res.status) does not run?

difference between console.log and console.error

how will u check if error is axioserror and output error message

learn next auth more

explain secret,session
secret is not mandatory in developement but in production it is mandatory if u provide nextauth_secret no need to use secret

session if u using adapter then strategy is database and to enforce jwt u have to explicitly define it , and it has expiration time of 30 days

getToken({req,nextauth_secret}) to get token

pages is object to specify custom routes like signIn:"auth/signIn"

NextRequest cookies.get kind of methods,nextUrl

how to handle  Rendered more hooks than during the previous render (React) ?

how to fetch data conditionally useSwr? and dependant rendering?

how to use useSwr with click of a button?

if you have a Link and you want to a absolute path how u gonna do it?

dont export data fetcher function .



*/
