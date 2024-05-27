# Doe

Description courte du projet : chat app with bot AI using OpenAI.

# Projet React Native Expo Conteneurisé

Ce projet est une application React Native utilisant Expo, conteneurisée avec Docker pour faciliter le développement et le déploiement.

## Prérequis

- [Docker](https://www.docker.com/get-started) installé sur votre machine.

## Installation et Configuration

1. **Cloner le dépôt**

   ```sh
   git clone https://github.com/ridha-boughediri/Doe.git
   cd Doe

2. **Créer un fichier .env**

Créez un fichier .env à la racine du projet pour les variables d'environnement nécessaires. Exemple :

env

3. **Créez un fichier nommé Dockerfile à la racine de votre**     projet avec le contenu suivant :


3. **Créez un fichier .dockerignore**

 à la racine de votre projetpour ignorer les fichiers et dossiers inutiles lors de la création de l'image Docker. Voici un exemple de contenu pour .dockerignore :

        dockerignore
        Copy code
        node_modules
        npm-debug.log
        .env

4. **Construction de l'image Docker**

Pour construire l'image Docker de l'application, exécutez la commande suivante à la racine du projet :

    ```sh
    docker build -t my-expo-app .



5. **Démarrage du conteneur**

Pour démarrer le conteneur, utilisez la commande suivante :

    ```sh
    docker run -p 19000:19000 -p 19001:19001 -p 19002:19002 my-expo-app.


6. **Utilisation de volumes Docker**
Pour faciliter le développement, vous pouvez monter le code source dans le conteneur en utilisant des volumes Docker. Cela permet de voir les modifications sans avoir à reconstruire l'image.


```sh
 
 docker run -p 19000:19000 -p 19001:19001 -p 19002:19002 -v $(pwd):/app my-expo-app
