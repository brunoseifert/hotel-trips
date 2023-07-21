/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `maxGuest` on the `Trip` table. All the data in the column will be lost.
  - The `highlights` column on the `Trip` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `countryCode` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxGuests` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imageUrl",
DROP COLUMN "maxGuest",
ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "imagesUrl" TEXT[],
ADD COLUMN     "locationDescription" TEXT NOT NULL DEFAULT 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
ADD COLUMN     "maxGuests" INTEGER NOT NULL,
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "highlights",
ADD COLUMN     "highlights" TEXT[];

-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 5;
