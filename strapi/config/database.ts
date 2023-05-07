export default ({ env }) => {
  return {
    connection: {
      client: "postgres",
      // connectionString: env("DATABASE_URL"),
      host: env(
        "DATABASE_HOST",
        "dpg-chbr94m7avjcvo7o1ls0-a.singapore-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "sapota_strapi"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "xh76j5U5YHFiangvlVCdinmJFZpzdsmw"),
      ssl: env.bool("DATABASE_SSL", false) && {
        key: env("DATABASE_SSL_KEY", undefined),
        cert: env("DATABASE_SSL_CERT", undefined),
        ca: env("DATABASE_SSL_CA", undefined),
        capath: env("DATABASE_SSL_CAPATH", undefined),
        cipher: env("DATABASE_SSL_CIPHER", undefined),
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", true),
      },
      debug: env.bool("DATABASE_DEBUG", false),
      settings: {
        forceMigration: env("FORCE_MIGRATION", false),
      },

      // schema: env("DATABASE_SCHEMA", "public"),
    },
  };
};
