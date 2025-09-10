# 🌟 Portfolio Personnel - Maximilien Bruyère

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.12-blue)

## 📋 À propos

Portfolio personnel interactif développé avec React et TypeScript, présentant mes compétences, projets et expériences en tant qu'étudiant en informatique et réseaux.

🔗 **[Voir le portfolio en ligne](https://maximilien-bruyere.github.io/profile/)**

## ✨ Fonctionnalités

- 🌐 **Interface multilingue** (Français/Anglais)
- 📱 **Design responsive** adapté à tous les écrans
- 🎨 **Interface moderne** avec animations fluides
- 📄 **Téléchargement de CV** dans les deux langues
- 🚀 **Navigation smooth scroll** entre les sections
- 🌙 **Design sombre élégant**
- ⚡ **Performance optimisée** avec Vite

## 🛠️ Technologies utilisées

### Frontend
- **React 19** - Bibliothèque UI moderne
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS 4** - Framework CSS utilitaire
- **React i18next** - Internationalisation
- **React Scroll** - Navigation fluide

### Outils de développement
- **Vite** - Bundler et serveur de développement rapide
- **ESLint** - Linter pour la qualité du code
- **GitHub Pages** - Déploiement automatique

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/maximilien-bruyere/profile.git

# Aller dans le dossier
cd profile

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Build et déploiement
```bash
# Créer une version de production
npm run build

# Prévisualiser la version de production
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── layout/          # Header, Footer
│   └── ui/              # Navigation, Hamburger
├── pages/profile/       # Pages principales
│   └── sections/        # Sections du portfolio
├── hooks/               # Hooks personnalisés
├── contexts/            # Contextes React
├── locales/             # Fichiers de traduction
└── assets/              # Images, fonts, CV
```

## 🎨 Sections du portfolio

1. **🏠 Accueil** - Présentation et appel à l'action
2. **👨‍💻 À propos** - Compétences, formation et expériences
3. **💼 Portfolio** - Projets personnels et académiques
4. **📞 Contact** - Informations de contact et liens sociaux

## 🌍 Internationalisation

Le portfolio est disponible en :
- 🇫🇷 Français
- 🇬🇧 Anglais

La langue est automatiquement détectée et peut être changée via le sélecteur dans la navigation.

## 🎯 Compétences mises en avant

### Technologies Web
- HTML5, CSS3, JavaScript, TypeScript
- React, Tailwind CSS, Bootstrap
- PHP, NestJS, Prisma

### Systèmes & Infrastructure
- Windows, Linux (RedHat, Debian)
- Docker, Kubernetes, Ansible
- Cisco, Fortinet

### Outils de développement
- Git, GitHub, Docker
- VS Code, IntelliJ

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Configuration

### Variables d'environnement
Le projet utilise la configuration Vite par défaut. Pour personnaliser :

```typescript
// vite.config.ts
export default defineConfig({
  base: "/profile", // Chemin de base pour GitHub Pages
  plugins: [react(), tailwindcss()],
});
```

### Personnalisation des couleurs
Les couleurs sont définies dans `tailwind.config.js` et peuvent être facilement modifiées.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Maximilien Bruyère**
- 🌐 Portfolio: [maximilien-bruyere.github.io/profile](https://maximilien-bruyere.github.io/profile/)
- 💼 LinkedIn: [maximilien-bruyere](https://linkedin.com/in/maximilien-bruyere)
- 📧 Email: maximilien-bruyere@hotmail.com
- 🐙 GitHub: [@maximilien-bruyere](https://github.com/maximilien-bruyere)

---

⭐ **N'hésitez pas à laisser une étoile si ce projet vous plaît !**