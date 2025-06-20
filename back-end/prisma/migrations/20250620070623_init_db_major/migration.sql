/*
  Warnings:

  - Added the required column `title` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "author" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "author" DROP NOT NULL;
