const createHttpError = require("http-errors");
const { elasticClient } = require("../config/elasti.config");

async function createIndex(req, res, next) {
  try {
    const { indexName } = req.body;
    if (!indexName)
      throw createHttpError.BadRequest("Invalid value of index name ");
    const result = await elasticClient.indices.create({ index: indexName });
    console.log(result);
    return res.json({
      result,
      message: "Index created",
    });
  } catch (error) {
    next(error);
  }
}

async function removeIndex(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function getIndices(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createIndex,
  removeIndex,
  getIndices,
};
