$(function () {

    var data = {
        student_id: 0,
        student1: {
            id: 1,
            name: "Slappy the Frog",
            missed: 12
        },
        student2: {
            id: 2,
            name: "Lilly the Lizard",
            missed: 12
        },
        student3: {
            id: 3,
            name: "Paulrus the Walrus",
            missed: 12
        },
        student4: {
            id: 4,
            name: "Gregory the Goat",
            missed: 12
        },
        student5: {
            id: 5,
            name: "Adam the Anaconda",
            missed: 12
        }
    };


    var model = {
        reduce: function (id) {
            var student = data[Object.keys(data)[id]];
            --student.missed;
        },
        add: function (id) {
            var student = data[Object.keys(data)[id]];
            ++student.missed;
        }
    };



    var octopus = {
        missed: function (id) {
            model.reduce(id);
            view.render();
        },

        present: function (id) {
            model.add(id);
            view.render();
        },

        setCurrentID: function (current_id) {
            data.student_id = current_id;
        },

        getCurrent: function () {
            return data[Object.keys(data)[data.student_id]];
        },

        getNumMissed: function (id) {
            return model.numberMissed(id);
        },

        init: function () {
            view.init();
        }
    };

    var view = {
        init: function () {
            Object.keys(data).forEach((item) => {
                if (data[item]) {
                    var student = $('input.' + data[item].id);
                    student.click(function () {
                        octopus.setCurrentID(data[item].id);
                        if ($(this).prop("checked") == true) {
                            octopus.missed(data[item].id);
                        } else if ($(this).prop("checked") == false) {
                            octopus.present(data[item].id);
                        }
                    })
                }

            });
            view.render();
        },
        render: function () {
            var student = octopus.getCurrent();
            if (student) {
                this.missingColumn = document.getElementById(student.id);
                this.missingColumn.innerText = student.missed;
            }
        }
    };

    octopus.init();
});


