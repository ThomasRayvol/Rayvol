# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV project for Thomas Richard (Rayvol) - a portfolio website containing his professional resume in multiple formats. The project is a static website built with HTML/CSS and includes export capabilities to generate different document formats.

## Architecture & Structure

The project is organized as a simple static website with the following key components:

- **Main CV**: `sources/index.html` - The primary HTML resume with French content, styled with `sources/style.css`
- **Export System**: `scripts/export.sh` - Bash script using wkhtmltopdf to convert HTML to PDF, Markdown, and DOCX formats
- **Assets**: `sources/img/` directory containing profile photo, `sources/fonts/` directory containing Segoe UI font files
- **Output**: `output/` directory containing generated files (CV.pdf, CV.md, CV.docx)

The HTML structure uses semantic sections for different resume parts (intro, technical stack, experience, education, etc.) with CSS styling optimized for both web display and print/PDF generation. The project is deployed on Cloudflare Pages from the `sources/` directory.

## Common Development Commands

### Export CV to Multiple Formats
```bash
cd scripts/
./export.sh
```

This script requires:
- `pandoc` for document conversion
- `wkhtmltopdf` as PDF engine
- Input file: `sources/index.html`

### View the CV
Open `sources/index.html` directly in a web browser or serve with a simple HTTP server:
```bash
cd sources/
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Technical Stack

- **Frontend**: Pure HTML5, CSS3, no JavaScript frameworks
- **Styling**: Custom CSS with print media queries for PDF generation
- **Export Tools**: Pandoc with wkhtmltopdf engine
- **Assets**: JPG images, optimized for web and print

## Important Notes

- All source files are in the `sources/` directory with relative paths for assets
- Generated files are output to the `output/` directory
- CSS includes specific print styling and page break controls for PDF generation
- The project uses French language content throughout
- No build process or package management - pure static files
- Deployed automatically on Cloudflare Pages: https://rayvol.pages.dev