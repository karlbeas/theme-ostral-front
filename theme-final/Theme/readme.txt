=====================================================
  ÖSTRAL PLAY — Static HTML5 Theme
  Version 1.0 — Mars 2026
=====================================================

DESCRIPTION
-----------
Ce thème HTML5 statique est une reconstitution pixel-perfect
de l'interface Östral Play, généré à partir du prototype
React + TypeScript original.

Stack technique :
  - HTML5 sémantique
  - CSS3 (Bootstrap 5 + main.css)
  - JavaScript (jQuery 3 + main.js)
  - Bootstrap Icons 1.11
  - Google Fonts (Inter)

Tous les assets Bootstrap, jQuery et Bootstrap Icons
sont chargés depuis des CDN. Aucun outil de build requis.


STRUCTURE DES FICHIERS
-----------------------
theme-final/Theme/
├── Assets/
│   ├── CSS/
│   │   └── main.css           ← Feuille de style principale
│   ├── JS/
│   │   └── main.js            ← Script jQuery interactif
│   └── Medias/
│       ├── Logos/             ← Logos Östral Play
│       └── Img/               ← Images, posters, slides
├── index.html              ← Page d'accueil
├── login.html              ← Connexion
├── register.html           ← Inscription
├── movies.html             ← Catalogue films
├── movie-detail.html       ← Détail film
├── movie-player.html       ← Lecteur film
├── series.html             ← Catalogue séries
├── series-detail.html      ← Détail série
├── episode-player.html     ← Lecteur épisode
├── live-tv.html            ← TV Live
├── live-player.html        ← Lecteur TV Live
├── search.html             ← Recherche
├── my-list.html            ← Ma Liste
├── profile.html            ← Profil utilisateur
├── faq.html                ← Foire aux questions
├── contact.html            ← Formulaire de contact
├── help-center.html        ← Centre d'aide
├── report-issue.html       ← Signalement de problème
├── accessibility.html      ← Accessibilité
├── terms.html              ← Conditions d'utilisation
├── privacy.html            ← Politique de confidentialité
├── legal.html              ← Mentions légales
├── about.html              ← À propos
├── press.html              ← Espace presse
└── readme.txt              ← Ce fichier


MISE EN PLACE DES ASSETS MÉDIAS
--------------------------------
Les chemins relatifs suivants sont utilisés dans les HTML :
  Assets/Medias/Logos/logo.png
  Assets/Medias/Logos/logo-complet.png
  Assets/Medias/Img/background.png
  Assets/Medias/Img/slide-1.jpg
  Assets/Medias/Img/slide-2.jpg
  Assets/Medias/Img/slide-3.jpg
  Assets/Medias/Img/poster-1.jpg à poster-11.jpg
  Assets/Medias/Img/player-1.jpg à player-3.jpg

Pour utiliser le thème avec les vraies images :
1. Copier le contenu de /logos/ vers Assets/Medias/Logos/
2. Copier le contenu de /medias/ vers Assets/Medias/Img/

Alternativement, vous pouvez utiliser les URLs raw GitHub :
https://raw.githubusercontent.com/karlbeas/theme-ostral-front/main/logos/logo.png
https://raw.githubusercontent.com/karlbeas/theme-ostral-front/main/medias/poster-1.jpg
etc.


COMMENT OUVRIR LE THÈME
-------------------------
1. Clonez ou décompressez ce thème dans un dossier local
2. Ouvrez index.html dans n’importe quel navigateur moderne
   (Chrome, Firefox, Safari, Edge)
3. Aucun serveur ni outil de compilation requis

Pour un test avec un serveur local (recommandé) :
  npx serve . —— dans le dossier Theme/
  ou : python -m http.server 8000


INTÉGRATION DANS UN PROJET WEB
--------------------------------
1. Copiez le dossier Assets/ dans votre projet
2. Intégrez main.css dans le <head> de chaque page :
   <link rel="stylesheet" href="Assets/CSS/main.css">
3. Intégrez main.js avant </body> de chaque page :
   <script src="Assets/JS/main.js"></script>
4. Bootstrap 5 et jQuery doivent être chargés AVANT main.js
5. Les classes CSS sont préfixées .op- pour éviter les conflits


BREAKPOINTS RESPONSIVES
------------------------
  Desktop  : ≥ 1200px (6 cards par ligne)
  Laptop   : ≥ 992px  (5 cards par ligne)
  Tablet   : ≥ 768px  (4 cards par ligne)
  Mobile   : ≥ 576px  (3 cards par ligne)
  S.Mobile : < 576px  (2 cards par ligne)


SYSTÈME DE DESIGN
------------------
  Couleur primaire   : #0A0A0A (fond)
  Couleur accent     : #F7941D (orange)
  Texte principal    : #FFFFFF
  Texte secondaire   : #B3B3B3
  Texte atténué     : #666666
  Rayon de bordure   : 12px (carte), 8px (bouton)
  Police             : Inter (Google Fonts)

  Badges :
    4K    → fond #F7941D, texte noir
    HD    → fond #3498DB, texte blanc
    NEW   → fond #27AE60, texte blanc
    LIVE  → fond #E74C3C, texte blanc


LICENCE
--------
Ce thème est généré exclusivement à partir du code source
du dépôt GitHub karlbeas/theme-ostral-front.
Tous droits réservés © 2026 Östral Play SAS.

=====================================================
