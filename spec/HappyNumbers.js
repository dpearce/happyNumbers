//Starting with any positive integer, 
// replace the number by the sum of the squares of its digits


describe("HappyNumbers", function() {

  var happyNumberChecker;

  beforeEach(function() {
    happyNumberChecker = new HappyNumberChecker();
  });

  it("will be sad when non numeric input", function() {
    expect(happyNumberChecker.isHappy('asdf')).toBe(false);
  });

  it("will be sad when input is less than one", function() {
    expect(happyNumberChecker.isHappy(0)).toBe(false);
    expect(happyNumberChecker.isHappy(-1)).toBe(false);
  });

  var expectedHappies = [
    1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129, 130,
   133, 139, 167, 176, 188, 190, 192, 193, 203, 208, 219, 226, 230, 236, 239, 262, 263, 280, 291, 293, 
   301, 302, 310, 313, 319, 320, 326, 329, 331, 338, 356, 362, 365, 367, 368, 376, 379, 383, 386, 391, 
   392, 397, 404, 409, 440, 446, 464, 469, 478, 487, 490, 496, 536, 556, 563, 565, 566, 608, 617, 622, 
   623, 632, 635, 637, 638, 644, 649, 653, 655, 656, 665, 671, 673, 680, 683, 694, 700, 709, 716, 736, 
   739, 748, 761, 763, 784, 790, 793, 802, 806, 818, 820, 833, 836, 847, 860, 863, 874, 881, 888, 899, 
   901, 904, 907, 910, 912, 913, 921, 923, 931, 932, 937, 940, 946, 964, 970, 973, 989, 998, 1000
  ];


  var doHappyTests = function() {
    expectedHappies.forEach(function(input) {
      var description = "expect to be happy: " + input.toString();
      it(description, function() {
        console.log(input);
        expect(happyNumberChecker.isHappy(input)).toBe(true); 
      });
    });
  };

  var doSadTests = function() {
    (1000).times(function(input) {
      if (expectedHappies.indexOf(input) === -1) {
        var description = "expect to be sad: " + input.toString();
        it(description, function() {
          expect(happyNumberChecker.isHappy(input)).toBe(false);
        });
      }
    });
  };

  doHappyTests();
  doSadTests();
});
