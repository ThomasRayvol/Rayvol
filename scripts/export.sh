#!/bin/bash

# Fichier source HTML
INPUT="cv.html"

# Fichiers de sortie
PDF_OUT="cv.pdf"
MD_OUT="cv.md"
DOCX_OUT="cv.docx"

# Fichier CSS optionnel
CSS_FILE="style.css"

echo "📝 Export du CV depuis $INPUT"

# Markdown
echo "📄 Génération Markdown..."
pandoc "$INPUT" -f html -t markdown -o "$MD_OUT"

# DOCX
echo "🧾 Génération Word (DOCX)..."
pandoc "$INPUT" -o "$DOCX_OUT"

# PDF
echo "📕 Génération PDF..."
if [ -f "$CSS_FILE" ]; then
  pandoc "$INPUT" -o "$PDF_OUT" --pdf-engine=wkhtmltopdf --css="$CSS_FILE"
else
  pandoc "$INPUT" -o "$PDF_OUT" --pdf-engine=wkhtmltopdf
fi

echo "✅ Export terminé ! Fichiers générés :"
echo " - $PDF_OUT"
echo " - $MD_OUT"
echo " - $DOCX_OUT"
