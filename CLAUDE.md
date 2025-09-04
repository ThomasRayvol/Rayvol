# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV project for Thomas Richard (Rayvol) - a portfolio website containing his professional resume in multiple formats. The project is a static website built with HTML/CSS and includes export capabilities to generate different document formats.

## Architecture & Structure

The project is organized as a simple static website with the following key components:

- **Main CV**: `CV.html` - The primary HTML resume with French content, styled with `style.css`
- **Export System**: `scripts/export.sh` - Bash script using Pandoc to convert HTML to PDF, Markdown, and DOCX formats
- **Assets**: `img/` directory containing profile photo
- **Utility**: `convertisseur.html` - CSV to ICS converter tool (separate utility)

The HTML structure uses semantic sections for different resume parts (intro, technical stack, experience, education, etc.) with CSS styling optimized for both web display and print/PDF generation.

## Common Development Commands

### Export CV to Multiple Formats
```bash
cd scripts/
./export.sh
```

This script requires:
- `pandoc` for document conversion
- `wkhtmltopdf` as PDF engine
- Input file: `cv.html` (note: script references `cv.html` but actual file is `CV.html`)

### View the CV
Open `CV.html` directly in a web browser or serve with a simple HTTP server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000/CV.html
```

## Technical Stack

- **Frontend**: Pure HTML5, CSS3, no JavaScript frameworks
- **Styling**: Custom CSS with print media queries for PDF generation
- **Export Tools**: Pandoc with wkhtmltopdf engine
- **Assets**: JPG images, optimized for web and print

## Important Notes

- The export script references `cv.html` but the actual file is `CV.html` (case sensitivity)
- CSS includes specific print styling and page break controls for PDF generation
- The project uses French language content throughout
- No build process or package management - pure static files