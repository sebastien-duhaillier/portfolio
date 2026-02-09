#!/bin/bash

# 🔗 Script de vérification des liens du portfolio
echo "🔍 Vérification des liens du portfolio de Sébastien Duhaillier..."

# Vérification du fichier HTML principal
if [ ! -f "index.html" ]; then
    echo "❌ Fichier index.html introuvable"
    exit 1
fi

echo "✅ Fichier index.html trouvé"

# Vérification du CV PDF
if [ -f "cv/cv pdf/Sebastien_Duhaillier_CV (3).pdf" ]; then
    echo "✅ CV PDF trouvé : cv/cv pdf/Sebastien_Duhaillier_CV (3).pdf"
else
    echo "❌ CV PDF introuvable"
fi

# Vérification des images de projets
if [ -f "images/photo/blablabook.jpg" ]; then
    echo "✅ Image BlablaBook frontend trouvée"
else
    echo "❌ Image BlablaBook frontend introuvable"
fi

if [ -f "images/photo/back.jpg" ]; then
    echo "✅ Image BlablaBook backend trouvée"
else
    echo "❌ Image BlablaBook backend introuvable"
fi

if [ -f "images/photo/Sans titre.jpg" ]; then
    echo "✅ Photo de profil trouvée"
else
    echo "❌ Photo de profil introuvable"
fi

# Vérification des liens dans le HTML
echo ""
echo "🔗 Liens configurés dans le portfolio :"
echo ""

echo "📄 CV PDF :"
grep -o 'href="cv/cv pdf/[^"]*"' index.html || echo "❌ Lien CV PDF non trouvé"

echo ""
echo "📧 Liens de contact :"
grep -o 'href="mailto:[^"]*"' index.html || echo "❌ Lien email non trouvé"
grep -o 'href="tel:[^"]*"' index.html || echo "❌ Lien téléphone non trouvé"

echo ""
echo "🌐 Liens sociaux :"
grep -o 'href="https://www.linkedin.com/[^"]*"' index.html || echo "❌ Lien LinkedIn non trouvé"
grep -o 'href="https://github.com/[^"]*"' index.html || echo "❌ Liens GitHub non trouvés"

echo ""
echo "🎯 Projets GitHub :"
grep -o 'href="https://github.com/SebastienDuhaillier/[^"]*"' index.html || echo "❌ Liens projets non trouvés"

echo ""
echo "🚀 Pour tester le site localement :"
echo "   php -S localhost:8080"
echo "   ou"
echo "   python3 -m http.server 8080"
echo ""
echo "Puis ouvrir : http://localhost:8080"
