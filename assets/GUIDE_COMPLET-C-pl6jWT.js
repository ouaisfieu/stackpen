const n=`# Guide Complet AEGIS - Plateforme d'Intelligence Collective

Bienvenue sur AEGIS, une plateforme modulaire et interconnectée conçue pour transformer la façon dont les organisations gèrent leurs talents, stratégies et relations clients.

## 🎯 En Une Minute

**AEGIS** = **4 modules puissants + 1 workspace central**

- 🎯 **Hunt** → Recrutement responsable & éthique
- 🔗 **MySPOT** → Analyse stratégique complète (SWOT, Pestel, etc.)
- 👥 **Sauron** → CRM client simple et efficace
- 🌍 **Aegis** → Hub communautaire & ressources
- 💾 **Workspace** → Vos documents, exports, liens entre modules

## 📚 Documentation par Niveau

### Pour Débuter (30 minutes)
- [Quick Start](#quick-start) - Démarrer maintenant
- [Concepts Clés](#concepts-clés) - Comprendre l'architecture
- [Cas d'Usage](#premiers-cas-dusage) - 5 exemples simples

### Pour Maîtriser (2-3 heures)
- [Guide Hunt](./GUIDES/HUNT_README.md) - Gérer candidats & recrutement
- [Guide MySPOT](./GUIDES/MYSPOT_README.md) - Analyser stratégie
- [Guide Sauron](./GUIDES/SAURON_README.md) - Piloter CRM
- [Guide Workspace](./GUIDES/WORKSPACE_README.md) - Organiser & exporter

### Pour Avancer (selon objectifs)
- [Tutoriels Pas à Pas](./TUTORIELS/) - Workflow réels
- [Interopérabilité](./GUIDES/INTEROPERABILITE.md) - Lier les modules
- [API Reference](./GUIDES/API_REFERENCE.md) - Pour développeurs

---

## Quick Start

### 1️⃣ Créer un Workspace

\`\`\`
Dashboard → "Nouveau Workspace"
↓
Nommer: "Mon Projet 2025"
↓
Type: "Hybrid" (tous les modules)
↓
✅ Validé
\`\`\`

**Résultat:** Un espace privé pour centraliser toutes vos données.

### 2️⃣ Importer vos Premières Données

**Option A: Fichier CSV**
\`\`\`
Dashboard → Workspace Editor → Importer
↓
Sélectionner fichier.csv
↓
Format auto-détecté → JSON
↓
✅ Prêt à utiliser
\`\`\`

**Option B: Entrée Manuelle**
\`\`\`
Module → "+ Nouveau"
↓
Remplir formulaire
↓
Sauvegarder
↓
✅ Dans votre workspace
\`\`\`

### 3️⃣ Connecter les Modules

\`\`\`
Entité Hunt (candidat) → Voir détails
↓
"Liens vers autres modules"
↓
+ Lien → MySPOT
↓
Sélectionner entité cible
↓
✅ Lien créé
\`\`\`

### 4️⃣ Exporter vos Résultats

\`\`\`
Workspace Editor → Document
↓
Boutons export: JSON / CSV / Markdown / HTML
↓
✅ Fichier téléchargé
\`\`\`

---

## Concepts Clés

### 📊 Modules (4 domaines de travail)

| Module | Fonction | Idéal Pour |
|--------|----------|-----------|
| **Hunt** | Gérer candidats, offres, candidatures, entretiens | Recrutement, talent acquisition |
| **MySPOT** | Analyser stratégie (SWOT, Pestel, objectifs) | Planning stratégique, diagnostic |
| **Sauron** | Suivre prospects & clients par score | Commercial, prospection, CRM |
| **Aegis** | Ressources, communauté, contenus | Inspiration, learning, partage |

### 💾 Workspace (votre espace de travail)

\`\`\`
┌─────────────────────────────┐
│     Your Workspace          │
├─────────────────────────────┤
│ Hunt Data                   │
│ MySPOT Analysis             │
│ Sauron Clients              │
│ Documents & Exports         │
│ Linked Entities (cross-mod) │
└─────────────────────────────┘
\`\`\`

**Propriétaire:** Vous seul
**Limites Gratuites:** 10MB, 50 documents, 100 exports/mois
**Données:** Toutes vos données, jamais partagées sans permission

### 🔗 Interopérabilité

Les modules fonctionnent **indépendamment** mais peuvent être **liés**:

\`\`\`
Hunt Candidate ──applies_to──> MySPOT Skill
Hunt Company ──references──> MySPOT Organization
Sauron Client ──is_covered_by──> MySPOT Strategy
\`\`\`

---

## Premiers Cas d'Usage

### 💼 Cas 1: Manager un Processus de Recrutement

**Objectif:** Trouver et suivre un candidat

\`\`\`
1. Créer Offre (Hunt)
   Title: "Dev Senior React"
   Required Skills: ["React", "Node.js"]

2. Ajouter Candidat (Hunt)
   Name: "Jean Dupont"
   Skills: ["React", "Node.js", "Python"]

3. Créer Candidature (Hunt)
   Candidat ← → Offre
   Status: "Entretien 1"

4. Exporter (Workspace)
   Format: CSV
   Partager avec équipe
\`\`\`

**Temps:** 5 minutes | **Résultat:** Pipeline transparent

---

### 🎯 Cas 2: Analyser une Stratégie d'Entreprise

**Objectif:** Diagnostiquer une situation

\`\`\`
1. Créer Entité (MySPOT)
   Type: "Organization"
   Name: "Mon Entreprise"

2. Remplir Plaidoyer (MySPOT)
   ├─ SWOT (forces/faiblesses)
   ├─ PESTEL (contexte)
   ├─ 5 Why (causes)
   └─ Objectifs + Actions

3. Visualiser (MySPOT)
   Graph → Relations entre entités

4. Exporter (Workspace)
   Format: Markdown
   Partager diagnostic
\`\`\`

**Temps:** 30 minutes | **Résultat:** Stratégie documentée

---

### 👥 Cas 3: Piloter un CRM Client

**Objectif:** Scorer et catégoriser clients

\`\`\`
1. Créer Client (Sauron)
   Name: "Acme Corp"
   Segment: "Tech"
   Potentiel: 8/10

2. Système Auto-Score
   Score = (Potentiel × 0.4) + (Accessibilité × 0.3) + (Urgence × 0.3)
   Résultat: 8.2 → "Hot" 🔥

3. Voir Kanban (Sauron)
   Colonnes: Cold | Warm | Hot
   Glisser-déposer clients

4. Importer Linked (Workspace)
   Lier à Offre Hunt si applicable
\`\`\`

**Temps:** 10 minutes/client | **Résultat:** Pipeline dynamique

---

### 🔗 Cas 4: Connecter Hunt + MySPOT

**Objectif:** Mapper candidats sur compétences stratégiques

\`\`\`
1. Créer "Skills" dans MySPOT
   React, Node.js, Leadership, etc.

2. Dans Hunt → Voir Candidat
   "Liens vers autres modules"
   + Créer lien: Candidat → Skill
   Type: "possède"

3. Visualiser (MySPOT)
   Graph montre candidats liés à skills

4. Rapport (Workspace)
   Export: "Candidats par Competence"
\`\`\`

**Temps:** 15 minutes | **Résultat:** Vue 360° talent

---

### 📊 Cas 5: Exporter pour Réutilisation

**Objectif:** Prendre données ailleurs (Excel, BI, autre app)

\`\`\`
1. Sélectionner Source (Hunt/MySPOT/Sauron)
2. Workspace Editor
3. Format:
   ✅ JSON (pour autres apps)
   ✅ CSV (pour Excel)
   ✅ Markdown (pour rapports)
   ✅ HTML (pour web)
4. Télécharger & utiliser
\`\`\`

**Temps:** 2 minutes | **Résultat:** Données portables

---

## 🚀 Roadmap (par niveau)

### Semaine 1: Fondamentaux
- ✅ Créer workspace
- ✅ Ajouter 1ère donnée dans Hunt
- ✅ Exporter en CSV
- ✅ Lire ce guide

### Semaine 2: Approfondissement
- ✅ Remplir une stratégie (MySPOT)
- ✅ Créer clients (Sauron)
- ✅ Créer 1er lien entre modules
- ✅ Suivre tutoriel spécialisé

### Semaine 3+: Maîtrise
- ✅ Automatiser imports réguliers
- ✅ Créer rapports exportés
- ✅ Intégrer données externes
- ✅ Former équipe

---

## 📖 Accès à la Documentation

\`\`\`
racine/
├── GUIDE_COMPLET.md ← VOUS ÊTES ICI
├── GETTING_STARTED.md (démarrage en 15 min)
├── GUIDES/
│   ├── HUNT_README.md
│   ├── MYSPOT_README.md
│   ├── SAURON_README.md
│   ├── WORKSPACE_README.md
│   ├── INTEROPERABILITE.md
│   └── API_REFERENCE.md
├── TUTORIELS/
│   ├── T1_PREMIER_CANDIDAT.md (Hunt)
│   ├── T2_ANALYSER_STRATEGIE.md (MySPOT)
│   ├── T3_GERER_CRM.md (Sauron)
│   ├── T4_EXPORTER_IMPORTER.md (Workspace)
│   └── T5_LIER_MODULES.md (Interop)
└── CONCEPT_AISBLAEGIS.md (vision long terme)
\`\`\`

---

## ❓ FAQ Rapide

**Q: Mes données sont-elles sauvegardes?**
R: Oui, toutes les données sont dans Supabase PostgreSQL. Automatiquement, gratuitement.

**Q: Je peux exporter tout?**
R: Oui, à tout moment, en 4 formats. Vos données vous appartiennent.

**Q: Les modules doivent être liés?**
R: Non, chaque module est indépendant. Les liens sont optionnels.

**Q: Quota dépassé. Que faire?**
R: Plan gratuit = 10MB. Plan Pro = illimité. Ou archiver anciens documents.

**Q: Données personnelles dans Hunt?**
R: Oui, conformes RGPD. Chiffrage en transit + RLS dans DB.

**Q: Je peux utiliser mes données ailleurs?**
R: 100%, exportez en CSV/JSON quand vous voulez.

---

## 🤝 Besoin d'Aide?

- **Démarrage rapide?** → [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Mode d'emploi Hunt?** → [HUNT_README.md](./GUIDES/HUNT_README.md)
- **Tuto complet?** → [TUTORIELS/](./TUTORIELS/)
- **Architecture?** → [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Issues/Bugs?** → Section Issues du projet

---

## 💡 Prochaines Étapes

1. **Lire:** GETTING_STARTED.md (15 min)
2. **Suivre:** Un tutoriel selon votre besoin (30 min)
3. **Essayer:** Créer quelque chose dans votre workspace (20 min)
4. **Itérer:** Utiliser modules régulièrement

**Bon voyage dans AEGIS! 🚀**
`;export{n as default};
