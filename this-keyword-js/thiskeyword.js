var test = {
    name: 'amrendra',
    obj: {
        name: 'kumar',
        baz: function () {
            return this.name;
        }
    }
}

console.log(test.obj.baz());