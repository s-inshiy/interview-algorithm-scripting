// Calculate average height from received data. If no data, return null.

const data = {
  Mike: {
    height: 177,
    weight: 81
  },
  Luca: {
    height: 163,
    weight: 50
  },
  Serhii: {
    height: 182,
    weight: 76
  }
};

const calcAvgHeight = data => {
  const keys = Object.keys(data);

  if (keys.length > 1) {
    return Math.round(
      keys.map(key => data[key]["height"]).reduce((a, b) => a + b, 0) /
        keys.length
    );
  } else if (keys.length === 1) {
    return data[keys[0]]["height"];
  } else {
    return null;
  }
};

console.log(calcAvgHeight(data));
