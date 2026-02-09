#!/bin/bash

# 🚀 Script de mise à jour et publication du portfolio
# Automatise l'ajout, le commit et le push des modifications

echo "🔄 Mise à jour du portfolio de Sébastien Duhaillier..."

# Vérifier si on est dans le bon dossier
if [ ! -f "index.html" ]; then
    echo "❌ Erreur: Ce script doit être exécuté depuis le dossier du portfolio"
    exit 1
fi

# Ajouter tous les fichiers modifiés
echo "📦 Ajout des fichiers modifiés..."
git add .

# Vérifier s'il y a des modifications
if git diff --cached --quiet; then
    echo "ℹ️  Aucune modification détectée"
    exit 0
fi

# Demander un message de commit
read -p "💬 Message de commit (ou Entrée pour un message par défaut): " commit_message

if [ -z "$commit_message" ]; then
    commit_message="🔄 Mise à jour du portfolio - $(date +'%d/%m/%Y à %H:%M')"
fi

# Commit des modifications
echo "💾 Commit des modifications..."
git commit -m "$commit_message"

# Push vers GitHub (si le remote est configuré)
if git remote get-url origin >/dev/null 2>&1; then
    echo "🚀 Push vers GitHub..."
    git push origin main
    echo "✅ Portfolio mis à jour avec succès !"
    echo "🌐 Votre portfolio sera bientôt visible sur GitHub Pages"
else
    echo "⚠️  Remote GitHub non configuré. Exécutez d'abord :"
    echo "   git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git"
    echo "   git push -u origin main"
fi
