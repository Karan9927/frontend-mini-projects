import React from "react";
import Card from "./Card";

const ProgrammingComponent = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center my-10 mx-10">
      <Card
        name={"SQL"}
        year={1970}
        names={"Donald D. Chamberlin, Raymond F. Boyce"}
        cases={"Database management"}
      />
      <Card
        name={"C"}
        year={1972}
        names={"Dennis Ritchie"}
        cases={"System Programming, embedded systems"}
      />
      <Card
        name={"C++"}
        year={1983}
        names={"Bjarne Stroustrup"}
        cases={"Game development, system software"}
      />
      <Card
        name={"Perl"}
        year={1987}
        names={"Larry Wall"}
        cases={"Scripting, web development, automation"}
      />
      <Card
        name={"HTML"}
        year={1991}
        names={"Tim Berners-Lee"}
        cases={"Web content structure"}
      />
      <Card
        name={"Python"}
        year={1991}
        names={"Guido van Rossum"}
        cases={"Web development, data analysis, AI"}
      />
      <Card
        name={"Java"}
        year={1995}
        names={"James Gosling"}
        cases={"Enterprise software, Android apps"}
      />
      <Card
        name={"JavaScript"}
        year={1995}
        names={"Brendan Eich"}
        cases={"Web development, browser scripting"}
      />
      <Card
        name={"PHP"}
        year={1995}
        names={"Rasmus Lerdorf"}
        cases={"Web development, server-side scripting"}
      />
      <Card
        name={"CSS"}
        year={1996}
        names={"Håkon Wium Lie, Bert Bos"}
        cases={"Web page styling"}
      />
      <Card
        name={"C#"}
        year={2000}
        names={"Microsoft"}
        cases={"Windows apps, game development"}
      />
      <Card
        name={"Scala"}
        year={2003}
        names={"Martin Odersky"}
        cases={"Web applications, data analysis"}
      />
      <Card
        name={"Golang"}
        year={2009}
        names={"Robert Griesemer, Rob Pike, Ken Thompson"}
        cases={"Cloud computing, microservices"}
      />
      <Card
        name={"Rust"}
        year={2010}
        names={"Graydon Hoare"}
        cases={"Systems programming, safety"}
      />
      <Card
        name={"Kotlin"}
        year={2011}
        names={"JetBrains"}
        cases={"Android app development, server-side"}
      />
      <Card
        name={"Swift"}
        year={2014}
        names={"Apple Inc."}
        cases={"iOS, macOS app development"}
      />
    </div>
  );
};

export default ProgrammingComponent;
