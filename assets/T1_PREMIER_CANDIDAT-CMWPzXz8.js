const n=`# 🎯 Tutoriel T1: Recruter votre Premier Candidat (Hunt)

**Durée:** 15 minutes | **Niveau:** Débutant | **Résultat:** Pipeline complet

---

## Objectif

À la fin de ce tutoriel, vous aurez:
- ✅ Créé une offre d'emploi
- ✅ Ajouté un candidat
- ✅ Créé une candidature
- ✅ Vu le match score
- ✅ Exécuté une action (entretien ou rejet)

---

## 🚀 Étape 1: Créer l'Offre (3 min)

### 1.1 Accéder à Hunt

\`\`\`
Écran d'accueil AEGIS
  ↓
Clic sur onglet "🎯 Hunt" (barre latérale)
  ↓
Écran Hunt s'ouvre
\`\`\`

### 1.2 Aller à Missions

\`\`\`
Vous voyez des onglets: [Candidats] [Entreprises] [Missions] ...
  ↓
Clic "Missions"
\`\`\`

### 1.3 Créer Nouvelle Offre

\`\`\`
Bouton "+ Nouvelle Offre" (coin haut-droit)
  ↓
Formulaire s'ouvre
\`\`\`

### 1.4 Remplir le Formulaire

**Scénario:** Vous cherchez un développeur React

\`\`\`
Champ: Titre
├─ Valeur: "Développeur React Confirmé"

Champ: Description
├─ Valeur: "Rejoins notre équipe pour un projet innovant.
│          Nous cherchons quelqu'un passionné par React
│          et ayant minimum 3 ans d'expérience."

Champ: Localisation
├─ Valeur: "Paris, France"

Champ: Type de Contrat
├─ Valeur: "CDI" (sélectionner du menu déroulant)

Champ: Salaire Min
├─ Valeur: 45000

Champ: Salaire Max
├─ Valeur: 60000

Champ: Compétences Requises
├─ Valeur: "React" (puis ENTER)
├─ Valeur: "Node.js" (puis ENTER)
├─ Valeur: "Docker" (puis ENTER)

Champ: Priorité
├─ Valeur: "Haute" (urgency)
\`\`\`

### 1.5 Valider

\`\`\`
Bouton "Créer" (bas du formulaire)
  ↓
Notification: "✅ Offre créée avec succès"
  ↓
Vous revenez à la liste Missions
  ↓
Votre offre apparaît dans la liste
\`\`\`

---

## 👤 Étape 2: Ajouter un Candidat (3 min)

### 2.1 Aller à Candidats

\`\`\`
Clic onglet "Candidats"
\`\`\`

### 2.2 Créer Nouveau Candidat

\`\`\`
Bouton "+ Nouveau Candidat" (coin haut-droit)
  ↓
Formulaire s'ouvre
\`\`\`

### 2.3 Remplir le Formulaire

**Scénario:** Jean Dupont, candidat réel

\`\`\`
Champ: Prénom
├─ Valeur: "Jean"

Champ: Nom
├─ Valeur: "Dupont"

Champ: Email
├─ Valeur: "jean.dupont@email.com"

Champ: Téléphone
├─ Valeur: "+33 6 12 34 56 78"

Champ: Compétences
├─ Valeur: "React" (ENTER)
├─ Valeur: "Node.js" (ENTER)
├─ Valeur: "Python" (ENTER)
├─ Valeur: "MongoDB" (ENTER)

Champ: Années d'Expérience
├─ Valeur: 4

Champ: Salaire Attendu
├─ Valeur: 52000

Champ: Statut
├─ Valeur: "Disponible" (dans 1 mois)

Champ: Notes
├─ Valeur: "Référence de Marie Martin (Acme Corp)
│           Très motivé par projets IA"
\`\`\`

### 2.4 Valider

\`\`\`
Bouton "Créer"
  ↓
Notification: "✅ Candidat créé"
  ↓
Jean apparaît dans la liste
\`\`\`

---

## 📋 Étape 3: Créer Candidature (4 min)

### 3.1 Vue Pipeline (Optionnel mais Recommandé)

\`\`\`
Clic onglet "Pipeline"
  ↓
Vue Kanban avec colonnes:
  [APPLIED] [INTERVIEW 1] [INTERVIEW 2] [OFFERED]
\`\`\`

### 3.2 Appliquer Candidat à Offre

**Option A: Depuis liste Candidats**

\`\`\`
Onglet: Candidats
  ↓
Trouver "Jean Dupont"
  ↓
Clic sur sa ligne
  ↓
Détail s'ouvre à droite
  ↓
Bouton "+ Ajouter à Offre"
  ↓
Popup: Sélectionner offre
  ├─ "Développeur React Confirmé" ← choisir celle-ci
  ↓
"Appliquer"
\`\`\`

**Option B: Depuis Pipeline**

\`\`\`
Onglet: Pipeline
  ↓
Colonne [APPLIED]
  ↓
Bouton "+ Ajouter Candidat"
  ↓
Sélectionner: Jean Dupont
  ↓
Sélectionner: Dev React Confirmé
  ↓
"Créer Candidature"
\`\`\`

### 3.3 Résultat: Auto-Scoring

\`\`\`
Système calcule automatiquement:

Compétences Match:
  ✓ React (candidat a)
  ✓ Node.js (candidat a)
  ✓ Docker (candidat a)
  = 3/3 compétences = 100%

Salaire Match:
  Candidat attend: 52000
  Offre propose: 45000-60000
  52000 est dans la range = 100%

Expérience Match:
  Candidat a: 4 ans
  Offre demande: 3 ans minimum
  4 >= 3 = 100%

SCORE FINAL:
  = (100% × 0.4) + (100% × 0.4) + (100% × 0.2)
  = 100% ✅✅✅

Affichage: "Jean Dupont - 100% Match 🎯"
\`\`\`

---

## 🎯 Étape 4: Voir les Détails (2 min)

### 4.1 Cliquer sur Candidature

\`\`\`
Pipeline → Colonne [APPLIED]
  ↓
Clic sur "Jean Dupont - 100%"
  ↓
Volet détail s'ouvre à droite
\`\`\`

### 4.2 Voir les Infos

\`\`\`
Affichage:
  ┌─────────────────────────┐
  │ Jean Dupont             │
  │ ★★★★★ 100% Match       │
  │                         │
  │ Offre: Dev React        │
  │ Email: jean@...         │
  │ Phone: +33 6 12 34...   │
  │ Salaire Attendu: 52k€   │
  │ Expérience: 4 ans       │
  │ Compétences: React...   │
  │                         │
  │ Notes:                  │
  │ "Référence de Marie..." │
  │                         │
  │ [Entretien] [Rejeter]   │
  └─────────────────────────┘
\`\`\`

---

## 📅 Étape 5: Planifier Entretien (2 min)

### 5.1 Cliquer "Entretien"

\`\`\`
Détail candidature
  ↓
Bouton "Entretien"
  ↓
Modal s'ouvre
\`\`\`

### 5.2 Remplir Entretien

\`\`\`
Champ: Date d'Entretien
├─ Cliquer calendrier
├─ Choisir: 19 avril 2025

Champ: Heure
├─ 10:00

Champ: Durée (minutes)
├─ 60

Champ: Type d'Entretien
├─ "Technique"

Champ: Interviewer
├─ "Marie Martin"

Champ: Notes
├─ "Préparer dossier React sur GitHub
│  Vérifier portfolio"
\`\`\`

### 5.3 Valider

\`\`\`
Bouton "Créer Entretien"
  ↓
Notification: "✅ Entretien planifié"
  ↓
Candidature passe de [APPLIED] → [INTERVIEW 1]
\`\`\`

---

## 📊 Étape 6: Voir le Résultat (1 min)

### 6.1 Vue Pipeline Complète

\`\`\`
Kanban après entretien:

┌────────────────┬────────────────────────┬──────────────┐
│    APPLIED     │   INTERVIEW 1          │  INTERVIEW 2 │
├────────────────┼────────────────────────┼──────────────┤
│ (vide)         │ • Jean Dupont (100%)   │              │
│                │   19 avril 10:00       │              │
│                │   Interviewer: Marie   │              │
│                │                        │              │
└────────────────┴────────────────────────┴──────────────┘
\`\`\`

### 6.2 Analytics

\`\`\`
Dashboard Hunt:
  Total Candidatures: 1
  Match Score Moyen: 100% 🎯
  Taux Entretiens: 100%
  Temps depuis apply: 0 jours
\`\`\`

---

## ✅ Bravo! Vous Avez Réussi

Vous avez maintenant:
- ✅ Offre "Dev React Confirmé"
- ✅ Candidat "Jean Dupont"
- ✅ Candidature 100% match
- ✅ Entretien planifié
- ✅ Pipeline visible

---

## 🎓 Prochaines Étapes

### Étendre: Ajouter 9 Candidats

\`\`\`
Répéter étape 2 (Ajouter candidat) 9 fois
  ↓
Total: 10 candidats
  ↓
Scores variés (40% - 100%)
  ↓
Pipeline riche
\`\`\`

### Explorer: Import en Masse

\`\`\`
Lire: GETTING_STARTED.md → Section "Importer"
  ↓
Créer CSV: 50 candidats
  ↓
Import en 1 clic
  ↓
Tous auto-scorés
\`\`\`

### Approfondir: Lier à MySPOT

\`\`\`
Lire: [T5_LIER_MODULES.md](./T5_LIER_MODULES.md)
  ↓
Lier Jean Dupont → Skill "React"
  ↓
Voir dans MySPOT graph
  ↓
Vue 360° du candidat
\`\`\`

---

## 💡 Tips

### Le Match Score Expliqué

\`\`\`
Score = (Compétences × 40%) + (Salaire × 40%) + (Expérience × 20%)

Jean:
  - React + Node + Docker = 3/3 = 100% compétences
  - 52k dans 45-60k = 100% salaire
  - 4 ans >= 3 ans requis = 100% expérience
  Score = (1.0 × 0.4) + (1.0 × 0.4) + (1.0 × 0.2) = 100%
\`\`\`

### Cas: Match Partiel

\`\`\`
Jean2 (60% match):
  - React ✓ Node ✗ Docker ✗ = 1/3 = 33% compétences
  - 52k dans 45-60k = 100% salaire
  - 4 ans >= 3 ans = 100% expérience
  Score = (0.33 × 0.4) + (1.0 × 0.4) + (1.0 × 0.2) = 73%
\`\`\`

### Rejeter un Candidat

\`\`\`
Détail candidature
  ↓
Bouton "Rejeter"
  ↓
Entrer raison: "Pas assez d'expérience Docker"
  ↓
"Confirmer Rejet"
  ↓
Candidature passe à [REJECTED]
  ✓ Reste visible pour historique
\`\`\`

---

## ❓ FAQ

**Q: Comment modifier un candidat après création?**
R: Candidats → Clic sur candidat → "Éditer" → Modifier → "Sauver"

**Q: Je peux avoir plusieurs entretiens?**
R: Oui, étapes: Applied → Interview 1 → Interview 2 → Interview 3 → Offered

**Q: Le score est faux?**
R: Vérifier compétences, salaire, expérience. Recalculé auto après modification.

**Q: Comment voir tous mes candidats?**
R: Onglet Candidats → Liste complète. Pipeline = filtre + kanban.

**Q: Je peux archiver candidats?**
R: Oui, Actions rapides → "Archiver" (masque mais garde data).

---

## 🚀 Résumé

**En 15 minutes, vous avez:**
- Créé processus recrutement complet
- Compris match scoring
- Vu pipeline en action
- Planifié entretien
- Prêt à recruter à l'échelle

**Prochaine arrêt:** [T2_ANALYSER_STRATEGIE.md](./T2_ANALYSER_STRATEGIE.md) (MySPOT)

---

**Bon hunting! 🎯**
`;export{n as default};
