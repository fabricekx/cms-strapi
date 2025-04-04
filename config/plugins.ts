module.exports = {
    // Exemple de configuration d'un plugin
    'users-permissions': {
      enabled: true,
      config: {
        jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
      },
    },
    // Autres plugins...
  };
  