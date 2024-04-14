const { elasticClient } = require("../config/elastic.config");

const createHttpError = require("http-errors");

async function createIndex(req, res, next) {
  try {
    const { indexName } = req.body;
    if (!indexName) {
      throw createHttpError.BadRequest("Invalid value of index name");
    }

    // Assuming elasticClient is properly initialized
    const result = await elasticClient.indices.create({ index: indexName });
    console.log(result);
    return res.json({
      result,
      message: "Index created successfully",
    });
  } catch (error) {
    next(error); // Pass error to the error-handling middleware
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
    const indices = await elasticClient.indices.getAlias();
    const regexp = /^\.+/
    return res.json({
      indices : Object.keys(indices).filter(item => !regexp.test(item)),
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createIndex,
  removeIndex,
  getIndices,
};
