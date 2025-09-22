-- CreateTable
CREATE TABLE "Comunidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plate" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "price" DECIMAL NOT NULL DEFAULT 0.00,
    "comunidad_id" INTEGER NOT NULL,
    CONSTRAINT "Car_comunidad_id_fkey" FOREIGN KEY ("comunidad_id") REFERENCES "Comunidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notificaciones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha_envio" DATETIME NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_generacion" DATETIME NOT NULL,
    "recomendaciones" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Recordatorio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Estado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Usuario_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "Estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Comunidad_name_key" ON "Comunidad"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");
