#!/usr/bin/env node

/**
 * Image Optimization Script for Partner Logos
 * Resizes images to max 200px width and converts to WebP format
 * 
 * Usage: node optimize-images.js
 * 
 * Prerequisites: npm install sharp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PARTNER_LOGO_DIR = path.join(__dirname, 'public', 'partnerLogo');
const MAX_WIDTH = 200;
const QUALITY = 85; // WebP quality (0-100)

async function optimizeImages() {
  try {
    // Check if directory exists
    if (!fs.existsSync(PARTNER_LOGO_DIR)) {
      console.error(`❌ Directory not found: ${PARTNER_LOGO_DIR}`);
      process.exit(1);
    }

    // Read all files in the directory
    const files = fs.readdirSync(PARTNER_LOGO_DIR);
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg|webp)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      console.log('⚠️  No image files found in the directory');
      return;
    }

    console.log(`📸 Found ${imageFiles.length} images to optimize\n`);

    let processedCount = 0;
    let skippedCount = 0;

    for (const file of imageFiles) {
      const inputPath = path.join(PARTNER_LOGO_DIR, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const outputPath = path.join(PARTNER_LOGO_DIR, `${baseName}.webp`);

      // Skip if already a WebP with correct name
      if (ext.toLowerCase() === '.webp' && file === `${baseName}.webp`) {
        console.log(`⏭️  Skipped: ${file} (already WebP)`);
        skippedCount++;
        continue;
      }

      try {
        // Get original image metadata
        const metadata = await sharp(inputPath).metadata();
        const originalSize = fs.statSync(inputPath).size;
        
        console.log(`🔄 Processing: ${file}`);
        console.log(`   Original: ${metadata.width}x${metadata.height} - ${(originalSize / 1024 / 1024).toFixed(2)}MB`);

        // Resize and convert to WebP
        await sharp(inputPath)
          .resize(MAX_WIDTH, null, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: QUALITY })
          .toFile(outputPath);

        const newSize = fs.statSync(outputPath).size;
        const newMetadata = await sharp(outputPath).metadata();
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

        console.log(`   ✅ Optimized: ${newMetadata.width}x${newMetadata.height} - ${(newSize / 1024).toFixed(2)}KB`);
        console.log(`   💾 Saved: ${savings}% (${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(2)}KB)\n`);

        processedCount++;

        // Optionally delete original file (commented out for safety)
        // fs.unlinkSync(inputPath);
        // console.log(`   🗑️  Deleted original: ${file}\n`);

      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message, '\n');
      }
    }

    console.log('═══════════════════════════════════════');
    console.log(`✨ Optimization Complete!`);
    console.log(`   Processed: ${processedCount} images`);
    console.log(`   Skipped: ${skippedCount} images`);
    console.log('═══════════════════════════════════════\n');

    if (processedCount > 0) {
      console.log('📝 Next Steps:');
      console.log('   1. Update your code to use .webp extensions');
      console.log('   2. Test the images in your browser');
      console.log('   3. Delete original PNG/JPG files if satisfied\n');
    }

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the optimization
console.log('🚀 Starting Image Optimization...\n');
optimizeImages();
