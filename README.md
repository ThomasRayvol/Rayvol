# CV Thomas Richard (Rayvol)

Portfolio website contenant le CV professionnel de Thomas Richard en multiple formats, optimisé pour l'export PDF haute qualité.

## 🎯 Aperçu

Ce projet est un CV statique HTML/CSS avec système d'export automatisé permettant de générer des documents dans différents formats (PDF, Markdown, Word) tout en préservant le design et les polices.

## 📁 Structure du projet

```
.
├── sources/
│   ├── index.html       # CV principal (HTML) - fichier principal pour Cloudflare Pages
│   ├── style.css        # Styles CSS avec media queries print
│   ├── img/
│   │   └── photo.jpg    # Photo de profil
│   └── fonts/
│       ├── segoeui.ttf  # Segoe UI Regular
│       ├── segoeuib.ttf # Segoe UI Bold
│       ├── segoeuii.ttf # Segoe UI Italic
│       ├── segoeuil.ttf # Segoe UI Light
│       ├── segoeuisl.ttf# Segoe UI Semilight
│       └── segoeuiz.ttf # Segoe UI Black
├── scripts/
│   └── export.sh        # Script d'export multi-format
├── output/              # Répertoire de sortie pour les exports
├── CLAUDE.md            # Instructions pour Claude Code
└── README.md            # Cette documentation
```

## 🚀 Utilisation

### Visualiser le CV

#### En ligne (Cloudflare Pages)
Le CV est déployé automatiquement sur Cloudflare Pages : [rayvol.pages.dev](https://rayvol.pages.dev)

#### Localement
Ouvrir `sources/index.html` dans un navigateur ou servir avec un serveur HTTP :
```bash
cd sources/
python3 -m http.server 8000
# Puis visiter http://localhost:8000
```

### Exporter en PDF, Markdown et Word
```bash
cd scripts/
./export.sh
```

Les fichiers générés apparaîtront dans le répertoire `output/` :
- `cv.pdf` - PDF haute qualité avec polices intégrées
- `cv.md` - Version Markdown
- `cv.docx` - Document Word

## 🛠️ Dépendances

### Requises pour l'export
- **wkhtmltopdf** (avec patches Qt) - pour la génération PDF
- **pandoc** - pour les conversions Markdown et Word

### Installation des dépendances

#### wkhtmltopdf avec patches Qt
```bash
# Télécharger et installer la version officielle
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb
sudo apt install xfonts-75dpi
sudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb
```

#### Pandoc
```bash
sudo apt install pandoc
```

## 🎨 Fonctionnalités

### Design
- ✅ **Responsive** : S'adapte aux différentes tailles d'écran
- ✅ **Print-optimized** : Media queries spécifiques pour l'impression
- ✅ **Polices intégrées** : Segoe UI incluse dans le projet
- ✅ **Barre latérale décorative** : Gradient vertical sur toutes les pages PDF

### Export PDF avancé
- ✅ **Qualité professionnelle** : Rendu identique au navigateur
- ✅ **Plan navigable** : Table des matières automatique basée sur les titres
- ✅ **Polices préservées** : Segoe UI correctement intégrée
- ✅ **Marges optimisées** : Pas d'espaces blancs indésirables
- ✅ **Multi-pages** : Barre latérale continue sur toutes les pages

## ⚙️ Configuration

### Personnalisation des polices
Les polices sont chargées via `@font-face` dans `style.css`. Pour utiliser d'autres polices :
1. Ajouter les fichiers `.ttf` dans le dossier `fonts/`
2. Déclarer les `@font-face` en début de `style.css`
3. Mettre à jour la propriété `font-family` du body

### Options d'export
Le script `scripts/export.sh` utilise ces paramètres wkhtmltopdf :
- `--enable-local-file-access` : Accès aux polices et images locales
- `--print-media-type` : Utilise les styles CSS print
- `--outline` : Génère le plan PDF navigable
- Marges à 0 pour un rendu edge-to-edge

## 🔧 Développement

### Structure CSS
- Styles globaux avec polices intégrées
- Media queries `@media print` pour l'export PDF
- Classes utilitaires pour les colonnes et mise en page
- Gestion spécifique de la barre verticale en print

### Workflow recommandé
1. Modifier le contenu dans `sources/index.html`
2. Ajuster les styles dans `sources/style.css` si nécessaire
3. Tester le rendu localement ou via le déploiement Cloudflare Pages
4. Exporter avec `scripts/export.sh`
5. Vérifier la qualité du PDF généré dans `output/`

### Déploiement Cloudflare Pages
Le projet est configuré pour se déployer automatiquement sur Cloudflare Pages :
- **Build output directory:** `sources`
- **Root directory:** `/`
- **Déploiement automatique** depuis GitLab lors des commits sur `main`

## 📋 Notes techniques

- Le projet utilise HTML5 sémantique pour une structure claire
- CSS optimisé pour le rendu wkhtmltopdf (pas toujours identique aux navigateurs)
- La barre verticale utilise `position: absolute` en print mode pour la compatibilité PDF multi-pages
- Les émojis dans les titres sont supportés grâce aux polices Segoe UI
- **Structure déploiement** : tous les assets (images, fonts) sont organisés dans `sources/` avec des chemins relatifs
- **Cloudflare Pages** : déploiement automatique depuis GitLab avec configuration `sources` comme répertoire de build

## 🏷️ Version

Dernière mise à jour : Septembre 2025
- Compatible avec wkhtmltopdf 0.12.6.1 (with patched qt)
- Déployé sur Cloudflare Pages avec intégration GitLab
- Structure optimisée pour les déploiements statiques