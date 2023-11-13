-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "pcompany" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "folders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "pages" TEXT NOT NULL,
    "id_book" TEXT NOT NULL,
    CONSTRAINT "notes_id_book_fkey" FOREIGN KEY ("id_book") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classifieds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_book" TEXT NOT NULL,
    "id_folder" TEXT NOT NULL,
    CONSTRAINT "classifieds_id_book_fkey" FOREIGN KEY ("id_book") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "classifieds_id_folder_fkey" FOREIGN KEY ("id_folder") REFERENCES "folders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "classifieds_id_book_id_folder_key" ON "classifieds"("id_book", "id_folder");
