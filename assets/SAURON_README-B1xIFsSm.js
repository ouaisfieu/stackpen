const n=`# 👥 SAURON - Module CRM Client

Bienvenue dans **Sauron**, le module de gestion client et CRM d'AEGIS.

Sauron = **Clients + Scoring Auto + Kanban + Segments + Analytics**

---

## 📌 Concepts Clés

### Sauron en 30 Secondes

\`\`\`
➕ Ajouter client
  ↓
🧮 Score auto-calculé
  ↓
📊 Classé: Cold | Warm | Hot
  ↓
📈 Voir analytics
  ↓
✅ Prioriser ventes
\`\`\`

### Les 3 Dimensions du Score

| Dimension | Weight | Range | Exemple |
|-----------|--------|-------|---------|
| **Potentiel** | 40% | 0-10 | Taille budget client = 8/10 |
| **Accessibilité** | 30% | 0-10 | Facilité contact = 6/10 |
| **Urgence** | 30% | 0-10 | Timeline = 7/10 |

**Score Final = (8×0.4) + (6×0.3) + (7×0.3) = 7.1 → "HOT" 🔥**

### Catégories

\`\`\`
HOT (8-10)      → Contact immédiatement 🔥
WARM (5-7)      → Relancer régulièrement 🟡
COLD (0-4)      → Long terme nurture 🔵
\`\`\`

---

## 🚀 Démarrer avec Sauron

### Installation Rapide (< 5 min)

#### 1. Accéder à Sauron

\`\`\`
Dashboard
  ↓
Clic sur onglet "Sauron"
  ↓
Vue: Kanban (3 colonnes)
\`\`\`

#### 2. Ajouter Premier Client

\`\`\`
Kanban → "+ Nouveau Client"
  ↓
Formulaire:
  Nom: "Acme Corp"
  Email: "contact@acme.com"
  Segment: "Tech"
  Axe Travail: "Axe 1 - Participation"
  Potentiel: 8 (slider)
  Accessibilité: 6 (slider)
  Urgence: 7 (slider)
  Notes: "Référence de X"
  ↓
"Créer"
  ↓
✅ Auto-score = 7.1 → Colonne "HOT"
\`\`\`

#### 3. Voir Kanban

\`\`\`
┌──────────────┬──────────────┬──────────────┐
│     COLD     │     WARM     │     HOT      │
├──────────────┼──────────────┼──────────────┤
│ • Prospect 1 │ • Client 2   │ • Acme Corp  │
│ • Prospect 3 │              │ • Startup XYZ│
│              │              │              │
└──────────────┴──────────────┴──────────────┘

Actions:
  - Drag-drop = changer priorité
  - Clic = voir détails
  - Chevron = actions rapides
\`\`\`

#### 4. Voir Analytics

\`\`\`
Dashboard Sauron:
  Total Clients: 47
  Hot: 12 (25%)
  Warm: 18 (38%)
  Cold: 17 (36%)
  Score Moyen: 5.8/10
\`\`\`

---

## 📊 Segments & Axes

### 10 Segments Métier

\`\`\`
1. Citoyenneté
2. Environnement
3. Social/Solidarité
4. Culture/Arts
5. Éducation
6. Santé
7. Droits humains
8. Médias/Information
9. Économie sociale
10. Interculturalité
\`\`\`

### 5 Axes de Travail

\`\`\`
1. Axe 1 - Participation
2. Axe 2 - Formation
3. Axe 3 - Production
4. Axe 4 - Sensibilisation
5. Mouvement
\`\`\`

**Utilité:** Segmenter clients par domaine métier

---

## 🔧 Workflows Courants

### Workflow 1: Sourcing & Scoring

**But:** Qualifier leads rapidement

\`\`\`
1. Importer 50 clients (fichier CSV)
2. Chaque client auto-scoré
3. Voir Kanban remplit:
   - Top scores → HOT
   - Moyens → WARM
   - Bas → COLD
4. Contacter top 5 HOT
5. Nurture WARM pour semaine prochaine
\`\`\`

**Temps:** 15 min | **Gain:** Priorités claires

---

### Workflow 2: Pilotage Ventes

**But:** Suivre pipeline jour à jour

\`\`\`
1. Chaque matin: Consulter Kanban
2. Voir Hot clients
3. Prendre actions:
   - Appeler
   - Envoyer proposal
   - Suivre up
4. Mettre notes: "Rendez-vous confirmé"
5. Cliquer pour rappel
6. Fin journée: Exporter statuts
\`\`\`

**Temps:** 5 min/jour | **Gain:** Focus vendeur

---

### Workflow 3: Segmentation Stratégique

**But:** Analyser par segment/axe

\`\`\`
1. Filtrer: Segment = "Tech"
2. Voir tous clients Tech
3. Moyen score Tech = 6.2
4. Actions spécifiques Tech:
   - Conférence tech en avril
   - Démo produit
   - Case study tech
5. Exporter liste Tech pour mailing
\`\`\`

**Temps:** 10 min | **Gain:** Campaigns ciblées

---

## 📋 Champs Sauron Détaillés

### Client

| Champ | Type | Requis | Exemple |
|-------|------|--------|---------|
| Nom | Text | Oui | "Acme Corp" |
| Email | Email | Non | contact@acme.com |
| Téléphone | Phone | Non | +33 1 XX XX XX XX |
| Segment | Select | Oui | Tech, Social, etc. |
| Axe Travail | Select | Oui | Axe 1-5 ou Mouvement |
| Potentiel | 0-10 | Oui | 8 |
| Accessibilité | 0-10 | Oui | 6 |
| Urgence | 0-10 | Oui | 7 |
| Score | Calculé | Auto | 7.1 |
| Catégorie | Auto | Auto | Hot / Warm / Cold |
| Notes | Text | Non | "Premier contact via X" |
| Couleur | Color | Non | #FF5733 |

---

## 🎨 Visualisations

### Kanban Board

**Vue par catégorie:**
\`\`\`
Cold (Score 0-4)    Warm (Score 5-7)    Hot (Score 8-10)
  • Client 1          • Client 10          • Acme Corp
  • Client 2          • Client 11          • StartupXYZ
  • Client 3          • Client 12
\`\`\`

**Actions:**
- Drag entre colonnes = reclassifier
- Clic = détails + notes
- Double-clic = éditer
- Clic-droit = options

### Listes Filtrées

\`\`\`
Vue Liste avec filtres:
  - Par Segment
  - Par Axe
  - Par Score (> 8, < 5, etc)
  - Par Priorité
\`\`\`

### Dashboard Analytics

\`\`\`
Indicateurs:
  - Total: 47 clients
  - Répartition: 25% Hot, 38% Warm, 36% Cold
  - Score Moyen: 5.8/10
  - Trend: +5 clients cette semaine
\`\`\`

---

## 💡 Tips & Astuces

### Score Automatique

\`\`\`javascript
// Formula
Score = (Potentiel × 0.4) + (Accessibilité × 0.3) + (Urgence × 0.3)

// Exemples
Cas 1: (8 × 0.4) + (6 × 0.3) + (7 × 0.3) = 7.1 → HOT
Cas 2: (3 × 0.4) + (2 × 0.3) + (2 × 0.3) = 2.6 → COLD
Cas 3: (9 × 0.4) + (10 × 0.3) + (9 × 0.3) = 9.2 → HOT 🔥🔥
\`\`\`

### Import en Masse

\`\`\`
1. Préparer CSV:
   nom,email,segment,axe,potentiel,accessibilite,urgence
   Acme,contact@acme.com,Tech,Axe1,8,6,7
   XYZ,info@xyz.com,Social,Axe2,5,4,6
   ...

2. Workspace Editor → Importer

3. Auto-parse et auto-score

✅ 100+ clients en 1 clic
\`\`\`

### Bulk Actions

\`\`\`
Sélectionner plusieurs clients:
  - Ctrl+Click = multi-sélect
  - Shift+Click = range

Puis:
  - Changer segment (tous à la fois)
  - Assigner à vendeur
  - Changer priorité batch
\`\`\`

### Export Pipeline

\`\`\`
Kanban → "Exporter"
  ↓
Format: CSV
  ↓
Récupère:
  - Tous clients
  - Scores
  - Catégories
  - Segments
  - Notes
\`\`\`

---

## 🔗 Lier Sauron à Autres Modules

### Sauron ↔ Hunt

**Cas:** Client Sauron a offre d'emploi ouverte

\`\`\`
1. Sauron → Client "Acme Corp"
2. "Liens vers autres modules"
3. + Lien → Hunt Offre
4. Sélectionner: "Dev React Senior"
5. Type lien: "has_open_position"
6. ✅ Lié

Résultat: Dans Hunt, offre montrera client associé
\`\`\`

### Sauron ↔ MySPOT

**Cas:** Stratégie MySPOT affecte client Sauron

\`\`\`
1. MySPOT → Plaidoyer "2025"
2. "Liens vers autres modules"
3. + Lien → Sauron Client
4. Sélectionner: "Acme Corp"
5. Type lien: "covers"
6. ✅ Lié

Résultat: En Sauron, voir stratégies affectant ce client
\`\`\`

---

## 📈 Étapes pour Maîtriser Sauron

### Week 1: Les Bases
- [ ] Ajouter 10 clients manuellement
- [ ] Voir auto-scoring
- [ ] Comprendre Hot/Warm/Cold
- [ ] Voir Kanban

### Week 2: Pipeline
- [ ] Importer 50+ clients (CSV)
- [ ] Filtrer par segment
- [ ] Exporter Hot clients
- [ ] Ajouter notes pour chaque

### Week 3: Workflows
- [ ] Pilotage quotidien (5 min/jour)
- [ ] Update scores basé feedback
- [ ] Voir trend (clients montants/descendants)
- [ ] Faire reportings

### Week 4: Intégration
- [ ] Lier à Hunt (offres)
- [ ] Lier à MySPOT (stratégies)
- [ ] Voir cross-module views
- [ ] Automatiser alertes

---

## ❓ FAQ Sauron

**Q: Comment changer le score manuellement?**
R: Éditer client → changer Potentiel/Accessibilité/Urgence → score recalculé auto.

**Q: Je peux ajouter plus de critères au score?**
R: Non actuellement. Formula = 40% Pot + 30% Acc + 30% Urg.

**Q: Drag-drop ne marche pas?**
R: Vérifier view = Kanban (pas Liste). Kanban permet drag-drop.

**Q: Je peux segmenter par plus de champs?**
R: Oui, utiliser Filtres avancés dans Vue Liste.

**Q: Export CSV: champs mal alignés?**
R: Vérifier encoding = UTF-8. Si gros fichier, segmenter.

---

## 🚀 Prochaines Étapes

1. **Démarrer:** Ajouter 5 clients (10 min)
2. **Approfondir:** [Tutoriel T3_GERER_CRM.md](../TUTORIELS/T3_GERER_CRM.md) (20 min)
3. **Intégrer:** Lire [INTEROPERABILITE.md](./INTEROPERABILITE.md) (10 min)
4. **Maîtriser:** Workflow complet ventes (1h/jour)

---

**Bon selling! 👥**
`;export{n as default};
