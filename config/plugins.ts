export default (env) => ({

    'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'M4ADN8mBKoJeedK4GirryA=='),
    },
}});
