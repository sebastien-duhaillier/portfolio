# 📧 CONFIGURATION DU FORMULAIRE DE CONTACT

## 🎯 OPTION 1 : FORMSPREE (RECOMMANDÉE - GRATUITE ET SIMPLE)

### Étapes :
1. **Aller sur [Formspree.io](https://formspree.io)**
2. **Créer un compte gratuit** avec votre email `duhaillier.sebastien@free.fr`
3. **Créer un nouveau formulaire**
4. **Copier votre FORM_ID** (ex: `mwkdvzql`)
5. **Remplacer dans index.html** :
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Par :
   ```html
   <form class="contact-form" action="https://formspree.io/f/mwkdvzql" method="POST">
   ```

### ✅ Avantages Formspree :
- ✅ **Gratuit** jusqu'à 50 emails/mois
- ✅ **Aucune configuration serveur** requise
- ✅ **Protection anti-spam** intégrée
- ✅ **Fonctionne sur GitHub Pages**
- ✅ **Notifications email** automatiques

---

## 🎯 OPTION 2 : SCRIPT PHP (SERVEUR REQUIS)

### Si vous hébergez sur un serveur avec PHP :
1. **Le fichier `contact.php` est déjà créé**
2. **Vérifier que votre serveur supporte `mail()`**
3. **Modifier dans index.html** :
   ```html
   <form class="contact-form" action="contact.php" method="POST">
   ```

### ⚠️ Limites du script PHP :
- ❌ **Ne fonctionne pas** sur GitHub Pages
- ❌ **Serveur requis** avec fonction mail()
- ❌ **Risque de spam** plus élevé

---

## 🎯 OPTION 3 : EMAILJS (ALTERNATIVE)

### Si vous préférez EmailJS :
1. **Aller sur [EmailJS.com](https://emailjs.com)**
2. **Créer un compte et configurer un service email**
3. **Récupérer vos clés API**
4. **Intégrer le SDK EmailJS**

---

## 🚀 RECOMMANDATION

**Utilisez FORMSPREE** car :
1. ✅ **Parfait pour GitHub Pages**
2. ✅ **Configuration en 2 minutes**
3. ✅ **Gratuit et fiable**
4. ✅ **Déjà intégré dans votre code**

## 📝 ÉTAPES FINALES

1. **Configurer Formspree** (5 minutes)
2. **Remplacer YOUR_FORM_ID** dans index.html
3. **Tester le formulaire**
4. **Push vers GitHub**

Votre formulaire de contact sera fonctionnel ! 🎉
