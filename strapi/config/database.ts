export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cgp9ssou9tun42sctf70-a.singapore-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_k0ci"),
      user: env("DATABASE_USERNAME", "strapi_k0ci_user"),
      password: env("DATABASE_PASSWORD", "bvzwzieHkK5CUzvUHtgqcHnGceBuc1k9"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
