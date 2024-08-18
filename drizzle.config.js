/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI-Content-Generator_owner:hvf0DOBRJSn2@ep-autumn-unit-a1ym6fv2.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
};
