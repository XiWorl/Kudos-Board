-- CreateTable
CREATE TABLE "board" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);
