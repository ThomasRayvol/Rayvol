#!/bin/bash

# Aller au répertoire parent (racine du projet)
cd "$(dirname "$0")/.."

# Fichier source HTML
INPUT="./sources/index.html"

# Fichiers de sortie
PDF_OUT="./output/CV.pdf"
MD_OUT="./output/CV.md"
DOCX_OUT="./output/CV.docx"

# Fichier CSS optionnel
CSS_FILE="./sources/style.css"

echo "📝 Export du CV depuis $INPUT"

# Markdown
echo "📄 Génération Markdown..."
pandoc "$INPUT" -f html -t markdown -o "$MD_OUT"

# DOCX
echo "🧾 Génération Word (DOCX)..."
pandoc "$INPUT" -o "$DOCX_OUT"

# PDF
echo "📕 Génération PDF..."

wkhtmltopdf \
    --enable-local-file-access \
    --print-media-type \
    --encoding utf-8 \
    --margin-top 0 \
    --margin-bottom 0 \
    --margin-left 0 \
    --margin-right 0 \
    --outline \
    --outline-depth 4 \
    "$INPUT" "$PDF_OUT"


echo "✅ Export terminé ! Fichiers générés :"
echo " - $PDF_OUT"
echo " - $MD_OUT"
echo " - $DOCX_OUT"
