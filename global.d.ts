import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
export type SongType = {
  id: string;
  songImage: string;
  song: string;
  singer: string;
  title: string;
  description: string;
  userIDs: string[];
};
