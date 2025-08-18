(function () {
    'use strict';
    retryWhileError(function () {
        NAinfo.requireApiVersion(0, 2);

        let rand = sl1();
        let randMoreOrLess = sl1();
        let randClass = sl1();

        let universityPairs = [
            ['парень', 'девушка'],
            ['студент', 'студентка']
        ];
        let schoolPairs = [
            ['мальчик', 'девочка'],
            ['ученик', 'ученица']
        ];
        let universityIndex = sl(0, universityPairs.length - 1);
        let schoolIndex = sl(0, schoolPairs.length - 1);

        let universityBoy = sklonlxkand(universityPairs[universityIndex][0]);
        let universityGirl = sklonlxkand(universityPairs[universityIndex][1]);
        let schoolBoy = sklonlxkand(schoolPairs[schoolIndex][0]);
        let schoolGirl = sklonlxkand(schoolPairs[schoolIndex][1]);

        let academic = sklonlxkand(['академия', 'колледж', 'университет', 'институт', 'ВУЗ', 'техникум', 'училище'].iz());
        let school = sklonlxkand(['школа', 'лицей', 'гимназия',].iz());

        let studentBoy = [schoolBoy, universityBoy][randClass];
        let studentGirl = [schoolGirl, universityGirl][randClass];
        let educationInstitution = [school, academic][randClass];

        let students = [studentBoy, studentGirl]
        let boyOrGirl = students[rand];
        let girlOrBoy = students[1 - rand];
        let gender = [boyOrGirl, girlOrBoy];

        let firstHalfOfStudent = 100 - sl(20, 49, 1);
        let differenceInNumberOfStudent = sl(4, 100, 1);

        genAssert(differenceInNumberOfStudent.kratno(firstHalfOfStudent - (100 - firstHalfOfStudent)), "разница учеников в количестве не кратка разнице учеников в %");

        let result = differenceInNumberOfStudent / (firstHalfOfStudent - (100 - firstHalfOfStudent));

        NAtask.setTask({
            text:
                'В ' + educationInstitution.pe + ' ' + boyOrGirl.im + ' составляют ' + firstHalfOfStudent +
                '% числа всех учащихся.' + ' Сколько всего ',

            questions: [
                {
                    text: 'учащихся ',
                    answers: result * 100,
                },
                {
                    text: boyOrGirl.rm + ' среди учащихся',
                    answers: result * firstHalfOfStudent,
                },
                {
                    text: girlOrBoy.rm + ' среди учащихся',
                    answers: result * (100 - firstHalfOfStudent),
                },
            ],
            postquestion: ' в ' + educationInstitution.pe + ', если ' + gender[1 - randMoreOrLess].rm +
                ' там на ' + differenceInNumberOfStudent + ' ' + ['больше', 'меньше'][randMoreOrLess] + ', чем ' +
                gender[randMoreOrLess].rm + '?',
        });
    }, 100);
})();
