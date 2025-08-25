-- CreateTable
CREATE TABLE `Notificaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(33) NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,
    `mensaje` VARCHAR(255) NOT NULL,
    `fecha_envio` DATE NOT NULL,
    `categoria` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reporte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(32) NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,
    `contenido` TEXT NOT NULL,
    `fecha_generacion` DATE NOT NULL,
    `recomendaciones` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recordatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(36) NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,
    `mensaje` VARCHAR(255) NOT NULL,
    `fecha` DATE NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `clave` VARCHAR(255) NOT NULL,
    `fecha_registro` DATE NOT NULL,
    `nivel_experiencia` VARCHAR(30) NOT NULL,
    `perfil_cognitivo` VARCHAR(50) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
