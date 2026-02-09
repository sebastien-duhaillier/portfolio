#!/bin/bash

# Script d'aide pour configurer le portfolio
echo "🎨 Configuration de votre Portfolio Personnel"
echo "============================================="
echo ""

# Vérification des fichiers
echo "📋 Vérification des fichiers..."
files=("index.html" "demo.html" "css/style.css" "js/main.js")
missing_files=()

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MANQUANT)"
        missing_files+=("$file")
    fi
done

echo ""

# Vérification des dossiers
echo "📁 Vérification des dossiers..."
dirs=("images" "cv" "css" "js")
missing_dirs=()

for dir in "${dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/"
    else
        echo "❌ $dir/ (MANQUANT)"
        missing_dirs+=("$dir")
    fi
done

echo ""

# Images à ajouter
echo "🖼️  Images à ajouter:"
images=("images/profile.jpg" "images/project1.jpg" "images/project2.jpg" "images/project3.jpg" "cv/mon-cv.pdf")
for img in "${images[@]}"; do
    if [ -f "$img" ]; then
        echo "✅ $img"
    else
        echo "📝 $img (À AJOUTER)"
    fi
done

echo ""
echo "🔧 Étapes suivantes:"
echo "1. Ouvrez demo.html dans votre navigateur pour voir le rendu"
echo "2. Personnalisez index.html avec vos informations"
echo "3. Ajoutez vos images dans le dossier images/"
echo "4. Consultez PERSONNALISATION.md pour les détails"
echo ""
echo "🌐 Pour ouvrir le site:"
echo "   - Double-cliquez sur demo.html"
echo "   - Ou ouvrez votre navigateur et allez sur file://$PWD/demo.html"
echo ""
echo "📚 Fichiers de documentation:"
echo "   - DEMARRAGE.md      : Guide de démarrage rapide"
echo "   - PERSONNALISATION.md : Guide de personnalisation détaillé"
echo "   - README.md         : Documentation complète"
echo ""
echo "✨ Votre portfolio est prêt ! Bon développement !"
