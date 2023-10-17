/*
  Warnings:

  - Added the required column `matricula` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matricula` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;

-- Modificação da tabela "Professor"
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT
        CHECK("matricula" IS NOT NULL) DEFAULT 'temp_matricula_value',
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("email", "id", "nome", "senha") SELECT "email", "id", "nome", "senha" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- Modificação da tabela "Aluno"
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT
        CHECK("matricula" IS NOT NULL) DEFAULT 'temp_matricula_value',
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Aluno" ("email", "id", "nome", "senha") SELECT "email", "id", "nome", "senha" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
