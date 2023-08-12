// Create

const create = async (model, documents) => {
  await model.create(documents, (err, docs) => {
    (err, users) => {
      if (err) {
        console.error(err);
        return 0;
      } else {
        console.log("Docs created:", docs);
        return 1;
      }
    };
  });
};

// Retrieve

const find = async (model, query) => {
  await model.find(query, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Docs found:", docs);
      return 1;
    }
  });
};

const findOne = async (model, query) => {
  await model.findOne(query, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc found:", docs);
      return 1;
    }
  });
};

const findOneByID = async (model, id) => {
  await model.findById(id, (err, docs) => {
    if (err) {
      console.error(err);
      return 0;
    } else {
      console.log("Doc found:", docs);
      return 1;
    }
  });
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