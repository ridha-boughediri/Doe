
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Expo CLI globalement
RUN npm install -g expo-cli

# Copier tout le projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port utilisé par Expo
EXPOSE 19000

# Démarrer l'application Expo
CMD ["expo", "start", "--tunnel"]
