#!/bin/bash

# Script d'export multilingue pour CV Next.js
# Génère des PDFs, Markdown et DOCX pour FR et EN

set -e  # Arrêter en cas d'erreur

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Aller au répertoire racine du projet
cd "$(dirname "$0")/.."

echo -e "${BLUE}📦 Build du projet Next.js...${NC}"
npm run build

# Répertoires
BUILD_DIR="./out"
OUTPUT_DIR="./output"

# Créer le répertoire de sortie s'il n'existe pas
mkdir -p "$OUTPUT_DIR"

# Fonction pour exporter une langue
export_locale() {
    local locale=$1
    local locale_upper=$(echo "$locale" | tr '[:lower:]' '[:upper:]')

    echo -e "\n${YELLOW}🌍 Export pour la langue: ${locale_upper}${NC}"

    # Fichiers source et sortie
    INPUT_HTML="${BUILD_DIR}/${locale}/index.html"
    PDF_OUT="${OUTPUT_DIR}/CV_${locale_upper}.pdf"
    MD_OUT="${OUTPUT_DIR}/CV_${locale_upper}.md"
    DOCX_OUT="${OUTPUT_DIR}/CV_${locale_upper}.docx"

    # Vérifier que le fichier HTML existe
    if [ ! -f "$INPUT_HTML" ]; then
        echo -e "${YELLOW}⚠️  Fichier HTML non trouvé: $INPUT_HTML${NC}"
        return 1
    fi

    # Markdown
    echo -e "${BLUE}📄 Génération Markdown...${NC}"
    if command -v pandoc &> /dev/null; then
        pandoc "$INPUT_HTML" -f html -t markdown -o "$MD_OUT"
        echo -e "${GREEN}✓ Markdown généré: $MD_OUT${NC}"
    else
        echo -e "${YELLOW}⚠️  pandoc non installé, génération Markdown ignorée${NC}"
    fi

    # DOCX
    echo -e "${BLUE}🧾 Génération Word (DOCX)...${NC}"
    if command -v pandoc &> /dev/null; then
        pandoc "$INPUT_HTML" -o "$DOCX_OUT"
        echo -e "${GREEN}✓ DOCX généré: $DOCX_OUT${NC}"
    else
        echo -e "${YELLOW}⚠️  pandoc non installé, génération DOCX ignorée${NC}"
    fi

    # PDF
    echo -e "${BLUE}📕 Génération PDF...${NC}"
    if command -v wkhtmltopdf &> /dev/null; then
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
            "$INPUT_HTML" "$PDF_OUT"
        echo -e "${GREEN}✓ PDF généré: $PDF_OUT${NC}"
    else
        echo -e "${YELLOW}⚠️  wkhtmltopdf non installé, génération PDF ignorée${NC}"
        echo -e "${YELLOW}   Installez avec: sudo apt-get install wkhtmltopdf${NC}"
    fi
}

# Exporter les deux langues
echo -e "\n${BLUE}🚀 Début de l'export multilingue${NC}"

export_locale "fr"
export_locale "en"

# Résumé
echo -e "\n${GREEN}✅ Export terminé ! Fichiers générés dans ${OUTPUT_DIR}:${NC}"
ls -lh "$OUTPUT_DIR" | tail -n +2

# Optionnel : Créer aussi des versions sans suffixe de langue (FR par défaut)
if [ -f "${OUTPUT_DIR}/CV_FR.pdf" ]; then
    cp "${OUTPUT_DIR}/CV_FR.pdf" "${OUTPUT_DIR}/CV.pdf"
    echo -e "${GREEN}✓ Copie par défaut: CV.pdf (FR)${NC}"
fi

echo -e "\n${GREEN}🎉 Terminé avec succès !${NC}"
