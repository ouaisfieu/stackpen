const n=`# 👥 Tutoriel T3: Piloter CRM en 20 Min (Sauron)

**Durée:** 20 minutes | **Niveau:** Débutant | **Résultat:** 10 clients scorés

---

## Objectif

- ✅ Ajouter 10 clients manuellement
- ✅ Voir auto-scoring en action
- ✅ Utiliser Kanban pour prioriser
- ✅ Exporter pour ventes

---

## 🚀 Étape 1: Accéder à Sauron (1 min)

\`\`\`
Écran d'accueil
  ↓
Clic onglet "👥 Sauron"
  ↓
Vue Kanban s'ouvre avec 3 colonnes:
  [COLD] [WARM] [HOT]
\`\`\`

---

## ➕ Étape 2: Ajouter 10 Clients (15 min)

Vous allez créer 10 clients fictifs et les voir auto-scorés.

### Client 1: Prospect High-Value

\`\`\`
+ Nouveau Client

Nom: "Acme Financial"
Email: "contact@acme-fin.com"
Segment: "Finance"
Axe: "Axe 1 - Participation"
Potentiel: 9 (slider haute → très gros budget)
Accessibilité: 8 (PDG accessible)
Urgence: 8 (voudrait solution immédiate)

Créer

→ Auto-score: (9×0.4)+(8×0.3)+(8×0.3) = 8.4 → HOT 🔥
→ Apparaît dans colonne [HOT]
\`\`\`

### Client 2: Prospect Moyen

\`\`\`
+ Nouveau Client

Nom: "Startup EcoTech"
Email: "info@ecotech.io"
Segment: "Environnement"
Axe: "Axe 2 - Formation"
Potentiel: 6
Accessibilité: 6
Urgence: 5

Créer

→ Auto-score: 5.7 → WARM 🟡
→ Apparaît dans colonne [WARM]
\`\`\`

### Client 3: Prospect Difficile

\`\`\`
+ Nouveau Client

Nom: "ONG Humanitaire"
Email: "coucou@ong.fr"
Segment: "Droits humains"
Axe: "Axe 3 - Production"
Potentiel: 3 (budget faible)
Accessibilité: 2 (bureaucratie)
Urgence: 4

Créer

→ Auto-score: 3.1 → COLD 🔵
→ Apparaît dans colonne [COLD]
\`\`\`

### Clients 4-10: Création Rapide

Répéter pattern, varier scores:

\`\`\`
CLIENT 4: "TechCorp AI"
  Potentiel: 8, Accessibilité: 7, Urgence: 6 → WARM/HOT

CLIENT 5: "Ministère Éducation"
  Potentiel: 5, Accessibilité: 3, Urgence: 4 → COLD

CLIENT 6: "startup SaaS"
  Potentiel: 7, Accessibilité: 9, Urgence: 8 → HOT

CLIENT 7: "Corporate Pharma"
  Potentiel: 9, Accessibilité: 5, Urgence: 6 → WARM

CLIENT 8: "Media Co"
  Potentiel: 4, Accessibilité: 8, Urgence: 3 → COLD

CLIENT 9: "Banque Nationale"
  Potentiel: 10, Accessibilité: 4, Urgence: 7 → WARM/HOT

CLIENT 10: "Association Locale"
  Potentiel: 2, Accessibilité: 7, Urgence: 2 → COLD
\`\`\`

---

## 📊 Étape 3: Voir Kanban (2 min)

### Résultat:

\`\`\`
┌──────────────────┬──────────────────┬──────────────────┐
│      COLD        │      WARM        │       HOT        │
├──────────────────┼──────────────────┼──────────────────┤
│ • ONG Humanita.  │ • Startup EcoT.  │ • Acme Finan.    │
│ • Ministère Édu. │ • Corporate Phar.│ • startup SaaS   │
│ • Media Co       │ • Banque Natio.  │ • Banque Natio.  │
│ • Association    │                  │ (en partie Hot)  │
│   Locale         │                  │ • TechCorp AI    │
│                  │                  │                  │
└──────────────────┴──────────────────┴──────────────────┘
\`\`\`

### Actions Possibles:

- **Drag:** Acme Finan. (Hot) → Hot mais mieux → reste Hot
- **Clic:** Voir détails client
- **Clic-droit:** Menu rapide (appeler, email, snooze)

---

## 📈 Étape 4: Voir Analytics (1 min)

\`\`\`
Dashboard Sauron:
  Total: 10 clients
  Hot: 3 (30%) 🔥
  Warm: 3 (30%) 🟡
  Cold: 4 (40%) 🔵
  Score Moyen: 5.6/10
\`\`\`

---

## 🎯 Étape 5: Prioriser Ventes (1 min)

### Stratégie:

\`\`\`
Semaine 1: Contacter tous HOT (3 clients)
  ├─ Appel 30 min chacun
  ├─ Gauge intérêt
  └─ Envoyer proposal

Semaine 2-3: Warm (3 clients)
  ├─ Email + follow-up
  ├─ Démo produit
  └─ Relancer dans 1 semaine

Long-terme: Cold (4 clients)
  ├─ Nurture (email bi-hebdo)
  ├─ Attend meilleure timing
  └─ Peut devenir Hot futur
\`\`\`

---

## ✅ Bravo!

Vous avez:
- ✅ 10 clients avec scores
- ✅ Kanban organisé
- ✅ Priorités claires
- ✅ Prêt pour vendre

---

## 🎓 Prochaines Étapes

### Étendre: Importer 50+ Clients

\`\`\`
[T4_EXPORTER_IMPORTER.md]
├─ Créer CSV 50 clients
├─ Import en 1 clic
├─ Tous auto-scorés
└─ 50 minutes de vente planning!
\`\`\`

### Approfondir: Pilotage Quotidien

\`\`\`
Chaque matin (5 min):
├─ Voir Kanban
├─ Actioner HOT today
├─ Update statuts
├─ Note client
└─ Relancer demain
\`\`\`

### Intégrer: Lier à Hunt

\`\`\`
[T5_LIER_MODULES.md]
├─ Client Sauron = Acme Financial
├─ Offre Hunt = Dev Senior
└─ Lier: Acme seeking Dev
   = Matcher candidats!
\`\`\`

---

## 💡 Tips

### Score Automatique

\`\`\`
Formula: (Potentiel × 40%) + (Accessibilité × 30%) + (Urgence × 30%)

Hot = score 8-10
Warm = 5-7
Cold = 0-4
\`\`\`

### Bulk Update

\`\`\`
Sélectionner 3 Hot clients:
  Ctrl+Click chacun
  → Actions rapides
  → Assigner à vendeur
  → Set follow-up date
  → Batch done!
\`\`\`

### Export Ventes

\`\`\`
Kanban → Export
  ↓
CSV: Tous clients + scores
  ↓
Email à équipe ventes
  ↓
Prioriser facilement
\`\`\`

---

## ❓ FAQ

**Q: Comment change le score?**
R: Modifier Potentiel/Accessibilité/Urgence → recalcul auto.

**Q: Peut-on ajouter critères au score?**
R: Pas actuellement. Formula = 40% Pot + 30% Acc + 30% Urg.

**Q: Drag-drop Kanban ne marche?**
R: Vérifier vue = Kanban (pas Liste). Sinon refresh page.

**Q: Export ne marche?**
R: Vérifier UTF-8 encoding. Si gros fichier, segmenter.

---

**Bon selling! 👥**
`;export{n as default};
