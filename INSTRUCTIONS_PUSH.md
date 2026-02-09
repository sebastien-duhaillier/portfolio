# 🚀 INSTRUCTIONS DE PUBLICATION GITHUB

## Étape 1 : Créer le repository sur GitHub
1. Aller sur [GitHub.com](https://github.com) et se connecter avec le compte `sebastien-duhaillier`
2. Cliquer sur le bouton "+" (en haut à droite) → "New repository"
3. Nom du repository : `portfolio`
4. Description : `Portfolio professionnel de Sébastien Duhaillier - Développeur Web Full Stack en formation`
5. ✅ Laisser PUBLIC (pour que le portfolio soit visible)
6. ❌ NE PAS cocher "Add a README file" (on en a déjà un)
7. ❌ NE PAS ajouter .gitignore (on en a déjà un)
8. Cliquer sur "Create repository"

## Étape 2 : Connecter et pousser le code
Après avoir créé le repository, exécuter ces commandes dans le terminal :

```bash
# Ajouter le repository distant
git remote add origin https://github.com/sebastien-duhaillier/portfolio.git

# Pousser le code vers GitHub
git push -u origin main
```

## Étape 3 : Activer GitHub Pages
1. Aller dans les "Settings" du repository
2. Faire défiler jusqu'à la section "Pages" (dans le menu de gauche)
3. Dans "Source", sélectionner "Deploy from a branch"
4. Sélectionner la branche "main" et le dossier "/ (root)"
5. Cliquer sur "Save"

## 🌐 URL finale du portfolio
Après activation de GitHub Pages, votre portfolio sera accessible à :
`https://sebastien-duhaillier.github.io/portfolio/`

## ✅ STATUS ACTUEL
- ✅ 6 commits prêts à être poussés
- ✅ Tous les liens fonctionnels et vérifiés
- ✅ CV PDF téléchargeable
- ✅ Images de projets intégrées
- ✅ Badge de chantier humoristique
- ✅ Repository Git configuré et prêt

## 🔄 Futures mises à jour
Pour mettre à jour le portfolio après publication :
```bash
# Faire vos modifications, puis :
git add .
git commit -m "Description des changements"
git push
```

Ou utiliser le script automatique :
```bash
./update-portfolio.sh
```
