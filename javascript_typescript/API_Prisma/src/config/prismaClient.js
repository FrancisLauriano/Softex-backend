//src/config/prismaClient.js
import { PrismaClient } from "@prisma/client";

// cria uma nova instância do PrismaClient e
// exporta a instância do PrismaClient para que possa ser usada em outros arquivos
const prisma = new PrismaClient();

export default prisma;
