#!/bin/bash

echo "🔍 VÉRIFICATION DE L'ÉTAT GITHUB PAGES"
echo "=====================================

📁 Repository: sebastien-duhaillier/portfolio
🌐 URL attendue: https://sebastien-duhaillier.github.io/portfolio/

✅ VÉRIFICATIONS À FAIRE SUR GITHUB :

1. 🔓 Repository PUBLIC
   → Allez sur: https://github.com/sebastien-duhaillier/portfolio/settings
   → Section 'Danger Zone' → 'Change repository visibility'
   → Sélectionnez 'Make public' si nécessaire

2. 📄 GitHub Pages ACTIVÉ
   → Allez sur: https://github.com/sebastien-duhaillier/portfolio/settings/pages
   → Source: 'Deploy from a branch'
   → Branch: 'main' 
   → Folder: '/ (root)'
   → Cliquez 'Save'

3. ⏳ ATTENDRE LE DÉPLOIEMENT (2-10 minutes)
   → GitHub Pages indiquera 'Your site is published at...'

4. 🧪 TESTER LA PAGE
   → URL: https://sebastien-duhaillier.github.io/portfolio/
   → Essayez en navigation privée si problème de cache

📋 COMMANDES UTILES :
"
echo "🔄 Status Git local :"
git status --porcelain

echo ""
echo "📡 Remote configuré :"
git remote -v

echo ""
echo "📝 Dernier commit :"
git log --oneline -1

echo ""
echo "🔗 Fichiers principaux présents :"
ls -la index.html README.md 2>/dev/null || echo "❌ Fichiers manquants !"

echo ""
echo "⚡ Pour forcer un nouveau déploiement :"
echo "   git commit --allow-empty -m 'Trigger Pages rebuild'"
echo "   git push"

echo ""
echo "🌐 TESTEZ L'URL : https://sebastien-duhaillier.github.io/portfolio/"
