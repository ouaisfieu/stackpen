const n=`# 🔗 MySPOT - Module Analyse Stratégique

Bienvenue dans **MySPOT**, le module d'analyse stratégique et de cartographie d'AEGIS.

MySPOT = **Entités + Relations + Stratégie + Visualisation + Répertoire**

---

## 📌 Concepts Clés

### Les 4 Piliers de MySPOT

| Pilier | Contient | Exemple |
|--------|----------|---------|
| **Entités** | Nœuds du réseau | Personne, Org, Lieu, Événement |
| **Relations** | Liens entre entités | Jean → travaille pour → Acme Corp |
| **Stratégie** | Plaidoyer (plan complet) | SWOT, Pestel, Objectifs, Actions |
| **Visualisation** | Graphe interactif | Voir toutes relations à l'écran |

### Types d'Entités

\`\`\`
Personne (👤)
  - Nom, rôle, compétences
  - Ex: "Jean Dupont, Dev React"

Organisation (🏢)
  - Nom, secteur, mission
  - Ex: "Acme Corp, Tech, 50 personnes"

Lieu (📍)
  - Nom, coordonnées, type
  - Ex: "Paris, France, Capital"

Événement (📅)
  - Nom, date, importance
  - Ex: "Conférence Tech 2025"

Document (📄)
  - Nom, type, contenu
  - Ex: "Rapport Q1 2025"
\`\`\`

---

## 🚀 Démarrer avec MySPOT

### Installation Rapide (< 10 min)

#### 1. Accéder à MySPOT

\`\`\`
Dashboard
  ↓
Clic sur onglet "MySPOT"
  ↓
Vue: [Entités | Relations | Stratégie | Graphe]
\`\`\`

#### 2. Créer Première Entité

\`\`\`
Onglet: Entités
  ↓
"+ Nouvelle Entité"
  ↓
Formulaire:
  Nom: "Mon Entreprise"
  Type: "Organisation"
  Description: "Startup tech spécialisée en IA"
  Tags: ["#startup", "#IA", "#Paris"]
  Notes: "Créée en 2020"
  ↓
"Créer"
  ↓
✅ Entité visible
\`\`\`

#### 3. Ajouter Entités Liées

\`\`\`
+ Nouvelle Entité

1ère: Jean Dupont (Personne)
  - Type: "Personne"
  - Rôle: "Fondateur"
  - Skills: "AI, Python, Leadership"

2ème: Paris (Lieu)
  - Type: "Lieu"
  - Coordonnées: 48.856, 2.352
  - Région: "Ile-de-France"

3ème: AI Conference 2025 (Événement)
  - Type: "Événement"
  - Date: "15 mai 2025"
  - Importance: "Haute"
\`\`\`

#### 4. Créer Relations

\`\`\`
Onglet: Relations
  ↓
"+ Nouvelle Relation"

Relation 1:
  De: Jean Dupont
  À: Mon Entreprise
  Type: "Fonde"

Relation 2:
  De: Mon Entreprise
  À: Paris
  Type: "Basée à"

Relation 3:
  De: Mon Entreprise
  À: AI Conference 2025
  Type: "Participe à"
\`\`\`

#### 5. Visualiser le Graphe

\`\`\`
Onglet: Graphe
  ↓
Voir tous les nœuds et liens:
  - "Mon Entreprise" (cœur)
  - "Jean Dupont" connecté
  - "Paris" connecté
  - "AI Conference 2025" connecté

Interactions:
  - Drag: Bouger nœud
  - Zoom: Molette souris
  - Pan: Clic-glisser fond
  - Click: Voir détails entité
\`\`\`

---

## 📊 La Stratégie (Plaidoyer)

### Vue d'Ensemble

Le **Plaidoyer** = Plan stratégique complet en 10 sections

\`\`\`
┌────────────────────────────────────────┐
│      Stratégie d'Entreprise            │
├────────────────────────────────────────┤
│ 1. TOC (Table of Contents)             │
│    - Vision, Valeurs, Hypothèses       │
│                                        │
│ 2. SWOT Analysis                       │
│    - Forces, Faiblesses, Opps, Threats│
│                                        │
│ 3. PESTEL Analysis                     │
│    - Political, Economic, Social, etc. │
│                                        │
│ 4. Problem Tree                        │
│    - Problème root, causes, impacts    │
│                                        │
│ 5. 5 Why                               │
│    - Pourquoi? × 5 niveaux             │
│                                        │
│ 6. Objectives                          │
│    - Buts à atteindre                  │
│                                        │
│ 7. Strategies                          │
│    - Comment y arriver                 │
│                                        │
│ 8. Messages                            │
│    - Communication clé                 │
│                                        │
│ 9. Targets                             │
│    - Audiences prioritaires            │
│                                        │
│ 10. Actions                            │
│     - Tâches concrètes (Who/When/How)  │
└────────────────────────────────────────┘
\`\`\`

### Créer une Stratégie

\`\`\`
1. Clic sur entité (ex: "Mon Entreprise")
2. Volet détail → "Modifier Stratégie"
3. Remplir sections:

SECTION 1: Table of Contents
  Vision: "Devenir leader IA francophone"
  Valeurs: "Transparence, Impact, Innovation"
  Hypothèse Clé: "Marché IA explose en 2025"
  Mission: "Rendre IA accessible à tous"

SECTION 2: SWOT
  Forces:
    - Équipe tech expérimentée
    - Solution innovante
    - Network français fort
  Faiblesses:
    - Budget limité
    - Manque client références
    - Équipe petite
  Opportunités:
    - Appels d'offre gouvernement
    - Levée fonds 2025
    - Partenaires académiques
  Menaces:
    - Compétiteurs US agressifs
    - Régulation IA incertaine
    - Talent drain vers FAANG

SECTION 3: PESTEL
  Politique: "Loi IA EU favorable"
  Économique: "Croissance 3.5%, taux 4%"
  Social: "Demande IA forte entreprises"
  Technologique: "GPU abordable maintenant"
  Environnemental: "Energie verte requise"
  Legal: "RGPD + AI Act à respecter"

... (sections 4-10 similaires)

4. Sauvegarder
5. ✅ Stratégie complete
\`\`\`

---

## 🎨 Visualisations

### Graphe Interactif

**Vue:** Tous entités + relations en graphe 2D

\`\`\`
Interactions:
  - Drag nœud: Bouger position
  - Double-click: Ouvrir détail
  - Scroll: Zoom in/out
  - Clic-droit: Options contexte
  - Filtre: Montrer/cacher types
\`\`\`

**Cas d'Usage:**
- Voir network complet en un coup d'oeil
- Identifier centralités (nœuds clés)
- Détecter clusters (groupes)
- Explorer connexions inattendues

### Listes Structurées

**Vue:** Entités en tableau

\`\`\`
Colonnes:
  - Nom
  - Type
  - # Relations
  - Tags
  - Date création

Actions:
  - Clic = détails
  - Tri par colonne
  - Filtrer par type
  - Search
\`\`\`

---

## 📋 Champs MySPOT Détaillés

### Entité

| Champ | Type | Exemple |
|-------|------|---------|
| Nom | Text | "Jean Dupont" |
| Type | Select | Personne / Org / Lieu / Événement |
| Description | Texte Long | "Fondateur de Acme Corp..." |
| Tags | Multi-tag | #IA, #Tech, #Paris |
| Notes | Text | "Référence de X" |
| Metadata | JSON | {role: "CEO", salary: 50000} |

### Relation

| Champ | Type | Exemple |
|-------|------|---------|
| Entité Source | Link | "Jean Dupont" |
| Entité Cible | Link | "Acme Corp" |
| Type Relation | Select | Fonde / Travaille / Habite / etc |
| Metadata | JSON | {depuis: 2020, titre: "CEO"} |

### Plaidoyer Sections

| Section | Contient | Format |
|---------|----------|--------|
| TOC | 4 champs texte | Vision, Valeurs, Hypothèse, Mission |
| SWOT | 4 listes | Forces[], Faiblesses[], Opps[], Threats[] |
| PESTEL | 6 champs texte | Political, Economic, Social, Tech, Env, Legal |
| Tree | Texte structure | Problème root + causes + impacts |
| 5Why | 6 textes | Problème + 5× "Pourquoi?" |
| Objectives | Liste d'objets | [{titre, description, priorité}] |
| Strategies | Liste d'objets | [{nom, actions}] |
| Messages | Liste | ["Message clé 1", "Message clé 2", ...] |
| Targets | Liste | ["Audience 1", "Audience 2", ...] |
| Actions | Liste d'objets | [{action, responsable, deadline, statut}] |

---

## 💡 Workflows Courants

### Workflow 1: Diagnostic Complet (1h)

\`\`\`
1. Créer entité principale
   Ex: "Mon Entreprise"

2. Ajouter entités contexte
   - Fondateurs (Personnes)
   - Partenaires (Org)
   - Siège (Lieu)
   - Événements clés (Événement)

3. Créer relations
   - Fondateur → Entreprise
   - Entreprise → Partenaires
   - Entreprise → Siège
   - Entreprise → Événements

4. Visualiser graphe
   Voir network complet

5. Remplir Stratégie (Plaidoyer)
   Sections 1-10 progressivement

6. Exporter
   Format: Markdown ou PDF
   Partager diagnostic
\`\`\`

### Workflow 2: Analyse Concurrentielle (1.5h)

\`\`\`
1. Créer entité "Concurrent 1" (Org)
2. Remplir: Secteur, Taille, Forces, etc.
3. Créer entité "Concurrent 2"
4. Ajouter: Produits, Clients, Valeurs
5. Créer relations entre concurrents
6. Comparer vs "Mon Entreprise"
   - SWOT comparative
   - Positioning map
7. Identifier gaps & opportunités
8. Exporter analyse
\`\`\`

### Workflow 3: Cartographie Secteur (2h)

\`\`\`
1. Créer entités: Acteurs + Orgs + Lieux
   - Tous acteurs majeurs du secteur
   - Institutions + régulateurs
   - Lieux clés (Paris, SF, Tokyo)

2. Créer relations complexes
   - Partenariats
   - Concurrences
   - Influences
   - Dépendances

3. Étudier graphe
   - Clusters = secteurs
   - Hubs = acteurs centraux
   - Gaps = espaces vides

4. Visualiser forces
   Physics engine = positionne par "gravité"
   Acteurs importants = centre
   Acteurs periphery = bords

5. Exporter cartographie
   Image haute-res pour rapport
\`\`\`

---

## 🔗 Lier MySPOT à Autres Modules

### MySPOT ↔ Hunt

**Cas:** Entité MySPOT = Compétence, et candidats Hunt la possèdent

\`\`\`
MySPOT: Créer entité "React" (Tech Skill)
Hunt: Candidat "Jean" possède "React"
  ↓
Lien: Jean → possède → React
Visible: Dans MySPOT graphe, Jean connecté à React
Utilité: Voir tous devs React disponibles
\`\`\`

### MySPOT ↔ Sauron

**Cas:** Stratégie couvre clients Sauron

\`\`\`
MySPOT: Plaidoyer = "Stratégie 2025"
Sauron: Client "Acme Corp" affecté par stratégie
  ↓
Lien: Stratégie → covers → Acme Corp
Visible: Dans Sauron, voir quel stratégie affecte ce client
Utilité: Alignement commercial ↔ stratégie
\`\`\`

---

## 📈 Étapes pour Maîtriser MySPOT

### Week 1: Les Bases
- [ ] Créer 3 entités (Personne, Org, Lieu)
- [ ] Créer 2 relations entre elles
- [ ] Voir graphe
- [ ] Exporter en JSON

### Week 2: Stratégie
- [ ] Créer 1 Plaidoyer complet
- [ ] Remplir sections SWOT + PESTEL
- [ ] Définir 5 objectifs clairs
- [ ] Lister 10 actions concrètes

### Week 3: Analyse
- [ ] Créer cartographie secteur (10+ entités)
- [ ] Étudier clusters dans graphe
- [ ] Comparer 2 stratégies (concurrentielle)
- [ ] Exporter pour présentation

### Week 4: Intégration
- [ ] Lier à candidats Hunt
- [ ] Lier à clients Sauron
- [ ] Voir cross-module views
- [ ] Automatiser updates

---

## 🎨 Tips Avancés

### Données Relationnelles

**Lien avec Metadata:**
\`\`\`
Jean → travaille pour → Acme Corp
Metadata: {depuis: 2020, titre: "CEO", salaire: 50000}
\`\`\`

### Visualisation PESTEL

\`\`\`
6 boîtes visibles, chaque élément PESTEL
Interactif: clic = voir détails
\`\`\`

### Plaidoyer Exporté

\`\`\`
Exporter Plaidoyer en Markdown:

# Stratégie 2025

## Table of Contents
- Vision: ...
- Valeurs: ...

## SWOT
### Forces
- ...
- ...

... (10 sections complètes)
\`\`\`

---

## ❓ FAQ MySPOT

**Q: Différence entre Entité et Relation?**
R: Entité = nœud (objet). Relation = lien (connexion entre objets).

**Q: Je peux changer type d'entité?**
R: Oui, dans "Éditer" → changer Type.

**Q: Graphe ne montre rien?**
R: Vérifier relations existent (Onglet Relations). Zoom out si besoin.

**Q: Plaidoyer est obligatoire?**
R: Non, optionnel. Utile pour analyse stratégique approfondie.

**Q: Comment copier une stratégie?**
R: Exporter JSON → Modifier → Importer comme nouvelle entité.

---

## 🚀 Prochaines Étapes

1. **Démarrer:** Créer 1ère entité + 2 relations (10 min)
2. **Approfondir:** [Tutoriel T2_ANALYSER_STRATEGIE.md](../TUTORIELS/T2_ANALYSER_STRATEGIE.md) (30 min)
3. **Intégrer:** Lire [INTEROPERABILITE.md](./INTEROPERABILITE.md) (10 min)
4. **Maîtriser:** Créer diagnostic complet (1-2h)

---

**Bon mapping! 🔗**
`;export{n as default};
