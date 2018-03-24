function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
}

function* WeaponGenerator() {
    yield "Katana";
    yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator();
let item;

while ( ! (item = weaponsIterator.next()).done )
{
    assert(item !== null, item.value)
}