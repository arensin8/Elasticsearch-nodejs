const { Client } = require("@elastic/elasticsearch");
const { ElASTIC_USERNAME, ELASTIC_PASSWORD, ELASTIC_HOST } = process.env;

const elasticClient = new Client({
  node: ELASTIC_HOST,
  auth: {
    username: ElASTIC_USERNAME,
    password: ELASTIC_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

module.exports = {
  elasticClient,
};
