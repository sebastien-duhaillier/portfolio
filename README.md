# Portfolio Personnel

## Description
Site web portfolio moderne et responsive pour présenter votre travail, compétences et CV de manière professionnelle.

## Fonctionnalités
- **Design moderne et responsive** : Compatible avec tous les appareils (desktop, tablette, mobile)
- **Navigation fluide** : Scroll smooth et menu hamburger pour mobile
- **Sections complètes** :
  - Accueil avec présentation
  - À propos avec compétences
  - Portfolio de projets
  - CV téléchargeable
  - Formulaire de contact
- **Animations** : Effets d'apparition au scroll et interactions
- **Performance optimisée** : Code clean et optimisé

## Structure du projet
```
portfolio/
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles CSS
├── js/
│   └── main.js        # JavaScript
├── images/            # Dossier pour les images
│   ├── profile.jpg    # Photo de profil (à ajouter)
│   ├── project1.jpg   # Image projet 1 (à ajouter)
│   ├── project2.jpg   # Image projet 2 (à ajouter)
│   └── project3.jpg   # Image projet 3 (à ajouter)
├── cv/
│   └── mon-cv.pdf     # Votre CV au format PDF (à ajouter)
└── README.md          # Ce fichier
```

## Installation et utilisation

1. **Ajoutez vos contenus personnels** :
   - Remplacez "Votre Nom" par votre nom dans `index.html`
   - Ajoutez votre photo de profil : `images/profile.jpg`
   - Ajoutez vos images de projets : `images/project1.jpg`, etc.
   - Ajoutez votre CV : `cv/mon-cv.pdf`

2. **Personnalisez les informations** :
   - Modifiez la description dans la section hero
   - Mettez à jour les compétences dans la section "À propos"
   - Remplacez les projets par les vôtres
   - Mettez à jour les informations de contact

3. **Ouvrez le site** :
   - Ouvrez `index.html` dans votre navigateur
   - Ou hébergez-le sur un serveur web

## Personnalisation

### Couleurs
Les couleurs principales sont définies dans `:root` du fichier CSS :
- `--primary-color` : Couleur principale
- `--secondary-color` : Couleur secondaire
- `--accent-color` : Couleur d'accent

### Sections à modifier

#### 1. Informations personnelles (index.html)
- Ligne 25 : Nom et titre
- Ligne 26-28 : Description
- Ligne 54-64 : Texte de présentation
- Ligne 199-205 : Informations de contact

#### 2. Compétences (index.html)
- Ligne 66-91 : Liste des compétences techniques

#### 3. Projets (index.html)
- Ligne 106-175 : Détails de chaque projet

#### 4. CV (index.html)
- Ligne 186-194 : Informations du CV

## Fonctionnalités avancées

### Formulaire de contact
Le formulaire est configuré pour afficher un message de confirmation. Pour l'activer réellement :
1. Configurez un service d'envoi d'emails (EmailJS, Formspree, etc.)
2. Modifiez la fonction dans `js/main.js` ligne 65

### Lazy loading
Les images sont chargées de manière optimisée pour améliorer les performances.

### Animations
- Animation d'apparition au scroll
- Effet parallax léger
- Transitions fluides

## Compatibilité
- Tous les navigateurs modernes
- Responsive design (mobile, tablette, desktop)
- Performance optimisée

## Support
Ce template est prêt à l'emploi. Il vous suffit de :
1. Ajouter vos contenus personnels
2. Personnaliser les couleurs si souhaité
3. Tester sur différents appareils

## Hébergement
Vous pouvez héberger ce site sur :
- GitHub Pages (gratuit)
- Netlify (gratuit)
- Vercel (gratuit)
- Votre hébergeur web habituel

---

**Bonne chance avec votre nouveau portfolio !** 🚀
