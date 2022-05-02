The Baum-Sweet sequence

Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;
for n ≥ 0.

Define a generator function baumSweet that sequentially generates the values of this sequence.
It will be tested for up to 1 000 000 values.

Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).

yield
The yield keyword is used to pause and resume a generator function.

function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1

function* baumSweet() {
  yield 1;
  for (let i = 1; ; i++)
    yield +/^(1|00)+$/.test(i.toString(2));
}

