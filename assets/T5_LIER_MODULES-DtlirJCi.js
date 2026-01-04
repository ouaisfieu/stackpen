const n=`# 🔗 Tutoriel T5: Lier Modules Entre Eux (Interopérabilité)

**Durée:** 10 minutes | **Niveau:** Avancé | **Résultat:** Vue 360° cross-modules

---

## Objectif

- ✅ Comprendre liens inter-modules
- ✅ Créer liens Hunt ↔ MySPOT
- ✅ Créer liens Sauron ↔ Hunt
- ✅ Voir graphe global

---

## 🔗 Concept: Module Links

### Les Modules Sans Liens:

\`\`\`
HUNT              MySPOT            SAURON
(Candidats)       (Stratégie)       (Clients)
├─ Jean           ├─ React Skill    ├─ Acme Corp
├─ Marie          ├─ IA Strategy    └─ Startup XYZ
└─ Pierre         └─ AI Persons

Complètement séparés. Zéro visibilité cross-module.
\`\`\`

### Les Modules Avec Liens:

\`\`\`
HUNT              MySPOT            SAURON
(Candidats)       (Stratégie)       (Clients)
  Jean ────────→ React Skill         Acme Corp
           can apply to    ↗─────────↖ needs hire

Connectés! Requêtes complexes possibles.
\`\`\`

---

## ⚙️ Étape 1: Préparer Entités (2 min)

### 1.1 Vérifier Hunt

\`\`\`
Hunt → Candidats
  ↓
Avoir: Jean Dupont (candidat), Dev React (offre)
\`\`\`

### 1.2 Vérifier MySPOT

\`\`\`
MySPOT → Entités
  ↓
Créer si absent: "React" (Tech Skill)
  ↓
Type: "Technologie"
Tags: "#Skill" "#Frontend"
\`\`\`

### 1.3 Vérifier Sauron

\`\`\`
Sauron → Kanban
  ↓
Avoir: "Acme Corp" (client)
\`\`\`

---

## 🎯 Étape 2: Lier Hunt ↔ MySPOT (4 min)

**Scénario:** Jean Dupont possède compétence "React"

### 2.1 Aller à Candidat Hunt

\`\`\`
Hunt → Candidats
  ↓
Clic "Jean Dupont"
  ↓
Détail s'ouvre
\`\`\`

### 2.2 Ouvrir Liens

\`\`\`
Détail → Section "Liens vers autres modules"
  ↓
Bouton "+ Lien"
\`\`\`

### 2.3 Créer Lien Candidat → Skill

\`\`\`
Formulaire:

Module Cible: "MySPOT" (dropdown)

Type Lien: "possède" (dropdown)
  Options affichées: applies_to, references, covers, etc.

Entité Cible: "React" (search ou sélect)

✓ Créer
\`\`\`

### 2.4 Résultat

\`\`\`
Lien créé: Jean Dupont ──possède──> React

Visible dans:
  ├─ Détail Jean (sous "Liens")
  └─ Détail React (sous "Liens entrants")
\`\`\`

### 2.5 Créer Lien Supplémentaire

**Jean possède aussi Node.js:**

\`\`\`
Créer lien #2:

Module: MySPOT
Type: possède
Entité: "Node.js"

✓ Créer
\`\`\`

---

## 👥 Étape 3: Lier Sauron ↔ Hunt (2 min)

**Scénario:** Client "Acme Corp" cherche dev (offre Hunt existe)

### 3.1 Aller à Client Sauron

\`\`\`
Sauron → Kanban
  ↓
Clic "Acme Corp"
  ↓
Détail s'ouvre
\`\`\`

### 3.2 Créer Lien Client → Offre

\`\`\`
Détail → "Liens vers autres modules"
  ↓
"+ Lien"

Module Cible: "Hunt"
Type Lien: "has_open_position" (ou "seeking")
Entité Cible: "Dev React Confirmé" (offre)

✓ Créer
\`\`\`

### 3.3 Résultat

\`\`\`
Lien créé: Acme Corp ──seeking──> Dev React

Visible:
  ├─ Détail Acme (sous "Liens")
  └─ Détail Offre (sous "Liens entrants")

Utilité: "Quels clients cherchent des devs?"
         → Voir toutes offres + clients interested
\`\`\`

---

## 🎨 Étape 4: Voir Graphe Global (2 min)

### 4.1 Vue Graphe Workspace

\`\`\`
Dashboard → "Workspace Graph" ou MySPOT Graphe
  ↓
Visualiser tous modules + liens
\`\`\`

### 4.2 Affichage:

\`\`\`
        Acme Corp (SAURON)
             │ seeking
             ↓
        Dev React (HUNT)
             │
            / \\
    apply  /   \\ match
         /       \\
    Jean ──possède──> React (MYSPOT)
     │               │
     └────────────────┘
        possède

Vue complète: Jean candidat pour Acme
            Jean possède React
            Acme cherche React dev
            = Match parfait! 🎯
\`\`\`

### 4.3 Interactions:

\`\`\`
Clic Jean → Voir tout connecté
  ├─ Offres il peut appliquer
  ├─ Skills il possède
  └─ Clients qui le seeking

Clic Acme → Voir:
  ├─ Offres ouvertes
  ├─ Candidats qui match
  └─ Stratégie associated
\`\`\`

---

## 🔍 Étape 5: Requête Cross-Module (Optionnel)

**But:** "Trouver tous candidats qui possèdent React ET clients qui cherchent React"

### Via Dashboard Search:

\`\`\`
Dashboard → Barre recherche: "React"
  ↓
Résultats:
  - Jean Dupont (Hunt) - possède React
  - React (MySPOT) - skill
  - Dev React Offre (Hunt) - requiert React
  - Acme Corp (Sauron) - seeking React dev

Tous à un endroit!
\`\`\`

### Via Graphe:

\`\`\`
MySPOT → Graphe
  ↓
Filtrer sur "React" nœud
  ↓
Voir automatiquement:
  - Candidats connectés (Jean, Marie, etc)
  - Offres connectées (Dev React)
  - Clients connectés (Acme)
\`\`\`

---

## ✅ Bravo!

Vous avez:
- ✅ Lié candidat à skill
- ✅ Lié client à offre
- ✅ Vu graphe global
- ✅ Compris requêtes cross-modules
- ✅ Prêt pour opérations complexes

---

## 🎓 Cas Avancés

### Cas 1: "Quels candidats peuvent couvrir stratégie Acme?"

\`\`\`
1. Sauron: Client "Acme Corp"
2. Lier à: MySPOT Stratégie "Acme 2025"
3. Stratégie liste skills requis: React, Python, Leadership
4. Lier skills à: Hunt Candidats qui possèdent
5. Résultat: Voir tous candidats capables couvrir stratégie!
\`\`\`

### Cas 2: "Quels clients ma stratégie peut servir?"

\`\`\`
1. MySPOT: Stratégie "IA Services"
2. Lier à: Sauron Clients "Finance", "Tech", "Healthcare"
3. Résultat: Voir clients pour qui stratégie applicable
4. Utilité: Go-to-market très ciblé
\`\`\`

### Cas 3: "Quels candidats cherchent tels clients?"

\`\`\`
1. Hunt: Candidat "Jean"
   Tags: "Interessé par Startups AI"
2. Lier à: Sauron Client "Startup AI XYZ"
3. Résultat: Matching candidat-client opportuniste
\`\`\`

---

## 💡 Tips

### Types Liens Disponibles:

\`\`\`
applies_to         Candidat peut appliquer
references         Candidat a expérience
depends_on         Offre dépend de skill
covers             Stratégie couvre segment
implements         Client implémente stratégie
enables            Candidat active opportunité
is_candidate_for   Candidat pour position
is_company_for     Entreprise pour client
\`\`\`

### Bulk Linking:

\`\`\`
Si Jean + Marie + Pierre
Tous possèdent React + Node:

Créer liens:
  1. Jean possède React
  2. Jean possède Node
  3. Marie possède React
  4. Marie possède Node
  5. Pierre possède React
  6. Pierre possède Node

Futur: Batch creation!
\`\`\`

### Visualiser Liens:

\`\`\`
Chaque entité → Section "Liens"
  ├─ Sortants: Jean ──> React, Node
  ├─ Entrants: ← Offre, ← Autre
  └─ Supprimer: ✕ icône

Très clair, very UI friendly!
\`\`\`

---

## ❓ FAQ

**Q: Je peux lier même type? (Hunt ↔ Hunt)?**
R: Oui, candidat peut être lié à offre, à entreprise, etc.

**Q: Lien uni ou bidirectionnel?**
R: Bidirectionnel. Si Jean possède React → React liée à Jean (auto).

**Q: Supprimer lien?**
R: Clic ✕ dans section "Liens" → confirmer.

**Q: Combien liens max?**
R: Illimité. Performance reste bon jusqu'à des milliers.

**Q: Lien entre 2 MySPOT entités?**
R: Oui, c'est une "Relation" (section Relations).

---

## 🚀 Prochaines Étapes

### Appliquer Patterns

\`\`\`
Votre contexte (ex: recrutement para-médical)
  ↓
Créer candidats Hunt
Créer skills/secteur MySPOT
Créer clients Sauron
Lier tous ensemble
  ↓
Réseau connecté = Intelligence collective!
\`\`\`

### Exporter Graphe

\`\`\`
Détail → "Exporter"
  ↓
Graphe en image haute-res
  ↓
Importer dans présentation
\`\`\`

### Dashboard Tableau de Bord

\`\`\`
Workspace → Créer "Dashboard"
  ↓
Voir métriques tous modules
  ↓
Exemple: "5 candidats peuvent couvrir 3 offres"
\`\`\`

---

**Bon intégration! 🔗**

**Vous maîtrisez maintenant AEGIS complètement!**

Relire:
- [GUIDE_COMPLET.md](../GUIDE_COMPLET.md) pour vue d'ensemble
- [INTEROPERABILITE.md](../GUIDES/INTEROPERABILITE.md) pour détails techniques
`;export{n as default};
