# 🚀 Guide de Publication sur GitHub

## Étapes pour publier le portfolio sur GitHub

### 1. Créer le repository sur GitHub
1. Aller sur [GitHub.com](https://github.com) et se connecter
2. Cliquer sur le bouton "+" en haut à droite et sélectionner "New repository"
3. Nommer le repository : `portfolio` ou `sebastien-duhaillier-portfolio`
4. Ajouter une description : "Portfolio professionnel de Sébastien Duhaillier - Développeur en recherche d'alternance CDA"
5. Laisser le repository **PUBLIC** pour qu'il soit visible
6. Ne pas cocher "Add a README file" (nous en avons déjà un)
7. Cliquer sur "Create repository"

### 2. Connecter le repository local au repository GitHub
Exécuter ces commandes dans le terminal depuis le dossier portfolio :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```

### 3. Activer GitHub Pages (optionnel)
1. Aller dans les Settings du repository sur GitHub
2. Faire défiler jusqu'à la section "Pages"
3. Dans "Source", sélectionner "Deploy from a branch"
4. Sélectionner "main" et "/ (root)"
5. Cliquer sur "Save"

Votre portfolio sera alors accessible à l'adresse : 
`https://VOTRE_USERNAME.github.io/portfolio/`

### 4. Commandes Git utiles pour la suite

```bash
# Ajouter des modifications
git add .
git commit -m "Description des modifications"
git push

# Vérifier l'état
git status

# Voir l'historique
git log --oneline
```

## ✅ Status actuel
- ✅ Repository Git initialisé
- ✅ Tous les fichiers ajoutés et commités
- ✅ Branche principale nommée 'main'
- ✅ Configuration Git avec nom et email
- ✅ Fichier .gitignore créé
- 🔄 **PROCHAINE ÉTAPE** : Créer le repository sur GitHub et faire le push

## 📝 Notes importantes
- Le repository est prêt à être publié
- Tous les liens et informations sont à jour
- Les images des projets sont incluses
- Le CV PDF est inclus dans le repository
- Le badge de chantier est fonctionnel et humoristique
