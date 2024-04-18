const { elasticClient } = require("../config/elastic.config");
const blogIndex = "blog";
async function getALlBlogs(req, res, next) {
  try {
    const value = req.params.value;
    const blogs = await elasticClient.search({
      index: blogIndex,
      q: value,
    });
    return res.json(blogs.hits.hits);
  } catch (error) {
    next(error);
  }
}

async function createBlog(req, res, next) {
  try {
    const { title, author, text } = req.body;
    const createResult = await elasticClient.index({
      index: blogIndex,
      document: {
        title,
        text,
        author,
      },
    });
    res.json(createResult);
  } catch (error) {
    next(error);
  }
}

async function removeBlog(req, res, next) {
  try {
    const { id } = req.params;
    const deletedResut = await elasticClient.deleteByQuery({
      index: blogIndex,
      query: {
        match: {
          _id: id,
        },
      },
    });
    return res.json(deletedResut);
  } catch (error) {
    next(error);
  }
}

async function updateBlog(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    Object.keys(data).forEach((key) => {
      if (!data[key]) delete data[key];
    });
    const blog =
      (
        await elasticClient.search({
          index: blogIndex,
          query: { match: { _id: id } },
        })
      ).hits.hits?.[0] || {};
    const payload = blog?._source || {};
    const updateResut = await elasticClient.index({
      index: blogIndex,
      id,
      body: { ...payload, ...data },
    });
    return res.json(updateResut);
  } catch (error) {
    next(error);
  }
}

async function searchByTitle(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function searchByMultiField(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function searchByRegexp(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getALlBlogs,
  createBlog,
  removeBlog,
  searchByTitle,
  searchByMultiField,
  searchByRegexp,
  updateBlog,
};
