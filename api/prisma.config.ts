import {defineConfig} from 'prisma/config';

process.loadEnvFile('.env');

defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: 'process.env.DATABASE_URL',
  }
});