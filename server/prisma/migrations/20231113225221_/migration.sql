/*
  Warnings:

  - You are about to drop the column `favorite` on the `books` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "pcompany" TEXT NOT NULL
);
INSERT INTO "new_books" ("author", "id", "pcompany", "title") SELECT "author", "id", "pcompany", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
