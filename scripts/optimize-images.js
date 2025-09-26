const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images-optimized';
const QUALITY = 80; // Qualité WebP (0-100)
const MAX_WIDTH = 1920; // Largeur maximale
const MAX_HEIGHT = 1080; // Hauteur maximale

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Fonction pour optimiser une image
async function optimizeImage(inputPath, outputPath) {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Optimisation de: ${inputPath}`);
        console.log(`Dimensions originales: ${metadata.width}x${metadata.height}`);
        console.log(`Taille originale: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);

        // Redimensionner si nécessaire
        let pipeline = sharp(inputPath);

        if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
            pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Optimiser en WebP
        await pipeline
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const optimizedSize = fs.statSync(outputPath).size / 1024 / 1024;
        console.log(`Taille optimisée: ${optimizedSize.toFixed(2)} MB`);
        console.log(`Réduction: ${((1 - optimizedSize / (fs.statSync(inputPath).size / 1024 / 1024)) * 100).toFixed(1)}%`);
        console.log('---');
    } catch (error) {
        console.error(`Erreur lors de l'optimisation de ${inputPath}:`, error);
    }
}

// Fonction récursive pour parcourir les dossiers
async function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Créer le dossier correspondant dans la sortie
            const relativePath = path.relative(INPUT_DIR, fullPath);
            const outputSubDir = path.join(OUTPUT_DIR, relativePath);
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }

            await processDirectory(fullPath);
        } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
            // Optimiser l'image
            const relativePath = path.relative(INPUT_DIR, fullPath);
            const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            await optimizeImage(fullPath, outputPath);
        }
    }
}

// Exécuter l'optimisation
async function main() {
    console.log('🚀 Début de l\'optimisation des images...');
    console.log(`📁 Dossier source: ${INPUT_DIR}`);
    console.log(`📁 Dossier de sortie: ${OUTPUT_DIR}`);
    console.log(`⚙️ Qualité WebP: ${QUALITY}%`);
    console.log(`📏 Dimensions max: ${MAX_WIDTH}x${MAX_HEIGHT}`);
    console.log('---');

    await processDirectory(INPUT_DIR);

    console.log('✅ Optimisation terminée !');
    console.log(`📁 Images optimisées disponibles dans: ${OUTPUT_DIR}`);
}

main().catch(console.error);
