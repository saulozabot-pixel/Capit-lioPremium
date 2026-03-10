async function test() {
  const req = await fetch('http://localhost:3000/api/properties/rancho-beira-represa/availability');
  const res = await req.json();
  console.log(res);
}
test();
