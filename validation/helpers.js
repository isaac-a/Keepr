const helpers = {
  isEmpty: value => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    );
  },
  assignValidValue: values => {
    for (val of values) {
      val = helpers.isEmpty(val) ? val : '';
    }
  }
};

module.exports = helpers;
