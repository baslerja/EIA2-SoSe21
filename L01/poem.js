"use strict";
var L01_Zufallsgedicht;
(function (L01_Zufallsgedicht) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Dobby", "Dumbledore"];
    let predicate = ["brews", "loves", "studies", "hates", "is", "destroys"];
    let object = ["potions", "a Muggle", "Quidditch", "Hogwarts", "Gryffindor", "the Dementor"];
    for (let i = subject.length; i > 0; i--) {
        let poem = getVerse(subject, predicate, object);
        console.log(poem);
    }
    function getVerse(_subject, _predicate, _object) {
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        let verse = _subject.splice(randomSubject, 1) + " " + _predicate.splice(randomPredicate, 1) + " " + _object.splice(randomObject, 1) + ".";
        return verse;
    }
})(L01_Zufallsgedicht || (L01_Zufallsgedicht = {}));
//# sourceMappingURL=poem.js.map