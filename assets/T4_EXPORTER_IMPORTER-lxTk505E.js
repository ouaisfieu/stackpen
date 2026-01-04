const n=`# 💾 Tutoriel T4: Exporter & Importer Données (Workspace)

**Durée:** 15 minutes | **Niveau:** Intermédiaire | **Résultat:** Données portables

---

## Objectif

- ✅ Exporter données en 4 formats
- ✅ Importer fichier externe
- ✅ Transformer formats
- ✅ Partager données

---

## 📤 Étape 1: Exporter Hunt Complet (5 min)

### 1.1 Ouvrir Workspace Editor

\`\`\`
Dashboard
  ↓
Bouton "Ouvrir l'Éditeur"
\`\`\`

### 1.2 Créer Document Export

\`\`\`
Sidebar → "+ Nouveau"
  ↓
Title: "Export Hunt 2025"
Format: "JSON"
  ↓
Créer
\`\`\`

### 1.3 Exporter en JSON

\`\`\`
Bas écran → Bouton "JSON"
  ↓
Fichier téléchargé: "Export Hunt 2025.json"
  ↓
Contient: candidats, offres, candidatures
\`\`\`

### 1.4 Exporter en CSV

\`\`\`
Bouton "CSV"
  ↓
Fichier: "Export Hunt 2025.csv"
  ↓
Ouvre dans Excel:
    Prénom,Nom,Email,Compétences,Experience
    Jean,Dupont,jean@mail.com,React;Node,5
    Marie,Martin,marie@mail.com,Python;Django,3
\`\`\`

### 1.5 Exporter en Markdown

\`\`\`
Bouton "Markdown"
  ↓
Fichier: "Export Hunt 2025.md"
  ↓
Format texte lisible:
    # Candidats

    ## Jean Dupont
    - Email: jean@mail.com
    - Skills: React, Node.js
    - Exp: 5 ans
\`\`\`

### 1.6 Exporter en HTML

\`\`\`
Bouton "HTML"
  ↓
Fichier: "Export Hunt 2025.html"
  ↓
Ouvre dans navigateur:
    [TABLE avec colonnes + styles]
\`\`\`

---

## 📥 Étape 2: Importer Fichier Externe (5 min)

### 2.1 Préparer Fichier Source

**Scénario:** Vous avez fichier "clients_anciens.csv" d'ancien système

\`\`\`
Contenu CSV:
  nom,email,segment
  Acme Corp,contact@acme.com,Tech
  ONG Social,info@ong.fr,Social
  Startup Eco,hello@eco.io,Environnement
\`\`\`

### 2.2 Importer dans Workspace

\`\`\`
Workspace Editor
  ↓
Bouton "Importer"
  ↓
Sélectionner: "clients_anciens.csv"
\`\`\`

### 2.3 Format Auto-Détecté

\`\`\`
Système reconnaît: CSV
  ↓
Preview: données se chargent
  ↓
Options:
    ✓ Ajouter à existants
    ☐ Remplacer
\`\`\`

### 2.4 Valider Import

\`\`\`
Bouton "Importer"
  ↓
Données apparaissent en Workspace
  ↓
Maintenant disponibles aux modules
\`\`\`

### 2.5 Utiliser dans Module

\`\`\`
Hunt → Candidats
  ↓
"+ Importer de Workspace"
  ↓
Sélectionner document importé
  ↓
✅ Candidats présents
\`\`\`

---

## 🔄 Étape 3: Transformer Formats (3 min)

**But:** Convertir CSV → JSON → Markdown

### 3.1 Importer CSV

\`\`\`
Workspace Editor → "Importer"
  ↓
Fichier: "data.csv"
\`\`\`

### 3.2 Export JSON

\`\`\`
Workspace → Créer doc "Converted JSON"
  ↓
Importer data
  ↓
Bouton "JSON" → télécharger
\`\`\`

### 3.3 Export Markdown

\`\`\`
Même document
  ↓
Bouton "Markdown" → télécharger
\`\`\`

**Résultat:** Même data, 3 formats différents!

---

## 📊 Étape 4: Assembler Rapport Multi-Module (2 min)

**But:** 1 document = Hunt + MySPOT + Sauron

### 4.1 Exporter chaque module

\`\`\`
Hunt → Export JSON ("hunt.json")
MySPOT → Export Markdown ("myspot.md")
Sauron → Export CSV ("sauron.csv")
\`\`\`

### 4.2 Créer Document Master

\`\`\`
Workspace → "+ Nouveau"
Title: "Rapport Q1 Complet"
Format: "Markdown"
\`\`\`

### 4.3 Assembler

\`\`\`
# Rapport Q1 2025

## Hunt - Recrutement
[Coller hunt.json formaté]

### Candidats
- Jean Dupont: 100% match
- Marie Martin: 85% match

## MySPOT - Stratégie
[Coller myspot.md]

### SWOT
- Forces: ...
- Faiblesses: ...

## Sauron - CRM
[Coller sauron.csv formatted]

### Clients Hot
- Acme Financial: 8.4/10
- Startup SaaS: 8.1/10
\`\`\`

### 4.4 Exporter Final

\`\`\`
Bouton "Markdown" (ou "HTML")
  ↓
Fichier complet: "Rapport Q1.md"
  ↓
Peut partager avec exec team
\`\`\`

---

## 🎯 Étape 5: Partager Données (Optionnel)

### 5.1 Export pour Email

\`\`\`
Document important
  ↓
Export: "CSV" ou "Markdown"
  ↓
Envoyer à: team@company.com
  ↓
Ils peuvent importer ailleurs
\`\`\`

### 5.2 Export pour BI

\`\`\`
Sauron pipeline
  ↓
Export: "CSV"
  ↓
Importer dans: PowerBI / Tableau
  ↓
Dashboards rich: visualisations pros
\`\`\`

### 5.3 Export pour Excel

\`\`\`
Hunt candidats
  ↓
Export: "CSV"
  ↓
Ouvrir dans: Excel
  ↓
Pivot tables, graphes, partages
\`\`\`

---

## ✅ Bravo!

Vous avez:
- ✅ Exporté 4 formats
- ✅ Importé fichier externe
- ✅ Transformé données
- ✅ Assemblé rapport multi-module
- ✅ Prêt à partager partout

---

## 💡 Tips

### Automation

\`\`\`
Chaque semaine:
├─ Export Hunt → "hunt_week25.json"
├─ Export Sauron → "sauron_week25.csv"
├─ Merge dans "weekly_report.md"
├─ Email à CEO
└─ Auto-scriptable avec tools externes
\`\`\`

### Versioning

\`\`\`
"candidats_v1.csv"
"candidats_v2.csv" (semaine suivante)
"candidats_v3.csv" (semaine 3)

= Historique clair
\`\`\`

### Backup

\`\`\`
Exporter JSON régulièrement
  ↓
Stocker dans Google Drive
  ↓
= Backup sécurisé
\`\`\`

---

## ❓ FAQ

**Q: Quel format choisir?**
R: JSON = structuré / CSV = Excel / Markdown = docs / HTML = web

**Q: Import échoue?**
R: Vérifier UTF-8, format valide, pas de caract spéciaux

**Q: Fusion deux fichiers CSV?**
R: Import premier → créer second document → copy-paste lignes

**Q: Perte données pendant export?**
R: Non, export = copie. Data reste en AEGIS.

---

**Bon organizing! 💾**
`;export{n as default};
