import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // --- MENU ITEMS ---
  // Aggiornato da foto menu fisico (2026-03-09)
  // Legenda allergeni: 1)Glutine 2)Crostacei 3)Uova 4)Pesce 5)Arachidi 6)Soia
  //   7)Latte 8)Frutta Guscio 9)Sedano 10)Senape 11)Sesamo 12)Solfiti 13)Lupini 14)Molluschi
  // V = Vegetariano, VV = Vegano
  const menuItems = [
    // ANTIPASTI (categoryOrder: 1)
    { name: "Selezione di Formaggi da 3 Assaggi", category: "Antipasti", categoryOrder: 1, displayOrder: 1, price: 8, allergens: "latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Selezione di Formaggi da 6 Assaggi", category: "Antipasti", categoryOrder: 1, displayOrder: 2, price: 16, allergens: "latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Crostino Toscano", category: "Antipasti", categoryOrder: 1, displayOrder: 3, price: 11, allergens: "glutine, pesce, latte, sedano", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Bruschette al Pomodoro Fresco", category: "Antipasti", categoryOrder: 1, displayOrder: 4, price: 11, allergens: "glutine", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Crostino con Lardo", category: "Antipasti", categoryOrder: 1, displayOrder: 5, price: 11, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Bruschette Miste", category: "Antipasti", categoryOrder: 1, displayOrder: 6, price: 13, allergens: "glutine, pesce, latte, sedano", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Polpette di Melanzane", category: "Antipasti", categoryOrder: 1, displayOrder: 7, price: 13, allergens: "glutine, uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Carciofi Gratinati", category: "Antipasti", categoryOrder: 1, displayOrder: 8, price: 13, allergens: "glutine, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Affettato Misto", category: "Antipasti", categoryOrder: 1, displayOrder: 9, price: 14, allergens: "latte, frutta a guscio", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Prosciutto di Parma 30 Mesi", category: "Antipasti", categoryOrder: 1, displayOrder: 10, price: 14, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Misto di Petto d'Oca e Anatra", category: "Antipasti", categoryOrder: 1, displayOrder: 11, price: 14, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Cecina de Leon", category: "Antipasti", categoryOrder: 1, displayOrder: 12, price: 15, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Insalata di Misticanza con Petto d'Oca e Uova di Quaglia", category: "Antipasti", categoryOrder: 1, displayOrder: 13, price: 15, allergens: "glutine, uova, senape", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: true },

    // PRIMI PIATTI (categoryOrder: 2)
    { name: "Zuppa di Fagioli", category: "Primi Piatti", categoryOrder: 2, displayOrder: 1, price: 11, allergens: "sedano", isVegetarian: false, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Pasta e Fagioli", category: "Primi Piatti", categoryOrder: 2, displayOrder: 2, price: 11, allergens: "glutine, sedano", isVegetarian: false, isVegan: true, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Zuppa di Legumi Misti", category: "Primi Piatti", categoryOrder: 2, displayOrder: 3, price: 11, allergens: "sedano", isVegetarian: false, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Purea di Fave e Cicoria", category: "Primi Piatti", categoryOrder: 2, displayOrder: 4, price: 11, allergens: null, isVegetarian: false, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Orecchiette al Ragù del Macellaio", category: "Primi Piatti", categoryOrder: 2, displayOrder: 5, price: 12, allergens: "glutine, anidride solforosa", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: true },
    { name: "Mezze Maniche alla Gricia Sbagliata", category: "Primi Piatti", categoryOrder: 2, displayOrder: 6, price: 12, allergens: "glutine, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Orecchiette Broccoli e Salsiccia", category: "Primi Piatti", categoryOrder: 2, displayOrder: 7, price: 12, allergens: "glutine, pesce", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Linguine alla 'Nduja", category: "Primi Piatti", categoryOrder: 2, displayOrder: 8, price: 13, allergens: "glutine", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: true, isChefSpecial: false },
    { name: "Parmigiana di Melanzane", category: "Primi Piatti", categoryOrder: 2, displayOrder: 9, price: 13, allergens: "latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Linguine Fave, Guanciale e Pecorino", category: "Primi Piatti", categoryOrder: 2, displayOrder: 10, price: 13, allergens: "glutine, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Spaghetti alla Carbonara", category: "Primi Piatti", categoryOrder: 2, displayOrder: 11, price: 13, allergens: "glutine, uova, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: true },
    { name: "Paccheri con Parmigiana di Melanzane", category: "Primi Piatti", categoryOrder: 2, displayOrder: 12, price: 13, allergens: "glutine, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Bucatini alla Amatriciana", category: "Primi Piatti", categoryOrder: 2, displayOrder: 13, price: 13, allergens: "glutine, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Tagliatelle al Ragù di Cinghiale", category: "Primi Piatti", categoryOrder: 2, displayOrder: 14, price: 14, allergens: "glutine, uova, sedano, anidride solforosa", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: true },

    // SECONDI (categoryOrder: 3)
    { name: "Frittelle di Fiori di Zucca", category: "Secondi", categoryOrder: 3, displayOrder: 1, price: 14, allergens: "glutine, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Polpette di Carne al Pomodoro", category: "Secondi", categoryOrder: 3, displayOrder: 2, price: 15, allergens: "glutine, uova, latte", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Coppa di Maialino Arrosto con Polenta", category: "Secondi", categoryOrder: 3, displayOrder: 3, price: 16, allergens: "sedano", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Brasato con Polenta", category: "Secondi", categoryOrder: 3, displayOrder: 4, price: 18, allergens: "sedano", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },

    // SECONDI ALLA BRACE (categoryOrder: 4)
    { name: "Scamorza", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 1, price: 13, allergens: "latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Salsiccia", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 2, price: 15, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Hamburger alla 'Nduja", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 3, price: 15, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: true, isChefSpecial: false },
    { name: "Supreme di Galletto allevato a Terra", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 4, price: 15, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Salamella di Maiale Nero Piccante", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 5, price: 16, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: true, isChefSpecial: false },
    { name: "Arrosticini di Pecora", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 6, description: "Prodotto surgelato", price: 18, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Controfiletto Argentino da 200 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 7, price: 21, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Entrecote Argentino da 200 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 8, price: 21, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Costata di Scottona Bavarese da 300 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 9, price: 24, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Entrecote Argentino da 250 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 10, price: 26, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Controfiletto Argentino da 250 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 11, price: 26, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Filetto di Scottona Bavarese da 200 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 12, price: 26, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Costolette d'Agnello", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 13, price: 32, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Costata di Scottona da 600 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 14, price: 48, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Fiorentina di Scottona da 800 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 15, price: 70, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },
    { name: "Fiorentina di Scottona da 1100 g.", category: "Secondi alla Brace", categoryOrder: 4, displayOrder: 16, price: 90, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },

    // TAGLIATE (categoryOrder: 5)
    { name: "Tagliata di Scamone Argentino da 250 g.", category: "Tagliate", categoryOrder: 5, displayOrder: 1, price: 21, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Tagliata di Controfiletto Argentino da 250 g.", category: "Tagliate", categoryOrder: 5, displayOrder: 2, price: 26, allergens: null, isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: true },

    // CONTORNI (categoryOrder: 6)
    { name: "Insalata Verde", category: "Contorni", categoryOrder: 6, displayOrder: 1, price: 5, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Purè di Patate", category: "Contorni", categoryOrder: 6, displayOrder: 2, price: 6, allergens: "latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Fagioli all'Uccelletto", category: "Contorni", categoryOrder: 6, displayOrder: 3, price: 6, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Insalata Mista", category: "Contorni", categoryOrder: 6, displayOrder: 4, price: 6, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Patate al Forno", category: "Contorni", categoryOrder: 6, displayOrder: 5, price: 6, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Broccoli Bolliti o Saltati", category: "Contorni", categoryOrder: 6, displayOrder: 6, price: 6, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Catalogna Bollita o Saltata", category: "Contorni", categoryOrder: 6, displayOrder: 7, price: 6, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Pomodori alla Calabrese", category: "Contorni", categoryOrder: 6, displayOrder: 8, price: 7, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Caponata", category: "Contorni", categoryOrder: 6, displayOrder: 9, price: 8, allergens: "sedano", isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },

    // DOLCI (categoryOrder: 7)
    { name: "Mousse al Cioccolato Fondente", category: "Dolci", categoryOrder: 7, displayOrder: 1, price: 7, allergens: "uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Mousse ai Tre Cioccolati", category: "Dolci", categoryOrder: 7, displayOrder: 2, price: 7, allergens: "uova, latte", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Mousse al Cioccolato e Marmellata di Lampone", category: "Dolci", categoryOrder: 7, displayOrder: 3, price: 7, allergens: "uova, latte", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Mousse Cioccolato e Gianduia", category: "Dolci", categoryOrder: 7, displayOrder: 4, price: 7, allergens: "glutine, uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Crostata di Marmellata di Frutti di Bosco", category: "Dolci", categoryOrder: 7, displayOrder: 5, price: 7, allergens: "glutine, uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Tiramisù", category: "Dolci", categoryOrder: 7, displayOrder: 6, price: 7, allergens: "glutine, uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: true },
    { name: "Cheese Cake", category: "Dolci", categoryOrder: 7, displayOrder: 7, price: 7, allergens: "glutine, uova, latte", isVegetarian: true, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },

    // BEVANDE (categoryOrder: 8)
    { name: "Acqua Panna o San Pellegrino 1/2 Litro", category: "Bevande", categoryOrder: 8, displayOrder: 1, price: 2, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Acqua Panna o San Pellegrino 1 Litro", category: "Bevande", categoryOrder: 8, displayOrder: 2, price: 4, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Coca Cola Bottiglia (0,33 L)", category: "Bevande", categoryOrder: 8, displayOrder: 3, price: 4, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Birra Beck's 0,33 L", category: "Bevande", categoryOrder: 8, displayOrder: 4, price: 5, allergens: "glutine", isVegetarian: false, isVegan: false, isGlutenFree: false, isSpicy: false, isChefSpecial: false },
    { name: "Vino Bianco o Rosso sfusi al Litro", category: "Bevande", categoryOrder: 8, displayOrder: 5, price: 16, allergens: "anidride solforosa", isVegetarian: false, isVegan: false, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
    { name: "Caffè", category: "Bevande", categoryOrder: 8, displayOrder: 6, price: 2, allergens: null, isVegetarian: true, isVegan: true, isGlutenFree: true, isSpicy: false, isChefSpecial: false },
  ];

  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: {
        name: item.name,
        category: item.category,
        categoryOrder: item.categoryOrder,
        displayOrder: item.displayOrder,
        description: "description" in item ? (item as Record<string, unknown>).description as string : undefined,
        price: item.price,
        allergens: item.allergens,
        isVegetarian: item.isVegetarian,
        isVegan: item.isVegan,
        isGlutenFree: item.isGlutenFree,
        isSpicy: item.isSpicy,
        isChefSpecial: item.isChefSpecial,
      },
    });
  }
  console.log(`Seeded ${menuItems.length} menu items`);

  // --- ADMIN USER ---
  const password = process.env.ADMIN_SEED_PASSWORD || randomBytes(12).toString("base64url");
  if (!process.env.ADMIN_SEED_PASSWORD) {
    console.log(`Generated admin password: ${password}`);
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.adminUser.create({
    data: {
      username: "taverna_admin",
      email: "admin@latavernadegliamici.it",
      passwordHash,
      fullName: "Amministratore",
      role: "admin",
      isActive: true,
    },
  });
  console.log("Seeded admin user (username: taverna_admin)");

  // --- GALLERY IMAGES ---
  const galleryImages = [
    // Ambiente
    { imagePath: "/images/gallery/apparecchiato.jpg", category: "ambiente", title: "Tavola apparecchiata", displayOrder: 1, isFeatured: true },
    { imagePath: "/images/gallery/cameriere-che-versa-vino.jpg", category: "ambiente", title: "Servizio vini", displayOrder: 2, isFeatured: false },
    { imagePath: "/images/gallery/interno-bello.jpg", category: "ambiente", title: "Interno del locale", displayOrder: 3, isFeatured: true },
    { imagePath: "/images/gallery/sala.jpg", category: "ambiente", title: "La sala", displayOrder: 4, isFeatured: false },
    { imagePath: "/images/gallery/sala-vino.jpg", category: "ambiente", title: "Sala vini", displayOrder: 5, isFeatured: false },
    { imagePath: "/images/gallery/sala-vino1.jpg", category: "ambiente", title: "Sala vini 2", displayOrder: 6, isFeatured: false },
    { imagePath: "/images/gallery/sala-vini2.jpg", category: "ambiente", title: "Sala vini 3", displayOrder: 7, isFeatured: false },
    { imagePath: "/images/gallery/taverna-degli-amici.jpg", category: "ambiente", title: "La Taverna degli Amici", displayOrder: 8, isFeatured: true },
    { imagePath: "/images/gallery/vini.jpg", category: "ambiente", title: "Selezione vini", displayOrder: 9, isFeatured: false },
    { imagePath: "/images/gallery/ragù-anatra.jpg", category: "ambiente", title: "Ragù d'anatra", displayOrder: 10, isFeatured: false },
    // Piatti
    { imagePath: "/images/gallery/agnello.jpg", category: "piatti", title: "Agnello", displayOrder: 1, isFeatured: false },
    { imagePath: "/images/gallery/bruschette.jpg", category: "piatti", title: "Bruschette", displayOrder: 2, isFeatured: true },
    { imagePath: "/images/gallery/bruschette-con-lardo.jpg", category: "piatti", title: "Bruschette con lardo", displayOrder: 3, isFeatured: false },
    { imagePath: "/images/gallery/cacio-e-pepe.jpg", category: "piatti", title: "Cacio e pepe", displayOrder: 4, isFeatured: false },
    { imagePath: "/images/gallery/carbonara.jpg", category: "piatti", title: "Carbonara", displayOrder: 5, isFeatured: true },
    { imagePath: "/images/gallery/carne-e-patate.jpg", category: "piatti", title: "Carne e patate", displayOrder: 6, isFeatured: false },
    { imagePath: "/images/gallery/carne-tagliata.jpg", category: "piatti", title: "Tagliata", displayOrder: 7, isFeatured: true },
    { imagePath: "/images/gallery/carne-tagliata1.jpg", category: "piatti", title: "Tagliata 2", displayOrder: 8, isFeatured: false },
    { imagePath: "/images/gallery/dolce.jpg", category: "piatti", title: "Dolce", displayOrder: 9, isFeatured: false },
    { imagePath: "/images/gallery/dolci.jpg", category: "piatti", title: "Dolci", displayOrder: 10, isFeatured: false },
    { imagePath: "/images/gallery/orecchiette-al-ragù.jpg", category: "piatti", title: "Orecchiette al ragù", displayOrder: 11, isFeatured: true },
    { imagePath: "/images/gallery/pasta.jpg", category: "piatti", title: "Pasta", displayOrder: 12, isFeatured: false },
    { imagePath: "/images/gallery/pasta1.jpg", category: "piatti", title: "Pasta 2", displayOrder: 13, isFeatured: false },
    { imagePath: "/images/gallery/pasta2.jpg", category: "piatti", title: "Pasta 3", displayOrder: 14, isFeatured: false },
    { imagePath: "/images/gallery/salsiccia-sulla-brace.jpg", category: "piatti", title: "Salsiccia sulla brace", displayOrder: 15, isFeatured: false },
    { imagePath: "/images/gallery/spiedini-di-carne.jpg", category: "piatti", title: "Spiedini di carne", displayOrder: 16, isFeatured: false },
    { imagePath: "/images/gallery/spiedini-di-carne1.jpg", category: "piatti", title: "Spiedini di carne 2", displayOrder: 17, isFeatured: false },
    { imagePath: "/images/gallery/tartare.jpg", category: "piatti", title: "Tartare", displayOrder: 18, isFeatured: false },
    { imagePath: "/images/gallery/torta.jpg", category: "piatti", title: "Torta", displayOrder: 19, isFeatured: false },
    { imagePath: "/images/gallery/torta-al-cioccolato.jpg", category: "piatti", title: "Torta al cioccolato", displayOrder: 20, isFeatured: true },
  ];

  for (const img of galleryImages) {
    await prisma.galleryImage.create({ data: img });
  }
  console.log(`Seeded ${galleryImages.length} gallery images`);

  // --- SETTINGS ---
  const settings = [
    { key: "booking_enabled", value: "true", type: "boolean", description: "Abilita/disabilita il sistema di prenotazioni" },
    { key: "max_booking_days_ahead", value: "30", type: "number", description: "Numero massimo di giorni in anticipo per prenotare" },
    { key: "tables_total", value: "20", type: "number", description: "Numero totale di tavoli disponibili" },
    { key: "max_guests_per_booking", value: "12", type: "number", description: "Numero massimo di ospiti per prenotazione" },
  ];

  for (const setting of settings) {
    await prisma.setting.create({ data: setting });
  }
  console.log(`Seeded ${settings.length} settings`);

  console.log("Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
