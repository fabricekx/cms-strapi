module.exports = ({ env }) => {
    console.log('ADMIN_JWT_SECRET:', env('ADMIN_JWT_SECRET')); // Vérification de la variable
    console.log('API_TOKEN_SALT:', env('API_TOKEN_SALT')); // Vérification de la variable
    console.log('TRANSFER_TOKEN_SALT:', env('TRANSFER_TOKEN_SALT')); // Vérification de la variable
  
    return {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
      apitoken: {
        salt: env('API_TOKEN_SALT'),
      },
      transfer: {
        token: {
          salt: env('TRANSFER_TOKEN_SALT'),
        },
      },
      flags: {
        nps: env.bool('FLAG_NPS', true),
        promoteEE: env.bool('FLAG_PROMOTE_EE', true),
      },
    };
  };
  