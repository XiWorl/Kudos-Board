/*
  Warnings:

  - You are about to drop the `board` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "board";

-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "category" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "author" TEXT,
    "gifUrl" TEXT,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "boardId" INTEGER,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
