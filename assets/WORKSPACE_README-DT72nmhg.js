const n=`# 💾 WORKSPACE - Central Hub & Documents

Bienvenue dans **Workspace**, votre espace personnel pour organiser, exporter et intégrer vos données.

Workspace = **Documents + Exports + Quotas + Interop + Hub Unifié**

---

## 📌 Concepts Clés

### Workspace en 60 Secondes

\`\`\`
┌──────────────────────────────────────┐
│      YOUR WORKSPACE                  │
├──────────────────────────────────────┤
│                                      │
│  📄 Documents                        │
│     - JSON/CSV/Markdown/HTML         │
│     - Auto-save                      │
│     - 50 docs (free tier)            │
│                                      │
│  📥 Importer                         │
│     - Fichiers externes              │
│     - Format auto-detect             │
│     - Merge avec existants            │
│                                      │
│  📤 Exporter                         │
│     - 4 formats                      │
│     - 100 exports/mois (free)        │
│     - Partager facilement            │
│                                      │
│  🔗 Lier Modules                     │
│     - Entities cross-modules         │
│     - Voir relations globales        │
│     - Requêtes complexes             │
│                                      │
│  🔍 Recherche Globale                │
│     - Tous modules                   │
│     - Temps réel                     │
│     - Filtrés par type               │
│                                      │
└──────────────────────────────────────┘
\`\`\`

### Quotas (Free vs Pro)

| Limite | Free | Pro |
|--------|------|-----|
| Stockage | 10 MB | ∞ |
| Documents | 50 | ∞ |
| Exports/mois | 100 | ∞ |
| Formats | 4 (JSON/CSV/MD/HTML) | 4 + PDF |
| Workspaces | 1 | 5 |
| Equipe | Vous seul | + 4 members |

---

## 🚀 Démarrer avec Workspace

### Installation Rapide (< 5 min)

#### 1. Accéder au Workspace

\`\`\`
Dashboard (écran d'accueil)
  ↓
Statistiques: Candidats, Entités, Clients
  ↓
Barre recherche au top
  ↓
Bouton "Ouvrir l'Éditeur"
\`\`\`

#### 2. Créer Première Workspace

\`\`\`
Settings → "Créer Workspace"
  ↓
Formulaire:
  Nom: "Projet 2025"
  Type: "Hybrid" (tous modules)
  Description: "Stratégie et recrutement"
  ↓
"Créer"
  ↓
✅ Workspace active
\`\`\`

#### 3. Ouvrir Éditeur

\`\`\`
Dashboard → "Ouvrir l'Éditeur"
  ↓
Vue: Sidebar + Editor + Exports
\`\`\`

#### 4. Créer Document

\`\`\`
Sidebar → "+ Nouveau"
  ↓
Entrer titre: "Mon Premier Doc"
  ↓
Choisir format: "JSON"
  ↓
Écrire contenu:
  {\\n    "candidat\\": \\"Jean\\",\\n    ...\\n  }
  ↓
Bouton "Créer"
  ↓
✅ Document sauvegardé
\`\`\`

#### 5. Exporter

\`\`\`
Bas de l'écran → Boutons EXPORT
  ↓
Choisir format:
  - JSON (pour apps)
  - CSV (pour Excel)
  - Markdown (pour rapports)
  - HTML (pour web)
  ↓
Fichier téléchargé
  ↓
✅ Fichier utilisable
\`\`\`

---

## 📊 L'Éditeur Multiformat

### Interface

\`\`\`
┌─────────────────────────────────────────────┐
│  Workspace Editor                        ✕  │
├─────────────────────────────────────────────┤
│  [Sidebar]              [Main Editor]       │
│  Documents              Title: [...]        │
│  ├─ Doc 1 (JSON)        Format: JSON ▼     │
│  ├─ Doc 2 (CSV)         ┌─────────────────┐│
│  ├─ Doc 3 (MD)          │                 ││
│  └─ + Nouveau           │  Content Area   ││
│                         │  Texte éditable ││
│  Quota:                 │                 ││
│  5.2 / 10 MB            │                 ││
│  3 / 50 docs            │                 ││
│  ├─────────►            │                 ││
│                         │                 ││
│                         │  Size: 1.2MB    ││
│                         └─────────────────┘│
│  ┌──────────────────────────────────────┐  │
│  │ [Create] [Update] [Delete]           │  │
│  │ [JSON] [CSV] [MD] [HTML] [Import]    │  │
│  └──────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
\`\`\`

### Formats Supportés

#### JSON
\`\`\`json
{
  "candidat": {
    "prenom": "Jean",
    "nom": "Dupont",
    "email": "jean@mail.com",
    "competences": ["React", "Node.js"]
  }
}
\`\`\`
**Idéal:** Applications, APIs, stockage structuré

#### CSV
\`\`\`
Prénom,Nom,Email,Compétences
Jean,Dupont,jean@mail.com,"React, Node.js"
Marie,Martin,marie@mail.com,"Python, Django"
\`\`\`
**Idéal:** Excel, Google Sheets, databases

#### Markdown
\`\`\`markdown
# Candidats

## Jean Dupont
- Email: jean@mail.com
- Compétences: React, Node.js
- Expérience: 5 ans

## Marie Martin
- Email: marie@mail.com
- ...
\`\`\`
**Idéal:** Rapports, documentation, GitHub

#### HTML
\`\`\`html
<!DOCTYPE html>
<html>
<table>
  <tr><th>Nom</th><th>Email</th></tr>
  <tr><td>Jean</td><td>jean@mail.com</td></tr>
</table>
</html>
\`\`\`
**Idéal:** Web, emails, branding

---

## 🔧 Workflows Courants

### Workflow 1: Exporter Données

**But:** Prendre données pour utiliser ailleurs

\`\`\`
1. Module (Hunt/MySPOT/Sauron)
   → Données complètes

2. Workspace Editor
   → Document créé auto ou manuel

3. Sélectionner format:
   ✅ JSON → autre app
   ✅ CSV → Excel/BI
   ✅ Markdown → Report
   ✅ HTML → Email

4. Télécharger

5. Utiliser dans Excel/Power BI/Python/etc
\`\`\`

**Temps:** 5 min | **Gain:** Données portables

---

### Workflow 2: Importer & Fusionner

**But:** Ajouter données d'une autre source

\`\`\`
1. Avoir fichier externe:
   - clients.csv (old system)
   - skills.json (sourcing tool)
   - strategy.md (consultant)

2. Workspace Editor
   → "Importer"

3. Sélectionner fichier

4. Format auto-détecté

5. Revoir données

6. Valider import

7. Données présentes dans Workspace
   + modules peuvent les utiliser
\`\`\`

**Temps:** 10 min/import | **Gain:** Centralisation

---

### Workflow 3: Créer Rapport Multi-Module

**But:** Document complet mêlant Hunt + MySPOT + Sauron

\`\`\`
1. Exporter Hunt (candidats)
   Format: JSON

2. Exporter MySPOT (stratégie)
   Format: Markdown

3. Exporter Sauron (clients)
   Format: CSV

4. Workspace → Créer document "Rapport Q1"
   Format: Markdown

5. Assembler:
   # Rapport Q1 2025

   ## Recrutement (Hunt)
   [Coller JSON formaté]

   ## Stratégie (MySPOT)
   [Coller Markdown]

   ## Clients (Sauron)
   [Coller CSV formaté]

6. Exporter final en PDF
   (Pro feature)

7. Partager avec équipe
\`\`\`

**Temps:** 30 min | **Gain:** Rapport professionnel

---

### Workflow 4: Synchroniser Données Externes

**But:** Mise à jour régulière depuis source externe

\`\`\`
Récurrence (exemple: Chaque semaine)

1. Export Hunt actuel
   Format: JSON
   Fichier: export_hunt_week25.json

2. Reçoit mise à jour externe
   Fichier: clients_updated_week25.csv

3. Workspace → Importer nouveau CSV

4. Comparer avec précédent

5. Merger (garder anciens + ajouter nouveaux)

6. Exporter version consolidée

7. Stocker dans Workspace
\`\`\`

**Temps:** 15 min/semaine | **Gain:** Données toujours à jour

---

## 📋 Quota & Limites

### Plan Gratuit

\`\`\`
Stockage: 10 MB
  = ~50 candidats
  = ~100 clients CRM
  = ~30 entités MySPOT

Documents: 50
  = 1 par jour durant 50 jours
  = Archiver = Optimiser

Exports: 100/mois
  = ~3 par jour
  = Convenable pour usage normal
\`\`\`

### Optimiser Quota

\`\`\`
Si plein:

1. Archiver documents anciens
   (Garder data, retirer espace)

2. Exporter & supprimer localement
   (Backup externe)

3. Segmenter données
   (Plusieurs workspaces petits)

4. Upgrade plan Pro
   (Illimité, meilleur support)
\`\`\`

---

## 🔍 Recherche Globale

### Utiliser la Barre Recherche

\`\`\`
Dashboard → Barre top
  ↓
Taper: "Jean"
  ↓
Résultats en temps réel:
  - Hunt: Jean Dupont (Candidat)
  - MySPOT: Jean Martin (Entité)
  - Notes: 2 notes mentionnant Jean
  - Documents: 1 document

Clic résultat = ouvre dans module
\`\`\`

### Recherche Avancée

\`\`\`
Filtrages possibles:
  - Par module (Hunt only)
  - Par type (Candidat, Org, etc)
  - Par tags
  - Par date
  - Par score (Hunt/Sauron)

Résultats: Classés par relevance
\`\`\`

---

## 🔗 Module Links (Interopérabilité)

### Vue d'Ensemble

\`\`\`
Hunt Candidate ──can apply to──> Hunt Mission
         │
         └──────is person──────> MySPOT Person
                                      │
                    Sauron Client ←──works for──┘

Résultat: Jean (Candidat) peut voir:
  - Offres où il match bien
  - Entité MySPOT qui le décrit
  - Client Sauron qui l'emploie
\`\`\`

### Créer Lien

\`\`\`
Entité Hunt → "Liens vers autres modules"
  ↓
"+ Lien"
  ↓
Choisir module cible (MySPOT / Sauron / Hunt)
  ↓
Choisir type de lien:
  - applies_to
  - is_candidate_for
  - references
  - covers
  - implements
  - etc.
  ↓
Sélectionner entité cible
  ↓
"Créer"
  ↓
✅ Lien bidirectionnel
\`\`\`

### Voir Liens

\`\`\`
Entité → Volet détail
  ↓
Section "Liens vers autres modules"
  ↓
Voir:
  - Liens sortants (→)
  - Liens entrants (←)
  - Type de lien
  - Supprimer lien (✕)
\`\`\`

---

## 💡 Tips Avancés

### Templating Documents

\`\`\`
Créer document "Template_Candidat":

{
  "candidat": {
    "prenom": "{{PRENOM}}",
    "nom": "{{NOM}}",
    "email": "{{EMAIL}}",
    "competences": {{COMPETENCES}},
    "experience": {{EXP}}
  }
}

Dupliquer + remplacer variables = Doc nouveau candidat
\`\`\`

### Versioning

\`\`\`
Document original: "Candidats_v1"
  ↓
Dupliquer → "Candidats_v2" (update)
  ↓
Dupliquer → "Candidats_v3" (update)
  ↓
Historique clair de versions
\`\`\`

### Partage (Via Export)

\`\`\`
Doc privé = jamais partagé auto
  ↓
Pour partager:
  1. Exporter en CSV/JSON
  2. Envoyer par email
  3. Ou héberger fichier
  4. Récepteur peut importer ailleurs

Avantage: Complète traçabilité
\`\`\`

---

## 📈 Étapes pour Maîtriser Workspace

### Week 1: Les Bases
- [ ] Créer 1 workspace
- [ ] Ajouter 1 document
- [ ] Exporter en CSV
- [ ] Importer fichier externe

### Week 2: Workflows
- [ ] Exporter Hunt complet
- [ ] Exporter MySPOT analyse
- [ ] Assembler rapport multi-module
- [ ] Exporter final

### Week 3: Interop
- [ ] Créer 5 liens modules
- [ ] Voir graphe global
- [ ] Recherche globale
- [ ] Exporter cross-module view

### Week 4: Avancé
- [ ] Sync hebdo données externes
- [ ] Templating documents
- [ ] Versioning documents
- [ ] Optimiser quota

---

## ❓ FAQ Workspace

**Q: Données partagées avec quelqu'un d'autre?**
R: Non, workspace = privé par défaut. Export = seule façon de partager.

**Q: Import échoue. Format non reconnu?**
R: Vérifier UTF-8 encoding + format valide (JSON/CSV/MD/HTML).

**Q: Quota plein. Solutions?**
R: Archiver vieux docs ou upgrade plan Pro.

**Q: Peut-on avoir plusieurs workspaces?**
R: Free = 1. Pro = 5. Chacun isolé.

**Q: Peut-on partager workspace avec équipe?**
R: Pro plan = invite 4 members. Free = import/export manuel.

**Q: Export CSV: colonnes mal ordonnées?**
R: Éditer document avant export pour ordonner champs.

---

## 🚀 Prochaines Étapes

1. **Démarrer:** Créer workspace + document (5 min)
2. **Approfondir:** [Tutoriel T4_EXPORTER_IMPORTER.md](../TUTORIELS/T4_EXPORTER_IMPORTER.md) (20 min)
3. **Intégrer:** [INTEROPERABILITE.md](./INTEROPERABILITE.md) (15 min)
4. **Maîtriser:** Workflow export/import régulier

---

**Bon organizing! 💾**
`;export{n as default};
