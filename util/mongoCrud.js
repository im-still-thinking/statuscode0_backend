// Create

const create = async (model, documents) => {
  const docs = await model.create(documents);
  return docs
};

// Retrieve

const find = async (model, query) => {
  const docs = await model.find(query);
  return docs
};

const findOne = async (model, query) => {
  const doc = await model.findOne(query);
  return doc
};

const findOneByID = async (model, id) => {
  const doc = await model.findById(id);
  return doc
};

const findCount = async (model, query) => {
  await model.count(query, (err, count) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Count is:", count);
      return 1;
    }
  });
};

// Update

const findByIdAndUpdate = async (model, id, update) => {
  await model.findByIdAndUpdate(id, update, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc found:", docs);
      return 1;
    }
  });
};

const findOneAndUpdate = async (model, query, update) => {
  await model.findOneAndUpdate(query, update, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc found:", docs);
      return 1;
    }
  });
};

const findOneAndUpdateOrCreate = async (model, query, update) => {
  await model.findOneAndUpdate(
    query,
    update,
    { upsert: true, new: true },
    (err, docs) => {
      if (err) {
        console.error(err);
        return 0;
      } else {
        console.log("Doc found:", docs);
        return 1;
      }
    }
  );
};

const updateMany = async (model, query, update) => {
  await model.updateMany(query, update, (err, result) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Result:", result);
      return 1;
    }
  });
};

//Delete

const findByIdAndDelete = async (model, id) => {
  await model.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc deleted:", docs);
      return 1;
    }
  });
};

const findOneAndDelete = async (model, query) => {
  await model.findOneAndDelete(query, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc deleted:", docs);
      return 1;
    }
  });
};

const deleteMany = async (model, query) => {
  await model.deleteMany(query, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc deleted:", docs);
      return 1;
    }
  });
};

module.exports = {create, find, findOne, findOneByID, findCount, findByIdAndUpdate, findOneAndUpdate, findOneAndUpdateOrCreate, updateMany, findByIdAndDelete, findOneAndDelete, deleteMany};