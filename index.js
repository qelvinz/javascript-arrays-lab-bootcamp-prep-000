const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  kittens;
  return kittens;
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  kittens;
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  kittens;
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  kittens;
  return kittens;
}

function appendKitten(name)
{
  var moreKittens = [kittens, "name"]
  return moreKittens;
}
