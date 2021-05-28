# XAI-Visualization

Ce projet consiste à créer une visualisation permettrant d'expliquer la manière dont ont été générée les recommandation de l'application Asker.
Pour ce faire je suis parti de la visualisation créée par Rémy Casado disponble à cette adresse: https://gitlab.com/RemiCasado/open-learner-model.

## Execution

Une fois téléchargé il suffit d'ouvrir le fichier 'index.html' dans le navigateur de votre choix.

## Dépendances

Ce projet a été développé en Typescript et utilise le framework Bootstrap et la bibliothèque D3.

## À savoir sur le code

Cette visualisation se base sur 2 types de données qui sont actuellement codés en dur dans le code qu'il faudra mettre à jour lors de l'intégration dans l'application:
 * le profil de l'utilisateur concerné par les explications. Pour le récupérer il faut requêter une API:
   * verbe http : GET,
   * url : https://comper.projet.liris.cnrs.fr/sites/profile-engine/api/profile/recommendation/index.php
   * paramètres : ?frameworkId=\__&learnerUsername=__    (username = asker:ext_Nom.Prenom)   
   * headers={"x-comper-accepted-host": "https://traffic.irit.fr"}

 * les traces générées par l'algorithme. Ces traces sont stockées dans des fichiers qui sont en cours de modifications. Il faudra discuter de la manière dont ces fichiers seront récupérés.
