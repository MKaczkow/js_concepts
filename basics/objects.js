const person = {
    name: 'Mosh',
    walk: function () {},
    talk() {}
};

person.talk();
person['name'] = 'John';
person.name = 'Jack';

const targetMember = 'name';
person['name'] = 'John';

