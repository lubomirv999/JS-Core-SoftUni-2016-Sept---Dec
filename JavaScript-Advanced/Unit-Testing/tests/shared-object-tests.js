let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
    </div>`;


describe('Shared Object', function () {
    it('name property should start as null', function () {
        expect(sharedObject.name).to.equal(null, "Name did not start with value null");
    });

    it('name property should start as null', function () {
        expect(sharedObject.income).to.equal(null, "Name did not start with value null");
    });

    // Lets add even more tests so we can be sure. Also different formating

    it('should be object', () => {
        expect(testObject).to.an('object');
    });

    it('should return null on testObject.name', () => {
        expect(testObject.name).to.equal(null);
    });

    it('should return null on testObject.income', () => {
        expect(testObject.income).to.equal(null);
    });

    it('should return null on testObject.income', () => {
        expect(testObject.income).to.equal(null);
        expect(testObject.name).to.equal(null);
    });

    it('should return null on testObject.income', () => {
        expect(testObject.income).to.equal(null);
        expect($('#income').val()).to.equal('');
        expect(testObject.name).to.equal(null);
        expect($('#name').val()).to.equal('');
    });



    describe('change name', function () {
        it('with invalid parameters, should not change name property', function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal(null, "Name changed incorrectly")
        });

        it('with invalid parameters and pre existing value, should not change name property', function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal('Pesho', "Name changed incorrectly")
        });

        it('with invalid parameters and pre existing value, should not change name property', function () {
            let nameTextBox = $('#name');
            nameTextBox.val('Ivan');
            sharedObject.changeName("");
            expect(nameTextBox.val()).to.equal('Ivan', "Name changed incorrectly")
        });

        it('with valid name, should change name property', function () {
            sharedObject.changeName('Joro');
           expect(sharedObject.name).to.equal('Joro', "Name did not change");
        });

        it('with valid name, should change name textbox value', function () {
            sharedObject.changeName('Joro');
            let nameTextBox = $('#name');
            expect(nameTextBox.val()).to.equal('Stamat', "Name did not change");
        });

        // Lets add even more tests so we can be sure. Also different formating

        it('should return null on testObject.name after changeName("")', () => {
            testObject.changeName('');
            expect(testObject.name).to.equal(null);
        });

        it('should return pesho on testObject.name after changeName("")', () => {
            testObject.name = 'pesho';
            testObject.changeName('');
            expect(testObject.name).to.equal('pesho');
        });

        it('should return test on testObject.name after changeName("test")', () => {
            testObject.changeName('test');
            expect(testObject.name).to.equal('test');
            expect($('#name').val()).to.equal('test');
        });

        it('should return anotherTest on testObject.name after changeName("anotherTest")', () => {
            testObject.changeName('anotherTest');
            expect(testObject.name).to.equal('anotherTest');
            expect($('#name').val()).to.equal('anotherTest');
        });

        it('should return "5" on testObject.name after changeName(5)', () => {
            testObject.changeName(5);
            expect(testObject.name).to.equal(5);
            expect($('#name').val()).to.equal('5');
        });
    });


    describe('change income', function () {
        it('with invalid parameters, should not change income property', function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({name: "pesho"});
            expect(sharedObject.income).to.be.equal(130, "Income changed incorrectly")
        });

        it('with a floating point number, should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(245.24);
            expect(sharedObject.income).to.be.equal(13, "Income changed incorrectly")
        });

        it('with a negative integer number, should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.be.equal(13, "Income changed incorrectly")
        });

        it('with a zero, should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(13, "Income changed incorrectly")
        });


        it('with invalid parameters, should not change income textbox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome({name: "pesho"});
            expect(incomeTextBox.val()).to.equal('5', "Income changed incorrectly");
        });

        it('with a floating point number, should not change income textbox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(24.55);
            expect(incomeTextBox.val()).to.equal('5', "Income changed incorrectly");
        });

        it('with a negative integer number, should not change income textbox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(-15);
            expect(incomeTextBox.val()).to.equal('5', "Income changed incorrectly");
        });

        it('with a zero, should not change income textbox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeTextBox.val()).to.equal('5', "Income changed incorrectly");
        });


        it('with valid integer number, should change income property', function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56, "Income did not change")
        });

        it('with valid integer number, should change income textbox value', function () {
            sharedObject.changeIncome(56);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.equal('56', "Income did not change");
        });

        // Lets add even more tests so we can be sure. Also different formating

        it('should return null on testObject.income after changeIncome("")', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome("")', () => {
            let prevInput = $('#income').val();
            testObject.income = 88;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(88);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(0)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(0);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(-20)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(-20);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return null on testObject.income after changeIncome(2.5)', () => {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(2.5);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('should return "18" on testObject.income after changeIncome("18")', () => {
            testObject.changeIncome(18);
            expect(testObject.income).to.equal(18);
            expect($('#income').val()).to.equal("18");
        });

        it('should return "50" on testObject.income after {1,-5,50})', () => {
            testObject.changeIncome(1);
            testObject.changeIncome(-5);
            testObject.changeIncome(50);
            expect(testObject.income).to.equal(50);
            expect($('#income').val()).to.equal("50");
        });
    });

    describe('updateName', function () {
        it('with invalid parameter, should not change name property', function () {
            sharedObject.name = "test";
            let nameTextBox = $('#name');
            nameTextBox.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('test', "Name changed incorrectly");
        });

        it('with valid name, should change name property', function () {
            let nameTextBox = $('#name');
            nameTextBox.val("testing");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('testing', "Name changed incorrectly");
        });

        // Lets add even more tests so we can be sure. Also different formating

        it('should not change anything on updateName()', () => {
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal(null);
        });

        it('should not change anything on updateName()', () => {
            testObject.name = 'kiro';
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal('kiro');
        });

        it('should update testObject.name on updateName()', () => {
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });

        it('should update testObject.name on updateName()', () => {
            testObject.name = 'test';
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });
    });


    describe('updateIncome', function () {
        it('with non number string, should not change income property', function () {
            sharedObject.name = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("pesho");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, "Income changed incorrectly");
        });

        it('with a floating point number, should not change income property', function () {
            sharedObject.name = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("23.17");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, "Income changed incorrectly");
        });

        it('with a negativ number string, should not change income property', function () {
            sharedObject.name = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("-20");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, "Income changed incorrectly");
        });

        it('with a empty string, should not change income property', function () {
            sharedObject.name = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, "Income changed incorrectly");
        });


        it('with a valid number string representation of an integerm should change income property', function () {
            let incomeTextBox = $('#income');
            incomeTextBox('177');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(177, "Income did not change");
        });

        // Lets add even more tests so we can be sure. Also different formating

        it('should not change anything on updateIncome()', () => {
            testObject.updateIncome();
            expect($('#income').val()).to.equal('');
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome()', () => {
            let incomeInput = $('#income');
            incomeInput.val('test');
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('test');
            expect(testObject.income).to.equal(null);
        });

        it('should not change anything on updateIncome() with previously set obj.income', () => {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(-30);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('-30');
            expect(testObject.income).to.equal(65);
        });

        it('should not change anything on updateIncome() with previously set obj.income', () => {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(0);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('0');
            expect(testObject.income).to.equal(65);
        });

        it('should change income on updateIncome() {50}', () => {
            let incomeInput = $('#income');
            incomeInput.val(50);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('50');
            expect(testObject.income).to.equal(50);
        });
    });
});