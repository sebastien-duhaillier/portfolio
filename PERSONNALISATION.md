# 🎨 Guide de Personnalisation de votre Portfolio

## 📋 Checklist des éléments à personnaliser

### ✅ 1. Informations personnelles (index.html)

**Ligne 25** - Remplacez "Votre Nom" par votre nom :
```html
<h1 class="hero-title">Bonjour, je suis <span class="highlight">VOTRE NOM ICI</span></h1>
```

**Ligne 26** - Modifiez votre titre professionnel :
```html
<p class="hero-subtitle">Votre Titre Professionnel</p>
```

**Ligne 28-30** - Personnalisez votre description :
```html
<p class="hero-description">
    Votre description personnelle ici
</p>
```

### ✅ 2. Section À propos (lignes 54-64)

Remplacez le texte de présentation par le vôtre :
```html
<p>
    Votre présentation personnelle...
</p>
```

### ✅ 3. Compétences techniques (lignes 66-91)

Modifiez les compétences selon votre profil :
- Ajoutez/supprimez des compétences
- Changez les icônes Font Awesome si nécessaire

### ✅ 4. Projets (lignes 106-175)

Pour chaque projet, modifiez :
- **Titre du projet**
- **Description**
- **Technologies utilisées**
- **Liens** vers le projet et GitHub

### ✅ 5. Informations de contact (lignes 199-205)

```html
<p>votre.email@example.com</p>
<p>+33 1 23 45 67 89</p>
<p>Votre Ville, Pays</p>
```

### ✅ 6. Liens sociaux (lignes 206-210)

Mettez à jour les liens vers vos profils :
```html
<a href="https://linkedin.com/in/votre-profil" class="social-link">
<a href="https://github.com/votre-username" class="social-link">
<a href="https://twitter.com/votre-username" class="social-link">
```

## 🖼️ Images à ajouter

### Images obligatoires :

1. **Photo de profil** : `images/profile.jpg`
   - Dimensions recommandées : 400x400px
   - Format : JPG ou PNG
   - Photo professionnelle recommandée

2. **Images de projets** :
   - `images/project1.jpg` (600x400px)
   - `images/project2.jpg` (600x400px)
   - `images/project3.jpg` (600x400px)

3. **CV au format PDF** : `cv/mon-cv.pdf`

### Images optionnelles :
- Logo/favicon : `images/logo.png`
- Images supplémentaires pour d'autres projets

## 📄 CV

### Option 1 : PDF
Ajoutez votre CV au format PDF dans `cv/mon-cv.pdf`

### Option 2 : CV HTML
Personnalisez le fichier `cv/cv-template.html` avec vos informations

## 🎨 Personnalisation des couleurs (css/style.css)

Modifiez les variables CSS (lignes 8-15) :

```css
:root {
    --primary-color: #667eea;     /* Couleur principale */
    --secondary-color: #764ba2;   /* Couleur secondaire */
    --accent-color: #f093fb;      /* Couleur d'accent */
    /* ... */
}
```

### Exemples de palettes de couleurs :

**Palette bleue professionnelle :**
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #60a5fa;
```

**Palette verte moderne :**
```css
--primary-color: #059669;
--secondary-color: #047857;
--accent-color: #34d399;
```

**Palette violette créative :**
```css
--primary-color: #7c3aed;
--secondary-color: #6d28d9;
--accent-color: #a78bfa;
```

## ⚙️ Fonctionnalités avancées

### Formulaire de contact fonctionnel

Pour activer l'envoi d'emails, intégrez un service comme :

1. **EmailJS** (recommandé) :
   - Inscription sur emailjs.com
   - Configurez votre service
   - Modifiez le JavaScript dans `js/main.js`

2. **Formspree** :
   - Inscription sur formspree.io
   - Ajoutez l'action au formulaire

### Google Analytics

Ajoutez avant `</head>` dans index.html :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Publication

### GitHub Pages (gratuit)
1. Créez un repository sur GitHub
2. Uploadez vos fichiers
3. Activez GitHub Pages dans les settings
4. Votre site sera disponible sur `username.github.io/repository-name`

### Netlify (gratuit)
1. Créez un compte sur netlify.com
2. Glissez-déposez votre dossier de projet
3. Votre site est en ligne !

### Vercel (gratuit)
1. Créez un compte sur vercel.com
2. Importez votre projet depuis GitHub
3. Déploiement automatique

## ✅ Checklist finale

- [ ] Nom et titre personnalisés
- [ ] Photo de profil ajoutée
- [ ] Texte de présentation personnalisé
- [ ] Compétences mises à jour
- [ ] Projets personnalisés avec vraies images
- [ ] Informations de contact correctes
- [ ] Liens sociaux mis à jour
- [ ] CV ajouté (PDF ou HTML)
- [ ] Couleurs personnalisées (optionnel)
- [ ] Site testé sur mobile et desktop
- [ ] Site publié en ligne

## 🆘 Aide

Si vous avez des questions ou des problèmes :
1. Vérifiez que tous les fichiers sont bien présents
2. Testez dans différents navigateurs
3. Vérifiez la console développeur (F12) pour les erreurs
4. Assurez-vous que les liens vers les images sont corrects

**Bon développement ! 🎉**
