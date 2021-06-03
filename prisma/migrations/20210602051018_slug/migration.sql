/*
  Warnings:

  - Added the required column `CoffeShopId` to the `CoffeeshopPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "slug" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CoffeeshopPhoto" ADD COLUMN     "CoffeShopId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CoffeeshopPhoto" ADD FOREIGN KEY ("CoffeShopId") REFERENCES "CoffeeShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
