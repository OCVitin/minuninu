/*
  Warnings:

  - Made the column `matricula` on table `Aluno` required. This step will fail if there are existing NULL values in that column.
  - Made the column `matricula` on table `Professor` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Aluno" ("email", "id", "matricula", "nome", "senha") SELECT "email", "id", "matricula", "nome", "senha" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("email", "id", "matricula", "nome", "senha") SELECT "email", "id", "matricula", "nome", "senha" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
