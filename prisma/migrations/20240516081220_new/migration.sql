/*
  Warnings:

  - Added the required column `creator` to the `MusicCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MusicCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "MusicCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MusicCard" ("description", "id", "language", "title", "userId") SELECT "description", "id", "language", "title", "userId" FROM "MusicCard";
DROP TABLE "MusicCard";
ALTER TABLE "new_MusicCard" RENAME TO "MusicCard";
PRAGMA foreign_key_check("MusicCard");
PRAGMA foreign_keys=ON;
