const { expect } = require('chai');
const request = require('supertest');
const { Artist } = require("../src/models");

describe("/artists", () => {
  before((done) => {
    Artist.sequelize
      .sync()
      .then(() => done())
      .catch((error) => done(error));
  });

  beforeEach((done) => {
    Artist.destroy({ where: {} })
      .then(() => done())
      .catch((error) => done(error));
  });
});
