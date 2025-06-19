/*
  Warnings:

  - Made the column `author` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gifUrl` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "gifUrl" SET NOT NULL;
