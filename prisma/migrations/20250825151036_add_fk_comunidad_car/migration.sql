/*
  Warnings:

  - Added the required column `comunidad_id` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car` ADD COLUMN `comunidad_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_comunidad_id_fkey` FOREIGN KEY (`comunidad_id`) REFERENCES `comunidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
