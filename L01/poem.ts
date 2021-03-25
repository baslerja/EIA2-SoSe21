namespace L01_Zufallsgedicht {

    let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Dobby", "Dumbledore"];
    let predicate: string[] = ["brews", "loves", "studies", "hates", "is", "destroys"];
    let object: string[] = ["potions", "a Muggle", "Quidditch", "Hogwarts", "Gryffindor", "the Dementor"];

    for (let i: number = subject.length; i > 0; i--) {
        let poem: string = getVerse(subject, predicate, object);
        console.log(poem);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {

        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomPredicate: number = Math.floor(Math.random() * _predicate.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);

        let verse: string = _subject.splice(randomSubject, 1) + " " + _predicate.splice(randomPredicate, 1) + " " + _object.splice(randomObject, 1) + ".";
        return verse;
    }
}