/*
  Warnings:

  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - Added the required column `atencionCl` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instalacion` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ip` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioDesc` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioLista` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proveedor` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tecnologia` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `velocidad` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `velocidadBaj` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `velocidadSub` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "atencionCl" TEXT NOT NULL,
ADD COLUMN     "descripcion" TEXT,
ADD COLUMN     "instalacion" TEXT NOT NULL,
ADD COLUMN     "ip" TEXT NOT NULL,
ADD COLUMN     "plan" TEXT NOT NULL,
ADD COLUMN     "precioDesc" TEXT NOT NULL,
ADD COLUMN     "precioLista" TEXT NOT NULL,
ADD COLUMN     "proveedor" TEXT NOT NULL,
ADD COLUMN     "tecnologia" TEXT NOT NULL,
ADD COLUMN     "velocidad" TEXT NOT NULL,
ADD COLUMN     "velocidadBaj" TEXT NOT NULL,
ADD COLUMN     "velocidadSub" TEXT NOT NULL;
