import React, { useEffect } from "react"

export default function About() {
    const eArr = [
        "o",
        "p",
        "e",
        "n",
        "s",
        "i",
        "d",
        "e",
        "p",
        "i",
        "z",
        "z",
        "a",
        "@",
        "g",
        "m",
        "a",
        "i",
        "l",
        ".",
        "c",
        "o",
        "m",
    ]

    return (
        <div className="container">
            <h1>Openside</h1>
            <p>
                Dan &amp; Balz have teamed up with Gloucester captain, stalwart
                and all round top boi Lewis Ludlow to take Hooker &amp; Eight
                Pizzas on road!!
            </p>
            <p>
                Ludz has been a Hooker &amp; Eight supporter from the very
                beginning opening up the restaurant in October 2019. It wasn't
                long before he approached the boys about taking the pizza out to
                the people. The opportunity was like a cross-field kick had
                landed into our hands with the try line beckoning. We grabbed at
                the chance and Openside Pizza was born!!
            </p>
            <p>
                Openside Pizza is a converted horse-box available for any
                outdoor functions. Whether it be your wedding, birthday, office
                or house party -, our preemo pizzas will be available for hire!
                You never know - Lewis might be helping serve and slice and you
                can twist his ear about the current state of Gloucester's
                fortunes. He might even bring some friends along ;)
            </p>
            <p>
                The minimum order will be 50 pizzas and we will provide a
                generous range of our famous Hooker &amp; Eight toppings, sides
                and dips. We can cater to any taste or dietary requirement
                (lactose and gluten free options) as well as a fantastic range
                of vegetarian and vegan options.
            </p>
            <p>
                The Openside horse-box is solar powered and self-sustained so no
                power link ups are required. The horse-box is able to fit on
                regular sized driveway and requires sensible access to sites.
            </p>
            <p>
                Openside Pizza is fully insured and a full allergen list is
                available upon request.
            </p>
            <p>
                To enquire about having Openside Pizza at your event - please
                email <a href={`mailto:${eArr.join("")}`}>{eArr.join("")}</a> or
                call Hooker &amp; Eight on
                <a href="tel:01452 690829">01452 690829</a> during opening
                hours.
            </p>
            <p>We will see you at a party soon! </p>
            <p>Dan, Balz &amp; Ludz</p>
            <p>Openside Pizza</p>
        </div>
    )
}
