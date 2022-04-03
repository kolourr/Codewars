function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(items => !geese.includes(items));
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  